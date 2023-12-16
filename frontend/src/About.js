import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
  
    <section>
      <div className="about-container">
        <div className="image-container">
          <img src="img.jpg" alt="" />
        </div>
        <div className="text-container">
          <h1>About us</h1>
          <p>
            If you dream of becoming a cricket player, you are on the right way.
            Here we will help to get your dream by validating the certificates
            and by conducting various evaluations. We will conduct various
            competitions and evaluations to exhibit your skills. Those who have
            the required skills and talents will reach their desired heights.
            <h2>We will help you</h2>
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </section>

  );
};

export default About;
