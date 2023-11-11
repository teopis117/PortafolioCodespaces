/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/pixel.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a UI/UX student at Barnett Technical University with a focus on video game development. I enjoy crafting unique and intuitive user interfaces for games, combining simplicity with creativity.";

/**
 * List of skills or technologies you work on, are learning,
 * passionate about, or enjoy, with a focus on video game development.
 */
const skillsList = [
  "Game Interface Design", // Adapted from Web design
  "Player Experience Design", // Adapted from User experience
  "Accessible Game Design", // Adapted from Inclusive design
  "Gamer Focus Group Testing", // Adapted from Focus group testing
  "Mobile Game Interfaces", // Adapted from Mobile user interfaces
  "Game Graphics Design", // Adapted from Graphic design
  "3D Modeling and Animation",
  "Level and World Design",
  "Game Mechanics Development",
  "Cross-Platform UI/UX Design"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This part is particularly important
 * for expressing your unique approach to game development.
 */
const detailOrQuote =
  "I am passionate about creating immersive and engaging game experiences through innovative UI/UX design. My journey in game development is driven by a desire to blend artistic design with functional gameplay, making each interaction meaningful and accessible to a diverse range of players.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
