import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

class YRNavbar extends Component {
  state = {
    hamburgerToggle: false,
  };

  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="md" className="py-1 px-1">
          <Navbar.Toggle
            className="mr-auto d-xs-block d-md-none"
            onClick={() =>
              this.setState({ hamburgerToggle: !this.state.hamburgerToggle })
            }
          />

          <Nav>
            <Nav.Item className="d-none d-md-block" id="applications">
              <Nav.Link as={Link} to="/applications">
                Applications
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              className="d-none d-md-block"
              title="About"
              id="about-nav-dropdown"
            >
              <NavDropdown.Item
                className="d-none d-md-block"
                as={Link}
                to="/mission"
              >
                Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/message">
                Message
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cost">
                Cost
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sponsorship">
                Sponsorship
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/partners">
                Partners
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/newsletter">
                Newsletters
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resources">
                Resources
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="d-none d-md-block"
              id="campers-dropdown"
              title="Campers"
            >
              <NavDropdown.Item as={Link} to="/campers">
                Campers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/photos">
                Photo & Video
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="d-none d-md-block"
              id="volunteers-dropdown"
              title="Volunteers"
            >
              <NavDropdown.Item as={Link} to="/callforleaders">
                Call for Leaders
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/counselors">
                Counselors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nurses">
                Nurses/Medical
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/getinvolved">
                Get Involved
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item className="d-none d-md-block" id="photos">
              <Nav.Link as={Link} to="/photos">
                Photos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-none d-md-block" id="give">
              <Nav.Link as={Link} to="/give">
                Give
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-none d-md-block" id="events">
              <Nav.Link as={Link} to="/events">
                Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-none d-md-block" id="store">
              <Nav.Link as={Link} to="/store">
                Store
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item className="my-auto d-none d-md-block">
              <Nav.Link href="https://www.facebook.com/YouthRallyInc">
                <FontAwesomeIcon
                  className="fontAwesome"
                  icon={faFacebookSquare}
                  size="2x"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-auto d-none d-md-block">
              <Nav.Link href="https://twitter.com/Youth_Rally">
                <FontAwesomeIcon
                  className="fontAwesome"
                  icon={faTwitterSquare}
                  size="2x"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-auto d-none d-md-block">
              <Nav.Link href="https://www.youtube.com/user/YRCMedia">
                <FontAwesomeIcon
                  className="fontAwesome"
                  icon={faYoutubeSquare}
                  size="2x"
                />
              </Nav.Link>
            </Nav.Item>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className="my-auto px-1 form-inline"
              id="donate-button"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="PWWKYKVHHVD7E"
              />
              <Button id="donate" type="submit" name="submit">
                DONATE
              </Button>
            </form>
          </Nav>
        </Navbar>
        {this.state.hamburgerToggle && (
          <Navbar
            bg="dark"
            variant="dark"
            expand="md"
            className="pl-4 py-1 d-xs-block d-md-none"
          >
            <Nav>
              <Nav.Item id="virtualrally">
                <Nav.Link href="/virtualrally">Virtual Rally</Nav.Link>
              </Nav.Item>

              <Nav.Item id="applications">
                <Nav.Link href="/applications">Applications</Nav.Link>
              </Nav.Item>
              <NavDropdown title="About" id="about-nav-dropdown">
                <NavDropdown.Item href="/mission">Mission</NavDropdown.Item>
                <NavDropdown.Item href="/message">Message</NavDropdown.Item>
                <NavDropdown.Item href="/cost">Cost</NavDropdown.Item>
                <NavDropdown.Item href="/sponsorship">
                  Sponsorship
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/partners">Partners</NavDropdown.Item>
                <NavDropdown.Item href="/newsletter">
                  Newsletters
                </NavDropdown.Item>
                <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown id="campers-dropdown" title="Campers">
                <NavDropdown.Item href="/campers">Campers</NavDropdown.Item>
                <NavDropdown.Item href="/photos">
                  Photo & Video
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown id="volunteers-dropdown" title="Volunteers">
                <NavDropdown.Item href="/callforleaders">
                  Call for Leaders
                </NavDropdown.Item>
                <NavDropdown.Item href="/counselors">
                  Counselors
                </NavDropdown.Item>
                <NavDropdown.Item href="/nurses">
                  Nurses/Medical
                </NavDropdown.Item>
                <NavDropdown.Item href="/getinvolved">
                  Get Involved
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item id="photos">
                <Nav.Link href="/photos">Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item id="give">
                <Nav.Link href="/give">Give</Nav.Link>
              </Nav.Item>
              <Nav.Item id="events">
                <Nav.Link href="/events">Events</Nav.Link>
              </Nav.Item>
              <Nav.Item id="store">
                <Nav.Link href="/store">Store</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        )}
      </Fragment>
    );
  }
}

export default YRNavbar;
