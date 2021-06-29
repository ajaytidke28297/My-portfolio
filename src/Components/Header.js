import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              <span>Works</span>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          Hello, I'm
          <span className="responsive-headline highlight">
            <TypeWriter typing={0.5}>{name ? ` ${name}.` : null}</TypeWriter>
          </span>
          <h3>
            A professional <span>{occupation}</span>
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>

      <div className="bubbles">
        <img src="/images/bubble.png" alt="bubble" />
        <img src="/images/bubble.png" alt="bubble" />
        <img src="/images/bubble.png" alt="bubble" />
        <img src="/images/bubble.png" alt="bubble" />
        <img src="/images/bubble.png" alt="bubble" />
        <img src="/images/bubble.png" alt="bubble" />
        <img src="/images/bubble.png" alt="bubble" />
      </div>
    </header>
  );
};

export default Header;
