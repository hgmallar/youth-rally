import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <div className="text-center p-2 banner">
    <h1 className="display-4 mission">{title}</h1>
  </div>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
