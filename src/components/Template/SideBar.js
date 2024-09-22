import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Krishna Bajpai</h2>
        <p>
          <a href="mailto:bajpaikrishna715@gmail.com">bajpaikrishna715@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Krishna. I am a student at{' '} <a href="https://kmclu.ac.in/">KMCLU</a> pursuing Bachelors of Technology from the field of Robotics and Automation, expert in the field of cybersecurity, Artificial Intelligence and Data Science. I have worked as freelancer with various roles like Data Science Expert, Software Expert, Artificial Expert and Cybersecurity Expert.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Krishna Bajpai <Link to="/">krishnabajpai.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
