import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Home.css';
import Data from './Data';
import Skills from "../Skills/Skills";
import { Toaster } from "react-hot-toast";
import HomeBlogs from "../Blogs/HomeBlogs";
import Contact from "../Contact/Contact";
import HomeProjects from "../Projects/HomeProjects";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="social-icons">
            <a href="https://github.com/mehedii-h03" className="home__social-icon" target="new">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/mehedi-hasan-37949b260/" className="home__social-icon" target="new">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://www.instagram.com/adryan_mehedi/" className="home__social-icon" target="new">
              <AiOutlineInstagram ></AiOutlineInstagram>
            </a>
          </div>
          <div className="home__img"></div>
          <Data></Data>
        </div>
        {/* scroll */}
        <div className="home__scroll">
          <a href="#skills" className="home__scroll-btn button--flex" id="about">
            <svg
              width="32px"
              height="32px"
              className="home__scroll-mouse"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.5,
              }}
            >
              <path
                className="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: "var(--title-color)",
                  strokeWidth: "20px",
                }}
              ></path>
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: "var(--title-color)",
                  strokeWidth: "20px",
                }}
              ></path>
            </svg>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
      <Skills />
      <HomeProjects />
      <Toaster />
      <HomeBlogs />
      <Contact />
    </section>
  );
};

export default Home;
