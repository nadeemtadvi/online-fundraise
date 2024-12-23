import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import HomeReasons from "./HomeReasons";
import OurCauses from "./OurCauses";
import OurSponsors from "./OurSponsors";
import DonateModal from "./DonateModal";
import Footer from "./Footer";
import Carousel from "./Carousel";

const data = {
  about :[
    {
      img: "assets/images/icons/our-mission-icon.png",
      title: "our mission",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    },
    {
      img: "assets/images/icons/make-donation-icon.png",
      title: "Make donations",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    },
    {
      img: "assets/images/icons/help-icon.png",
      title: "Help & support",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    },
    {
      img: "assets/images/icons/programs-icon.png",
      title: "our programs",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    }
  ],
  causes: [
    {
      img: "assets/images/icons/our-mission-icon.png",
      title: "Our Mission",
      details:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit proin vel lectus ut eta esami vera dolor sit amet consectetur.",
      progress: "50%",
      funds: "€500",
    },
    {
      img: "assets/images/icons/make-donation-icon.png",
      title: "Make Donations",
      details:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit proin vel lectus ut eta esami vera dolor sit amet consectetur.",
      progress: "75%",
      funds: "€750",
    },
    {
      img: "assets/images/icons/help-icon.png",
      title: "Help & Support",
      details:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit proin vel lectus ut eta esami vera dolor sit amet consectetur.",
      progress: "60%",
      funds: "€600",
    },
    {
      img: "assets/images/icons/programs-icon.png",
      title: "Our Programs",
      details:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit proin vel lectus ut eta esami vera dolor sit amet consectetur.",
      progress: "80%",
      funds: "€800",
    },
  ],
  reasons: [
    {
      img: "https://images.unsplash.com/photo-1584568518279-d781778d1481?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We fight together",
      subtitle: "We are humans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    },
    {
      img: "https://images.unsplash.com/photo-1528289343377-a0249042ee2d?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We care about others",
      subtitle: "We are humans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    },
  ],
  sponsors: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ],
};

const Landing = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Carousel/>
      <AboutUs about={data.about}  />
      <HomeReasons reasons={data.reasons} />
      <OurCauses causes={data.causes} />
      <OurSponsors sponsors={data.sponsors} />
      <DonateModal />
      <Footer />
    </div>
  );
};

export default Landing;
