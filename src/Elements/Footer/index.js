import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://www.facebook.com/YouthRallyInc">
          <FontAwesomeIcon
            className="fontAwesome mx-1"
            icon={faFacebook}
            size="2x"
          />
        </a>
        <a href="https://twitter.com/Youth_Rally">
          <FontAwesomeIcon
            className="fontAwesome mx-1"
            icon={faTwitter}
            size="2x"
          />
        </a>
        <a href="https://www.youtube.com/user/YRCMedia">
          <FontAwesomeIcon
            className="fontAwesome mx-1"
            icon={faYoutube}
            size="2x"
          />
        </a>
      </div>
    );
  }
}

export default Footer;
