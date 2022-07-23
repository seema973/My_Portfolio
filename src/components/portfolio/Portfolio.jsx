import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.png";
import IMG3 from "../../Assets/portfolio3.png";
import IMG4 from "../../Assets/portfolio4.jpeg";
import IMG5 from "../../Assets/portfolio5.jpg";
import IMG6 from "../../Assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Donation Hub",
    github: "https://github.com/seema973/Donation-Hub.git",
    demo: "https://donation-hub.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Spotify Clone",
    github: "https://github.com/seema973/Spotify-Clone.git",
    demo: "https://spotiify-clone.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "OTT-Platform",
    github: "https://github.com/seema973/OTT-Platform.git",
    demo: "https://ott-platform-master.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Learnify Master",
    github: "https://github.com/seema973/Learnify-Master.git",
    demo: "https://learnify-master.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Amazon Clone",
    github: "https://github.com",
    demo: "https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg?w=740&t=st=1657730412~exp=1657731012~hmac=3be56e434fc91764fb92fd95053893cba87d6c991fbb814bd8af5318bbcb0b30",
  },
  {
    id: 6,
    image: IMG6,
    title: "Social Media App",
    github: "https://github.com",
    demo: "https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg?w=740&t=st=1657730412~exp=1657731012~hmac=3be56e434fc91764fb92fd95053893cba87d6c991fbb814bd8af5318bbcb0b30",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
