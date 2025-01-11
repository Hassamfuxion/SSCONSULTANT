import React from "react";
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.css';
import './assets/css/animated-text.css';
import './assets/css/all.min.css';
import playIcon from './assets/images/owl.video.play.png';
import { Helmet } from 'react-helmet';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import './assets/responsive.css';

import SplineComponent from './spline';  // Adjust the import path if necessary

import 'bootstrap-icons/font/bootstrap-icons.css';


import { Link } from 'react-router-dom';

import './header.js';
import HeaderStyle from "./header.js";

import Testimonial2 from './Testimonial2'; // Adjust the path if needed

import SplineComponent1 from "./spline2.js";
import SplineComponent2 from "./spline3.js";

import SplineComponent3 from "./spline4.js";

import Cta from './Components/Cta/Cta';


const SSConsultant3 = () => {
  return (
    <>

<div>
      <HeaderStyle variant="custom-variant" />
      {/* Other components */}
    </div>


    <div className="owl-carousel">
        <div className="owl-video-play-icon" style={{ backgroundImage: `url(${playIcon})` }} />
        {/* Other content */}
      </div>

   <header></header>
     <Helmet>
        <meta charset="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>SSCONSULTANT</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="56x56" href="assets/images/favicon.png" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all" />
        {/* Carousel CSS */}
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" type="text/css" media="all" />
        {/* Other CSS files */}
        <link rel="stylesheet" href="assets/css/animate.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/animated-text.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/all.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/flaticon.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/theme-default.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/meanmenu.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/owl.transitions.css" type="text/css" media="all" />
        <link rel="stylesheet" href="venobox/venobox.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/bootstrap-icons.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/responsive.css" type="text/css" media="all" />
        <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" />
      </Helmet>
      <>
    
 <main>
      <SplineComponent3 />
    </main>

<Cta></Cta>

    <div className="footer-section style-two">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="widget widgets-company-info">
          <div className="dreamhub-logo">
            <a className="logo_thumb" href="/" title="SSConsultant">
              <img src="assets/images/logo2.png" alt="SSConsultant" />
            </a>
          </div>
          <div className="company-info-desc">
            <p>
              SSConsultant provides ERP software solutions that streamline your business operations and enhance efficiency, helping you achieve smooth workflows.
            </p>
          </div>
          <div className="follow-company-icon">
            <a href="https://facebook.com/SSConsultant">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/SSConsultant">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://linkedin.com/company/SSConsultant">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://pinterest.com/SSConsultant">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 pl-40">
        <div className="widget widget-nav-menu">
          <h4 className="widget-title">Informations</h4>
          <div className="menu-quick-link-content">
            <ul className="footer-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>  {/* Added About Us link */}
              <li><a href="/service">Our Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="widget widget-nav-menu">
          <h4 className="widget-title">Contact Us</h4>
          <div className="menu-quick-info-content">
            <ul className="footer-info">
              <li>
                <a href="#">
                  Plot No. R-565, Sector 15-A/2, Buffer Zone North Nazimabad, Karachi, Pakistan
                </a>
              </li>
              <li>
                <a className="border-undr" href="mailto:info@ssconsultant.com.pk">
                  info@ssconsultant.com.pk
                </a>
              </li>
              <li>
                <a href="tel:+923334838368">+92 333 4838368</a> {/* Updated number */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 pr-0">
        <div className="menu-quick-link-contact">
          <h4 className="widget-title">Newsletter</h4>
          <div className="subscribe-widget">
            <form action="#" method="get">
              <input
                type="text"
                className="src-input-box"
                placeholder="Search Here"
                name="s"
                defaultValue=""
                title="src-input-box"
              />
              <span className="input-icn">
                <i className="bi bi-send-fill" />
              </span>
            </form>
          </div>
          <div className="widget-desc">
            <p>Stay updated with our latest ERP solutions and news. Subscribe to our newsletter.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row footer-bg">
      <div className="col-lg-12 col-md-12">
        <div className="footer-bottom-content text-center">
          <div className="footer-bottom-content-copy">
            <p>2023 - 2030 | All rights reserved by SSConsultant</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</>

</>

  );
};

export default SSConsultant3;
