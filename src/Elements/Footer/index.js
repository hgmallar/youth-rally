import React, { Component } from "react";

import DonorSlideshow from "./../DonorSlideshow";

const donors = [
  {
    id: 0,
    href: "http://www.hollister.com/",
    src: "/assets/images/sponsor_logos/slideshow/Hollister.jpg",
    alt: "Hollister",
  },
  {
    id: 1,
    href: "http://www.gilead.com/",
    src: "/assets/images/sponsor_logos/slideshow/gilead.png",
    alt: "Gilead",
  },
  {
    id: 2,
    href: "https://www.convatec.com/",
    src: "/assets/images/sponsor_logos/slideshow/Convatec.jpg",
    alt: "Convatec",
  },
  {
    id: 3,
    href: "http://www.coloplast.com/",
    src: "/assets/images/sponsor_logos/slideshow/ColoPlast.jpg",
    alt: "Coloplast",
  },
  {
    id: 4,
    href: "http://www.nwregionwocn.org/",
    src: "/assets/images/sponsor_logos/slideshow/NW_WOCN.png",
    alt: "NC WOCN",
  },
  {
    id: 5,
    href: "http://www.ostomy.org/",
    src: "/assets/images/sponsor_logos/slideshow/goldengate.png",
    alt: "UOAA Golden Gate",
  },

  {
    id: 6,
    href: "https://www.seattlechildrens.org/",
    src: "/assets/images/sponsor_logos/slideshow/seattle-childrens.png",
    alt: "seattle_childrens",
  },
  {
    id: 7,
    src: "/assets/images/sponsor_logos/slideshow/paulhastings.png",
    alt: "Paul's Friends",
  },
];

const newsletters = [
  {
    id: 0,
    link:
      "https://mailchi.mp/19062fa274d5/youth-rally-newsletter-april-2020?e=77c92b6866",
    name: "April, 2020",
  },
  {
    id: 1,
    link:
      "https://mailchi.mp/74a0995f9407/youth-rally-newsletter-sept-1373089?e=77c92b6866",
    name: "September, 2018",
  },
  {
    id: 2,
    link:
      "https://mailchi.mp/34e905bb94e7/youth-rally-newsletter-mar-1351209?e=e3485ef522",
    name: "June, 2018",
  },
  {
    id: 3,
    link:
      "https://us6.campaign-archive.com/?u=06f008c274bd33a65f3c3db15&id=edea857885",
    name: "March, 2018",
  },
  {
    id: 4,
    link:
      "http://mailchi.mp/29f24042630d/youth-rally-newsletter-sept-1288273?e=77c92b6866",
    name: "December, 2017",
  },
  {
    id: 5,
    link:
      "http://mailchi.mp/f5c896066c8e/youth-rally-newsletter-sept-2017?e=77c92b6866",
    name: "September, 2017",
  },
  {
    id: 6,
    link:
      "http://us6.campaign-archive1.com/?u=06f008c274bd33a65f3c3db15&id=eafaf38dcf&e=77c92b6866",
    name: "April, 2017",
  },
];

class Footer extends Component {
  render() {
    return (
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
                For general questions, website glitches, or promotional
                materials:
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
                For information on Youth Rally’s electronic quarterly
                newsletter:{" "}
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
            {newsletters.map((newsletter) => (
              <p key={newsletter.id}>
                <a className="links" href={newsletter.link}>
                  {newsletter.name}
                </a>
              </p>
            ))}
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col mb-md-5">
                <h5 className="topBotBorder text-center">EVENTS</h5>
                <p>July 20th-25th, 2020 Virtual Youth Rally</p>
                <p>July 12th-17th, 2021 Youth Rally in Boulder, Colorado</p>
              </div>
            </div>

            <div className="row">
              <div className="col relative">
                <h5 className="topBotBorder text-center">SPONSORS</h5>
                <DonorSlideshow donors={donors} />
                <div className="hidden"></div>
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
  }
}

export default Footer;
