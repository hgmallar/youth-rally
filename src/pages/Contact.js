import React from "react";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />
    
    <Header title="Contact" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h5>
            <span className="greenText font-weight-bold">
              For application assistance:{" "}
            </span>
            <br />{" "}
            <a className="links" href="mailto:registrar@youthrally.org">
              Mary Beth Akers
            </a>{" "}
            – Youth Rally Registrar
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              To speak with a Youth Rally Parent:{" "}
            </span>
            <br />{" "}
            <a className="links" href="mailto:April@youthrally.org">
              April Gimlen
            </a>{" "}
            – Director, Program & Outreach
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              For general questions, website glitches, or promotional materials:
            </span>
            <br />
            <a className="links" href="mailto:info@youthrally.org">
              Emily Mallar
            </a>{" "}
            – Director, Public Relations & Outreach
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              For travel related questions:{" "}
            </span>
            <br />{" "}
            <a className="links" href="mailto:Travel@youthrally.org">
              Lina Smith
            </a>{" "}
            – Transportation Coordinator
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              To request brochures:{" "}
            </span>
            <br />{" "}
            <a className="links" href="mailto:brochures@youthrally.org">
              Abby Ryan
            </a>{" "}
            – Program Coordinator
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              For information on Youth Rally’s electronic quarterly newsletter:{" "}
            </span>
            <br />
            <a className="links" href="mailto:leak@youthrally.org">
              Laura Sheppard
            </a>{" "}
            – Editor in Chief
          </h5>
          <h5>
            <span className="greenText font-weight-bold">
              Experiencing problems on the website:{" "}
            </span>
            <br />
            <a className="links" href="mailto:webmaster@youthrally.org">
              Hilary Mallar
            </a>{" "}
            - Webmaster
          </h5>
        </div>
      </div>
    </div>
  </div>
);
