import React from "react";
import { Carousel } from "react-bootstrap";

export default () => (
  <div className="text-center px-3 py-2 banner">
    <div className="row mt-2 justify-content-center text-left">
      <div className="col-md-4">
        <h5 className="topBotBorder text-center">CONTACT</h5>
        <p className="mb-2">
          <span className="greenText">For application assistance: </span>
          <br />{" "}
          <a className="links" href="mailto:registrar@youthrally.org">
            Mary Beth Akers
          </a>{" "}
          – Youth Rally Registrar
        </p>
        <p className="mb-2">
          <span className="greenText">
            To speak with a Youth Rally Parent:{" "}
          </span>
          <br />{" "}
          <a className="links" href="mailto:April@youthrally.org">
            April Gimlen
          </a>{" "}
          – Director, Program & Outreach
        </p>
        <p className="mb-2">
          <span className="greenText">
            For general questions, website glitches, or promotional materials:
          </span>
          <br />
          <a className="links" href="mailto:info@youthrally.org">
            Emily Mallar
          </a>{" "}
          – Director, Public Relations & Outreach
        </p>
        <p className="mb-2">
          <span className="greenText">For travel related questions: </span>
          <br />{" "}
          <a className="links" href="mailto:Travel@youthrally.org">
            Lina Smith
          </a>{" "}
          – Transportation Coordinator
        </p>
        <p className="mb-2">
          <span className="greenText">To request brochures: </span>
          <br />{" "}
          <a className="links" href="mailto:brochures@youthrally.org">
            Abby Ryan
          </a>{" "}
          – Program Coordinator
        </p>
        <p className="mb-2">
          <span className="greenText">
            For information on Youth Rally’s electronic quarterly newsletter:{" "}
          </span>
          <br />
          <a className="links" href="mailto:leak@youthrally.org">
            Laura Sheppard
          </a>{" "}
          – Editor in Chief
        </p>
        <p className="mb-2">
          <span className="greenText">
            Experiencing problems on the website:{" "}
          </span>
          <br />
          <a className="links" href="mailto:webmaster@youthrally.org">
            Hilary Mallar
          </a>{" "}
          - Webmaster
        </p>
      </div>

      <div className="col-md-4 text-center">
        <h5 className="topBotBorder">NEWSLETTERS</h5>
        <p>
          <a
            className="links"
            href="https://mailchi.mp/19062fa274d5/youth-rally-newsletter-april-2020?e=77c92b6866"
          >
            April, 2020
          </a>
        </p>
        <p>
          <a
            className="links"
            href="https://mailchi.mp/74a0995f9407/youth-rally-newsletter-sept-1373089?e=77c92b6866"
          >
            September, 2018
          </a>
        </p>
        <p>
          <a
            className="links"
            href="https://mailchi.mp/34e905bb94e7/youth-rally-newsletter-mar-1351209?e=e3485ef522"
          >
            June, 2018
          </a>
        </p>
        <p>
          <a
            className="links"
            href="https://us6.campaign-archive.com/?u=06f008c274bd33a65f3c3db15&id=edea857885"
          >
            March, 2018
          </a>
        </p>
        <p>
          <a
            className="links"
            href="http://mailchi.mp/29f24042630d/youth-rally-newsletter-sept-1288273?e=77c92b6866"
          >
            December, 2017
          </a>
        </p>
        <p>
          <a
            className="links"
            href="http://mailchi.mp/f5c896066c8e/youth-rally-newsletter-sept-2017?e=77c92b6866"
          >
            September, 2017
          </a>
        </p>
        <p>
          <a
            className="links"
            href="http://us6.campaign-archive1.com/?u=06f008c274bd33a65f3c3db15&id=eafaf38dcf&e=77c92b6866"
          >
            April, 2017
          </a>
        </p>
      </div>

      <div className="col-md-4">
        <div className="row">
          <div className="col mb-md-5">
            <h5 className="topBotBorder text-center">EVENTS</h5>
            <p>June 1st – Applications for Campers, Medical Team, and Returning Counselors are due</p>
            <p>July 20th-25th, 2020 Virtual Youth Rally</p>
            <p>July 12th-17th, 2021 Youth Rally in Boulder, Colorado</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h5 className="topBotBorder text-center">SPONSORS</h5>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <a href="http://www.hollister.com/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/Hollister.jpg"
                    alt="Hollister"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://www.gilead.com/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/gilead.png"
                    alt="Gilead"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://www.convatec.com/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/Convatec.jpg"
                    alt="Convatec"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://www.coloplast.com/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/ColoPlast.jpg"
                    alt="Coloplast"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://www.nwregionwocn.org/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/NW_WOCN.png"
                    alt="NW WOCN"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://www.ostomy.org/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/goldengate.png"
                    alt="UOAA Golden Gate"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://www.seattlechildrens.org/">
                  <img
                    className="d-block w-100"
                    src="/assets/images/sponsor_logos/slideshow/seattle-childrens.png"
                    alt="seattle_childrens"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/assets/images/sponsor_logos/slideshow/paulhastings.png"
                  alt="Paul's Friends"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>

    <div className="d-block d-md-none justify-content-center">
      <a href="https://www.facebook.com/YouthRallyInc">
        <i className="fab fa-facebook-square fa-2x" />
      </a>
      <a href="https://twitter.com/Youth_Rally">
        <i className="fab fa-twitter-square fa-2x" />
      </a>
      <a href="https://www.youtube.com/user/YRCMedia">
        <i className="fab fa-youtube-square fa-2x" />
      </a>
    </div>
  </div>
);
