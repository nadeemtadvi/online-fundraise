

const donateCreate = async (req, res) => {
  try {
		const { name, email, amount } = req.body;

		// Create a PaymentIntent on Stripe
		const paymentIntent = await stripeInstance.paymentIntents.create({
			amount: amount * 100, // Stripe accepts amounts in cents
			currency: 'usd',
			payment_method_types: ['card'],
		});

		// Save initial donation details in the database
		const newDonation = new Donation({
			name,
			email,
			amount,
			paymentId: paymentIntent.id,
		});

		await newDonation.save();

		res.status(200).json({
			clientSecret: paymentIntent.client_secret,
			message: 'Payment initiated, complete the payment!',
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	} 
};


const donatehook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
	let event;

	try {
		event = stripeInstance.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
	} catch (err) {
		console.error(`Webhook signature verification failed: ${err.message}`);
		return res.sendStatus(400);
	}

	// Handle the event
	switch (event.type) {
		case 'payment_intent.succeeded':
			const paymentIntent = event.data.object;
			await Donation.findOneAndUpdate(
				{ paymentId: paymentIntent.id },
				{ status: 'Succeeded' }
			);
			break;

		case 'payment_intent.payment_failed':
			const failedIntent = event.data.object;
			await Donation.findOneAndUpdate(
				{ paymentId: failedIntent.id },
				{ status: 'Failed' }
			);
			break;

		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	res.sendStatus(200);
};

export { donateCreate, donatehook };
