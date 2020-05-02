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
        <div className="col-md-8">
          <h1 className="display-4 pl-3">The Youth Rally</h1>
          <p className="lead pl-3 mb-0">
            Each year, the Youth Rally hosts kids and teens living with
            conditions of the bowel and bladder at a college campus for a
            5-night one of a kind camp experience that promotes independence,
            self-esteem, learning, friendship, and FUN!
          </p>
        </div>
      </div>
    </Link>
  </Jumbotron>
);
