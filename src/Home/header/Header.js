import React from "react";
import styles from "./header.module.css";
import logo from "./img/logo.svg";
import icon from "./img/icon1.svg";
import mail from "./img/mail.svg";
import suffle from "./img/shuffle.svg";
import { LinkContainer } from "react-router-bootstrap";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div className={styles.nav}>
      <Navbar className={styles.navContainer} expand="lg">
        <LinkContainer to="/">
          {/* Logo */}
          <Navbar.Brand to="/" activeclassname="active">
            <img className={styles.logo} src={logo} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className={styles.links}>
            <div className={styles.lists}>
              {/* route services */}
              <LinkContainer to="/service">
                <Nav.Link activeclassname="active" className={styles.list}>
                  Services
                </Nav.Link>
              </LinkContainer>
              {/* route product */}
              <LinkContainer to="/product">
                <Nav.Link href="#Product" className={styles.list}>
                  Products
                </Nav.Link>
              </LinkContainer>
              {/* route technology */}
              <LinkContainer to="/technology">
                <Nav.Link href="#Technology" className={styles.list}>
                  Technology
                </Nav.Link>
              </LinkContainer>

              <NavDropdown
                title="About"
                className={styles.list}
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/about">
                  <Nav.Link className={styles.center} to="/District">
                    About us
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/team">
                  <Nav.Link className={styles.center} to="/District">
                    Team
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                title="Client"
                className={styles.list}
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/clients">
                  <Nav.Link className={styles.center} to="/District">
                    Our Clients
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/partner">
                <Nav.Link activeclassname="active" className={styles.list}>
                  Partner
                </Nav.Link>
              </LinkContainer>
            </div>
            <Nav.Link className={styles.icons} href="#Services">
              <img className={styles.icon} src={icon} alt="icon" />
              <img className={styles.icon} src={mail} alt="mail" />
              <img className={styles.icon} src={suffle} alt="suffle" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
