import React from "react";
import yesImage from "./../../assets/feminist-lettering-compositions-and-stickers-2-png-01.png";
import flowerSymbolImage from "./../../assets/feminist-lettering-compositions-and-stickers-2-png-07.png";
import caseyPhoto from "./../../assets/CaseyF.jpeg";
import catlynPhoto from "./../../assets/CatlynB.jpeg";
import wesPhoto from "./../../assets/WesleyG.jpeg";
import irmakPhoto from "./../../assets/IrmakE.jpeg";
import lidiaPhoto from "./../../assets/LidiaK.jpeg";
import brycePhoto from "./../../assets/BryceW.jpeg";
import rachelPhoto from "./../../assets/RachelA.jpeg";
import "./AboutView.scss";

const AboutView = () => {
  return (
    <div className='about-container'>
      <h1>About Roe'd to Aid</h1>

      <div className='mission-container'>
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      
      <img className='illustration' src={yesImage} alt="person holding up fist"></img>

      <div className='inclusivity-container'>
        <h3>Inclusivity Counts</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      
      <img className='illustration' src={flowerSymbolImage} alt="female symbol with flowers"></img>
      
      <div className='team-container'>
        <h4>Meet the Team</h4>
        <img src={rachelPhoto} alt="headshot of Rachel"></img>
        <img src={catlynPhoto} alt="headshot of Catlyn"></img>
        <img src={irmakPhoto} alt="headshot of Irmak"></img>
        <img src={lidiaPhoto} alt="headshot of Lidia"></img>
        <img src={caseyPhoto} alt="headshot of Casey"></img>
        <img src={wesPhoto} alt="headshot of Wes"></img>
        <img src={brycePhoto} alt="headshot of Bryce"></img>
      </div>

    </div>
  )
};

export default AboutView;
