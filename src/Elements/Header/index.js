import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, color, size }) => (
  <div className={`banner ${color} text-center p-2`}>
    {size === 2 ? (
      <h2>{title}</h2>
    ) : (
      <h1 className="display-4 mission">{title}</h1>
    )}
  </div>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
