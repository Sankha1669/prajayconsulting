import React, { useState } from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [showA, setShowA] = useState(false);
  const showDropdownA = (e) => {
    setShowA(!show);
  };
  const hideDropdownA = (e) => {
    setShowA(false);
  };

  const [selectedLink, setSelectedLink] = useState("/");

  const handleSelect = (link) => {
    setSelectedLink(link);
  };
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className="navContainer position-sticky top-0"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          PrajayConsulting
        </Navbar.Brand>{" "}
        {/* Use Link instead of href */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="What We Do"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item
                as={Link}
                to="/what-we-do"
                onClick={() => handleSelect("/what-we-do")}
                className={selectedLink === "/what-we-do" ? "active" : ""}
              >
                What We Do
              </NavDropdown.Item>{" "}
              <NavDropdown.Item
                as={Link}
                to="/what-we-do/profileoptimization"
                onClick={() => handleSelect("/what-we-do/profileoptimization")}
                className={
                  selectedLink === "/what-we-do/profileoptimization"
                    ? "active"
                    : ""
                }
              >
                Profile Optimisation
              </NavDropdown.Item>{" "}
              {/* Use Link instead of href */}
              <NavDropdown.Item
                as={Link}
                to="/what-we-do/audienceprofiling"
                onClick={() => handleSelect("/what-we-do/audienceprofiling")}
                className={
                  selectedLink === "/what-we-do/audienceprofiling"
                    ? "active"
                    : ""
                }
              >
                Target Audience Profiling
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/what-we-do/connectionmessage"
                onClick={() => handleSelect("/what-we-do/connectionmessage")}
                className={
                  selectedLink === "/what-we-do/connectionmessage"
                    ? "active"
                    : ""
                }
              >
                Connection Messages
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/what-we-do/conversion-management"
                onClick={() =>
                  handleSelect("/what-we-do/conversion-management")
                }
                className={
                  selectedLink === "/what-we-do/conversion-management"
                    ? "active"
                    : ""
                }
              >
                Conversation Management{" "}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/what-we-do/content-marketing"
                onClick={() => handleSelect("/what-we-do/content-marketing")}
                className={
                  selectedLink === "/what-we-do/content-marketing"
                    ? "active"
                    : ""
                }
              >
                Content Marketing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/something">
                LinkedIn Advertising
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/something">
                Content Marketing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/foragencies"
              onClick={() => handleSelect("/foragencies")}
              className={selectedLink === "/foragencies" ? "active" : ""}
            >
              For Agencies
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/packages"
              onClick={() => handleSelect("/packages")}
              className={selectedLink === "/packages" ? "active" : ""}
            >
              Packages
            </Nav.Link>
            <NavDropdown
              title="About"
              id="basic-nav-dropdown"
              className="dropdown-hover"
              show={showA}
              onMouseEnter={showDropdownA}
              onMouseLeave={hideDropdownA}
            >
              <NavDropdown.Item
                as={Link}
                to="/about"
                onClick={() => handleSelect("/about")}
                className={selectedLink === "/about" ? "active" : ""}
              >
                About
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/about/testimonials"
                onClick={() => handleSelect("/about/testimonials")}
                className={
                  selectedLink === "/about/testimonials" ? "active" : ""
                }
              >
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/about/careers"
                onClick={() => handleSelect("/about/careers")}
                className={selectedLink === "/about/careers" ? "active" : ""}
              >
                Careers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/blog"
              onClick={() => handleSelect("/blog")}
              className={selectedLink === "/blog" ? "active" : ""}
            >
              Blog
            </Nav.Link>
            <Button variant="outline-primary ms-3" as={Link} to="/contactus">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
