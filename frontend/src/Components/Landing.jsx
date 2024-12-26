import React from "react";
import AboutUs from "./AboutUs";
import HomeReasons from "./HomeReasons";
import OurCauses from "./OurCauses";
import OurSponsors from "./OurSponsors";
import Carousel from "./Carousel";
import { GoGoal } from "react-icons/go";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import img1 from '../assets/650.jpg';
import img3 from '../assets/OE60X50.jpg';
import img4 from '../assets/zas3.jpg';


const data = {
  about :[
    {
      img: <GoGoal/>,
      title: "our mission",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    },
    {
      img: <HiOutlineBanknotes/>,
      title: "Make donations",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    },
    {
      img:< FaHandsHelping/>,
      title: "Help & support",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    },
    {
      img:<FaPuzzlePiece/>,
      title: "our programs",
      details: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
      link: "#"
    }
  ],
  causes : [
    {
      img: "https://images.unsplash.com/photo-1608342381036-15657da6bf58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HUNGER AND POVERTY",
      progress: "30%", 
      funds: "10$ / 500$", 
      details: "Help fight hunger and poverty by contributing to those in need.",
    },
    {
      img: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "EDUCATION AND TRAINING",
      progress: "60%",
      funds: "400$ / 700$",
      details: "Support education and training programs for underprivileged communities.",
    },
    {
      img: "https://images.unsplash.com/photo-1582133925315-694371d92da2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HUMAN RIGHTS",
      progress: "40%",
      funds: "400$ / 1000$",
      details: "Promote human rights and equality for all individuals.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1674727219418-f40c2d47a383?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ARTS AND CULTURE",
      progress: "60%",
      funds: "400$ / 700$",
      details: "Preserve and promote arts and culture worldwide.",
    },
  ],
  reasons: [
    {
      img: "https://images.unsplash.com/photo-1584568518279-d781778d1481?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We fight together",
      subtitle: "We are humans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    },
    {
      img: "https://images.unsplash.com/photo-1528289343377-a0249042ee2d?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We care about others",
      subtitle: "We are humans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    },
  ],
  sponsors: [
    img1,
    img4,
    img3,
    img4,
   ],
};

const Landing = ({handleOpen}) => {
  return (
    <div >
      <Carousel handleOpen={handleOpen}/>
      <AboutUs about={data.about}  />
      <HomeReasons reasons={data.reasons} />
      <OurCauses causes={data.causes} handleOpen={handleOpen} />
      <OurSponsors sponsors={data.sponsors} />
    </div>
  );
};

export default Landing;
