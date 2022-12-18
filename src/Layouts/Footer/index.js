import React from "react";
import "./index.css";
import { NavbarBrand, Nav } from "reactstrap";
import Link from "react-router-dom/Link";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-4 col-sm-4">
              <NavbarBrand className="mr-auto navbar-logo" href="/home">
                <b>Provacc</b>
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="email"
                    placeholder="Email Address"
                    aria-label="email"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </Nav>
              <div className="mt-4 contact">
                <h5>Contact Info-:</h5>
                <address>
                  Sector 23A, NCU,
                  <br />
                  Gurgaon, Haryana
                </address>
              </div>
            </div>
            <div className="col-6 offset-2 col-sm-4 offset-4">
              <div className="row">
              <div className="col-4 col-sm-6 footer-links">
                <p>
                  {" "}
                  <b> Customer Care </b>
                </p>
                <ul className="list-unstyled">
                  <li>
                    <a to="/home">My Account</a>
                  </li>
                  <li>
                    <a to="/aboutus">Discount & Offers</a>
                  </li>
                  <li>
                    <a to="/menu">My Favourites</a>
                  </li>
                  <li>
                    <a to="/contactus">Trending Products</a>
                  </li>
                  <li>
                    <a to="/contactus">New Additions</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 offset-4 offset-sm-1 col-sm-5 footer-links">
                <p>
                  {" "}
                  <b> Pages </b>
                </p>
                <ul className="list-unstyled">
                  <li>
                    <a to="/home">Home</a>
                  </li>
                  <li>
                    <a to="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a to="/menu">Menu</a>
                  </li>
                  <li>
                    <a to="/contactus">Contact Us</a>
                  </li>
                  <li>
                    <a to="/blogs">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="row align-items-bottom p5">
          <div className="offset-2 col-12 col-sm-4">
            <p>©Provacc - All Rights Reserved</p>
          </div>
          <div className="col-12 col-sm-6">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
