import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Contact" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1 purpleText">
          <h5>
            <span className="greenText font-weight-bold">
              For application assistance:{" "}
            </span>
            <br />{" "}
            <a className="links" href="mailto:registrar@youthrally.org">
              registrar@youthrally.org – Mary Beth Akers – Youth Rally Registrar
            </a>
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              For general questions:
            </span>
            <br />
            <a className="links" href="mailto:info@youthrally.org">
              info@youthrally.org – Emily Mallar – Executive Director – (607)
              592-3728 ET
            </a>
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              To request brochures:{" "}
            </span>
            <br />{" "}
            <a className="links" href="mailto:brochures@youthrally.org">
              brochures@youthrally.org – Abby Ryan – Program Coordinator
            </a>
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              For website help:{" "}
            </span>
            <br />
            <a className="links" href="mailto:webmaster@youthrally.org">
              webmaster@youthrally.org – Hilary Mallar – Webmaster
            </a>
          </h5>
        </div>
      </div>
    </div>
  </Fragment>
);
