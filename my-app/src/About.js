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
import './Components/Choose/Choose';

import SplineComponent from './spline';  // Adjust the import path if necessary

import 'bootstrap-icons/font/bootstrap-icons.css';


import { Link } from 'react-router-dom';

import './header.js';
import HeaderStyle from "./header.js";

import Testimonial2 from './Testimonial2'; // Adjust the path if needed

import SplineComponent1 from "./spline2.js";
import SplineComponent2 from "./spline3.js";
import Choose from "./Components/Choose/Choose";
import './Components/Cta/Cta.js'
import Cta2 from "./Components/Cta/Cta2.js";



const SSConsultant2 = () => {
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
      <section 
  style={{ 
    background: 'linear-gradient(to right, black, blue)', 
    
    
  }} 
  className="py-5"
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 d-flex flex-column align-items-start gap-4">
        <div className="text-start text-white">
          <h2 className=" mb-3">
            Building Stronger Communities through Collaboration and Empowerment
          </h2>
          <p className="mb-4" st style={{ color:"white" }} >
            Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.
          </p>
        </div>
        <a href="./Contact" className="btn btn-light btn-lg">
          Get Started
        </a>
      </div>
      <div className="col-lg-6">
        <img
          src="https://pagedone.io/asset/uploads/1717751272.png"
          alt="About Us Image"
          className="img-fluid rounded-3 py-5 mb-4"
        />
      </div>
    </div>
  </div>
</section>


                                            
  <div
  className="about-section style-two"
  style={{
    background: "linear-gradient(to right, black, blue)",
    color: "white"
  }}
>
  <div className="container" s>
    <div className="row about-bg3">
      <div className="col-lg-8">
        <div className="dexon-section-title">
          <h1 style={{ color: "white" }}>Maximize Your Business Growth with</h1>
          <h1 className="sections" style={{ color: "white" }}> ERP Solutions</h1>
        </div>
        <div className="rs-video">
          <div className="animate-border">
            <a
              className="video-vemo-icon venobox vbox-item"
              data-vbtype="youtube"
              data-autoplay="true"
              href="https://youtu.be/BS4TUd7FJSg"
            >
              <i className="bi bi-play" />
            </a>
            <span className="video-title" style={{ color: "white" }}>Watch Our ERP Demo</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="about-top-thumb">
          <img src="assets/images/resource/abt-tp.jpg.png" alt="" />
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12">
        <div className="about-left-thumb">
          <img src="assets/images/resource/about4.png" alt="" />
        </div>
      </div>
      <div className="col-lg-6">
      <div className="row">
  <div className="about-testi-scroll">
    <div className="about-scroll">
      {[
        {
          image: "assets/images/resource/icongif18.gif",
          subTitle: "C.E.O. M.S. TRADERS",
          title: "M. AFZAL SIDDIQUI",
          desc: "EXCELLENT SERVICE, COMPETENT WORKING, RAPID RESPONSE AND ABOVE ALL COMPETITIVE PRICING DID ATTRACT US TOWARDS SS CONSULTANT. THEY HAVE TRULY MADE OUR WORKING SO EASIER THAN EVER.",
          rating: 5
        },
        {
          image: "assets/images/resource/icongif18.gif",
          subTitle: "M.D. AGFA (PVT.) LTD.",
          title: "SOHAIL AJANI",
          desc: "IT’S A PLEASURE TO WORK WITH A FIRM WHICH NOT ONLY UNDERSTANDS AND ACCOMMODATES CUSTOMER REQUESTS, BUT ALSO ADDS VALUE THROUGH INNOVATION. SS CONSULTANTS ARE CAPABLE OF QUICKLY IDENTIFYING OUR SPECIFIC NEEDS AND SWIFTLY RESOLVING THE DAY TO DAY ISSUES",
          rating: 5
        },
        {
          image: "assets/images/resource/icongif18.gif",
          subTitle: "C.E.O. STARTECH",
          title: "M. ADIL",
          desc: "WE DID TRY AND TEST A COUPLE SOLUTIONS FROM DIFFERENT FIRMS THAT COULD NOT MEET ALL OF OUR REQUIREMENT, FINALLY WE CAME ACROSS WITH SS CONSULTANT. THEY SUCCESSFULLY PROVED TO FULFILL ALL OUR BUSINESS PRACTICE NEEDS IN THEIR CUSTOMIZED SOLUTION",
          rating: 5
        },
        {
          image: "assets/images/resource/icongif18.gif",
          subTitle: "CHIEF ACCOUNTANT AGFA GEVAERT",
          title: "S. ZAHID HUSSAIN",
          desc: "SS CONSULTANTS HAVE HELPED US MAKE THE EVERYDAY TRANSACTIONS MUCH EASIER. ONE MUST SEE THE FUNCTIONING OF THEIR SOFTWARE IN ORDER TO REALLY APPRECIATE THE GREAT THINGS IT CAN DO.",
          rating: 5
        },
        {
          image: "assets/images/resource/icongif18.gif",
          subTitle: "C.E.O. QIRAT PLASTIC",
          title: "M. IRFAN SIDDIQUI",
          desc: "SS CONSULTANT STARTED WORKING WITH US LONG TIME AGO SINCE THEN WE FOUND SSC SO PROFICIENT AND COMMITTED TO WORK AND THEIR TECHNICAL STAFF ARE COOPERATIVE ENOUGH TO UNDERSTAND WHAT EXACTLY WE WANT FROM THEM",
          rating: 5
        }
      ].map((item, index) => (
        <div className="col-lg-12" key={index}>
          <div className="testimonial-single-box2">
            <div className="testi-people">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="people-name">
              <h2><span style={{ color: "white" }}>{item.title}</span></h2>
              <span style={{ color: "white" }}>{item.subTitle}</span>
            </div>
            <div className="testi-description">
              <div className="quote-icon">
                <i className="bi bi-quote" />
              </div>
              <p>
                <span style={{ color: "white" }}>{item.desc}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

</div>

    </div>


  <div
  className="row counter-bg"
  style={{
    display: "flex",        // Enable Flexbox
    justifyContent: "center", // Center horizontally
    alignItems: "center",    // Center vertically (if required)
    height: "100%",          // Ensure the height fills the container for centering
  }}
>
      <div className="col-lg-3" style={{ textAlign: "center" }}>
        <div className="single-counter-box">
          <div className="counter-title">
            <h1 className="counter" style={{ color: "white" }}>16</h1>
            <h1 style={{ color: "white" }}>M+</h1>
          </div>
          <div className="counter-text">
            <p style={{ color: "white" }}>Total Clients Served</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3" style={{ textAlign: "center" }}>
        <div className="single-counter-box">
          <div className="counter-title">
            <h1 className="counter" style={{ color: "white" }}>16</h1>
            <h1 style={{ color: "white" }}>%</h1>
          </div>
          <div className="counter-text">
            <p style={{ color: "white" }}>Growth in Revenue</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3" style={{ textAlign: "center" }}>
        <div className="single-counter-box">
          <div className="counter-title">
            <h1 className="counter" style={{ color: "white" }}>5</h1>
            <h1 style={{ color: "white" }}>K+</h1>
          </div>
          <div className="counter-text">
            <p style={{ color: "white" }}>Successful Projects</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3" style={{ textAlign: "center" }}>
        <div className="single-counter-box">
          <div className="counter-title">
            <h1 className="counter" style={{ color: "white" }}>12</h1>
            <h1 style={{ color: "white" }}>K+</h1>
          </div>
          <div className="counter-text">
            <p style={{ color: "white" }}>Products Enhanced</p>
          </div>
        </div>
      </div>
      <div className="abouts-shape">
        <div className="dream-shape5">
          <img src="assets/images/resource/icon.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

  <div
    className="why-choose-us "
    style={{
      background: "linear-gradient(to right, black, blue)",
      color: "white"
    }}
  >
   <div className="container">


    
   <div className="feature-section style-two">
  <div className="container">
    <div className="row dream-bg">
      <div className="col-lg-12">
        <div className="dexon-section-title white padding-lg text-center">
          <h1>Why Choose Us?</h1>
          <p>
            <span style={{ color: 'white', fontSize: '14px' }}>
              Discover the unmatched advantages of our ERP solutions tailored to elevate your business.
            </span>
          </p>
        </div>
      </div>
      <div className="dream-shape2">
        <img src="assets/images/resource/shape2.png" alt="" />
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif25.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Financial Clarity</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Take control of your finances with precision in Accounts Payable, Receivable, and Ledger.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif26.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>People-Powered Operations</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Empower your workforce with streamlined HR, Payroll, and Attendance management.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif29.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Inventory Intelligence</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Monitor, manage, and optimize your stock effortlessly.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif28.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Fabric Mastery</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Achieve excellence in fabric handling, material planning, and cutting processes.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif30.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Perfect Packaging</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Ensure every product is packaged to perfection with our EPC tools.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif31.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Global Logistics</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Simplify shipping and manage global operations with ease.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif32.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Precision Thread Control</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Manage thread usage and setup with absolute precision.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif33.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Fleet Excellence</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Track and manage vehicles with advanced tools for maintenance and operations.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif34.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Asset Guardianship</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                Protect and monitor your fixed assets with our intelligent solutions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  {/* <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="single-choose-us-box" style={{ background: "blue", color: "black" }}>
        <div className="choose-icon" style={{ backgroundColor: 'rgb(78, 204, 251)' }}>
          <img src="assets/images/resource/chose1.png" alt="" />
        </div>
        <div className="choose-content">
          <h3 style={{ color: "white" }}>Expert Team</h3>
          <p>
            Our dedicated team of ERP experts ensures seamless implementation 
            and personalized support for your business needs.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-choose-us-box" style={{ background: "blue", color: "black" }}>
        <div className="choose-icon" style={{ backgroundColor: 'rgb(78, 204, 251)' }}>
          <img src="assets/images/resource/chose2.png" alt="" />
        </div>
        <div className="choose-content">
          <h3 style={{ color: "white" }}>Satisfied Results</h3>
          <p>
            Experience measurable outcomes with optimized processes, 
            increased efficiency, and better decision-making capabilities.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-choose-us-box" style={{ background: "blue", color: "black" }}>
        <div className="choose-icon" style={{ backgroundColor: 'rgb(78, 204, 251)' }}>
          <i className="bi bi-speedometer2 text-black" style={{ fontSize: '3rem' }}></i>
        </div>
        <div className="choose-content">
          <h3 style={{ color: "white" }}>Service Anytime</h3>
          <p>
            Benefit from 24/7 customer support and robust systems ensuring 
            minimal downtime and maximum operational reliability.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-choose-us-box" style={{ background: "blue", color: "black" }}>
        <div className="choose-icon" style={{ backgroundColor: 'rgb(78, 204, 251)' }}>
          <i className="bi bi-tools text-black" style={{ fontSize: '3rem' }}></i>
        </div>
        <div className="choose-content">
          <h3 style={{ color: "white" }}>Custom Solutions</h3>
          <p>
            Tailored ERP solutions designed to meet the unique needs of your business.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-choose-us-box" style={{ background: "blue", color: "black" }}>
        <div className="choose-icon" style={{ backgroundColor: 'rgb(78, 204, 251)' }}>
          <i className="bi bi-share text-black" style={{ fontSize: '3rem' }}></i>
        </div>
        <div className="choose-content">
          <h3 style={{ color: "white" }}>Integration & Automation</h3>
          <p>
            Streamline processes with seamless integrations and automated workflows.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-choose-us-box" style={{ background: "blue", color: "black" }}>
        <div className="choose-icon" style={{ backgroundColor: 'rgb(78, 204, 251)' }}>
          <i className="bi bi-cloud-arrow-up text-black" style={{ fontSize: '3rem' }}></i>
        </div>
        <div className="choose-content">
          <h3 style={{ color: "white" }}>Scalable Solutions</h3>
          <p>
            Easily scale your ERP system as your business grows.
          </p>
        </div>
      </div>
    </div>
  </div> */}
</div>


  </div>
  <div
    className="team-section upper"
    style={{
      background: "linear-gradient(to right, black, blue)",
      color: "white"
    }}
  >
  <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="dexon-section-title text-center padding-lg">
        <h1 style={{ color: "white" }}> Meet the SSConsultant </h1>
        <h1 className="sections" style={{ color: "white" }}> Expert Team </h1>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="single-team-box">
        <div className="team-thumb">
          <img src="assets/images/resource/team.png" alt="Team Member 1" />
        </div>
        <div className="team-content">
          <h3 className="team-title" style={{ color: "white" }}> Ayesha Tariq </h3>
          <p className="team-text" style={{ color: "white" }}> CEO &amp; Founder </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-team-box">
        <div className="team-thumb">
          <img src="assets/images/resource/team2.png" alt="Team Member 2" />
        </div>
        <div className="team-content">
          <h3 className="team-title" style={{ color: "white" }}> Omar Khan </h3>
          <p className="team-text" style={{ color: "white" }}> Operations Manager </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="single-team-box">
        <div className="team-thumb">
          <img src="assets/images/resource/team3.png" alt="Team Member 3" />
        </div>
        <div className="team-content">
          <h3 className="team-title" style={{ color: "white" }}> Maria Ahmed </h3>
          <p className="team-text" style={{ color: "white" }}> Marketing Strategist </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row brand-bg">
    <div className="brand-list owl-carousel">
      <div className="col-lg-12">
        <div className="brand-thumb">
          <img src="assets/images/resource/brand1.png" alt="Brand 1" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="brand-thumb">
          <img src="assets/images/resource/brand2.png" alt="Brand 2" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="brand-thumb">
          <img src="assets/images/resource/brand3.png" alt="Brand 3" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="brand-thumb">
          <img src="assets/images/resource/brand4.png" alt="Brand 4" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="brand-thumb">
          <img src="assets/images/resource/brand5.png" alt="Brand 5" />
        </div>
      </div>
    </div>
  </div>
</div>

  </div>

<Choose></Choose>
<Cta2></Cta2>

 {/* Start dexon Footer Section  */}
  {/*==================================================*/}
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


  {/*==================================================*/}
  {/* End dexon Footer Section  */}
  {/*==================================================*/}



</>

</>

  );
};

export default SSConsultant2;
