import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

export default () => (
  <Jumbotron fluid id="jumbotron" className="mb-0 py-2 px-1">
    <Link to="/" className="no-underline links">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <img
            className="rounded float-right align-middle"
            id="header-logo"
            src="/assets/images/youth_rally_logo.png"
            alt="youth rally logo"
          />
        </div>
        <div className="col-md-8 align-self-center">
          <h1 className="display-4 pl-3">The Youth Rally</h1>
          <p className="lead pl-3 mb-0">
            The Youth Rally is a one of a kind camp experience for youth living
            with conditions of the bowel and/or bladder system.
          </p>
        </div>
      </div>
    </Link>
  </Jumbotron>
);
