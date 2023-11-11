/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pixel2.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Integración de Azure con Motor de Juegos",
    description:
      "Proyecto colaborativo para integrar servicios de Azure con un motor de juegos, mejorando el backend de un juego multijugador.",
    url: "URL_del_proyecto",
  },
  {
    title: "Desarrollo de Juego Educativo para Principiantes",
    description:
      "Contribución en el diseño y desarrollo de un videojuego educativo, utilizando principios de diseño de juegos y programación básica.",
    url: "URL_del_proyecto",
  },
  {
    title: "Mi Juego Personal - Portafolio Interactivo",
    description:
      "Desarrollado como parte de un taller de creación de videojuegos. Un juego interactivo que sirve como mi portafolio digital, mostrando mi experiencia y habilidades de diseño.",
    url: "URL_del_proyecto",
  },
  {
    title: "Tutorial de Creación de Niveles en Unity",
    description:
      "Serie de videos educativos explicando el proceso de diseño y desarrollo de niveles en Unity, destacando las mejores prácticas y herramientas creativas.",
    url: "URL_del_proyecto",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
