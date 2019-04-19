import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" id="home">
          <Link to="/" className="nav-link" >
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <button
            className="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            About
          </button>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/mission" className="dropdown-item" id="mission">
              Mission
            </Link>
            <Link to="/message" className="dropdown-item" id="message">
              Message
            </Link>
            <Link to="/cost" className="dropdown-item" id="cost">
              Cost
            </Link>
            <Link to="/sponsorship"className="dropdown-item" id="sponsorship">
              Sponsorship
            </Link>
            <div className="dropdown-divider" />
            <Link to="/partners" className="dropdown-item" id="partners">
              Partners
            </Link>
            <Link to="/newsletter" className="dropdown-item" id="newsletters">
              Newsletters
            </Link>
            <Link to="/resources" className="dropdown-item" id="resources">
              Resources
            </Link>
            <Link to="/contact" className="dropdown-item" id="contact">
              Contact
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <button
            className="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Campers
          </button>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/campers" className="dropdown-item" id="campers">
              Campers
            </Link>
            <Link to="/photos" className="dropdown-item" id="photos">
              Photos & Video
            </Link>
            <Link to="/applications" className="dropdown-item applications">
              Applications
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <button
            className="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Volunteers
          </button>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/callforleaders" className="dropdown-item" id="leaders">
              Call For Leaders
            </Link>
            <Link to="/counselors" className="dropdown-item" id="counselors">
              Counselors
            </Link>
            <Link to="/nurses" className="dropdown-item" id="nurses">
              Nurses/Medical
            </Link>
            <Link to="/getinvolved" className="dropdown-item" id="involved">
              Get Involved
            </Link>
            <Link to="/applications" className="dropdown-item applications">
              Applications
            </Link>
          </div>
        </li>
        <li className="nav-item" id="give">
          <Link to="/give" className="nav-link">
            Give
          </Link>
        </li>
        <li className="nav-item" id="events">
          <Link to="/events" className="nav-link">
            Events
          </Link>
        </li>
        <li className="nav-item" id="store">
          <Link to="/store" className="nav-link" >
            Store
          </Link>
        </li>
      </ul>
    </div>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active my-auto d-none d-md-block">
        <a href="https://www.facebook.com/YouthRallyInc">
          <i className="fab fa-facebook-square fa-2x" />
        </a>
      </li>
      <li className="nav-item active my-auto d-none d-md-block">
        <a href="https://twitter.com/Youth_Rally">
          <i className="fab fa-twitter-square fa-2x" />
        </a>
      </li>
      <li className="nav-item active my-auto d-none d-md-block">
        <a href="https://www.youtube.com/user/YRCMedia">
          <i className="fab fa-youtube-square fa-2x" />
        </a>
      </li>

      <li className="nav-item active nav-link">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="PWWKYKVHHVD7E" />
          <button
            id="donate"
            className="btn btn-primary"
            type="submit"
            name="submit"
          >
            DONATE
          </button>
        </form>
      </li>
    </ul>
  </nav>
);
