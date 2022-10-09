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
    href: "https://www.convatec.com/",
    src: "/assets/images/sponsor_logos/slideshow/convatec.png",
    alt: "Convatec",
  },
  {
    id: 2,
    href: "http://www.coloplast.com/",
    src: "/assets/images/sponsor_logos/slideshow/ColoPlast.jpg",
    alt: "Coloplast",
  },
];

const newsletters = [
  {
    id: 0,
    link: "https://mailchi.mp/19062fa274d5/youth-rally-newsletter-april-2020?e=77c92b6866",
    name: "April, 2020",
  },
  {
    id: 1,
    link: "https://mailchi.mp/74a0995f9407/youth-rally-newsletter-sept-1373089?e=77c92b6866",
    name: "September, 2018",
  },
  {
    id: 2,
    link: "https://mailchi.mp/34e905bb94e7/youth-rally-newsletter-mar-1351209?e=e3485ef522",
    name: "June, 2018",
  },
  {
    id: 3,
    link: "https://us6.campaign-archive.com/?u=06f008c274bd33a65f3c3db15&id=edea857885",
    name: "March, 2018",
  },
  {
    id: 4,
    link: "http://mailchi.mp/29f24042630d/youth-rally-newsletter-sept-1288273?e=77c92b6866",
    name: "December, 2017",
  },
  {
    id: 5,
    link: "http://mailchi.mp/f5c896066c8e/youth-rally-newsletter-sept-2017?e=77c92b6866",
    name: "September, 2017",
  },
  {
    id: 6,
    link: "http://us6.campaign-archive1.com/?u=06f008c274bd33a65f3c3db15&id=eafaf38dcf&e=77c92b6866",
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
              registrar@youthrally.org</a>
            </p>
            <p className="mb-2">
              <span className="greenText">
                To speak with a Youth Rally Parent:{" "}
              </span>
              <br />{" "}
              <a className="links" href="mailto:April@youthrally.org">
              April@youthrally.org</a>
            </p>
            <p className="mb-2">
              <span className="greenText">
                For general questions, website glitches, or promotional
                materials:
              </span>
              <br />
              <a className="links" href="mailto:info@youthrally.org">
              info@youthrally.org</a>
            </p>
            <p className="mb-2">
              <span className="greenText">For travel related questions: </span>
              <br />{" "}
              <a className="links" href="mailto:Travel@youthrally.org">
              Travel@youthrally.org</a>
            </p>
            <p className="mb-2">
              <span className="greenText">To request brochures: </span>
              <br />{" "}
              <a className="links" href="mailto:brochures@youthrally.org">
              brochures@youthrally.org</a>
            </p>
            <p className="mb-2">
              <span className="greenText">
                For information on Youth Rally’s electronic quarterly
                newsletter:{" "}
              </span>
              <br />
              <a className="links" href="mailto:leak@youthrally.org">
              leak@youthrally.org</a>
            </p>
            <p className="mb-2">
              <span className="greenText">
                Experiencing problems on the website:{" "}
              </span>
              <br />
              <a className="links" href="mailto:webmaster@youthrally.org">
              webmaster@youthrally.org</a>
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
                <p>February 2023 Registration opens for 2023</p>
                <p>
                  July 10th-15th, 2023 Youth Rally at San Diego State University
                </p>
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
