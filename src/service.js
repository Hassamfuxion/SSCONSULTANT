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
import Cta2 from './Components/Cta/Cta2.js';



const SSConsultant1 = () => {
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
  {/*==================================================*/}
  {/* Start dexon Breatcam Section  */}
  {/*==================================================*/}
  <div className="breatcam-section d-flex align-items-center" style={{
  background: "linear-gradient(to bottom, blue, black)",
  color: "white",
}}>
    <div className="container">
      <div className="row dream-bg align-items-center">
        <div className="col-lg-12">
          <div className="breatcam-content text-center">
          
            <h1 style={{ color: "white" }}> We Provide Cutting-Edge </h1>
            <h1 style={{ color: "white" }}>ERP Services.</h1>
            <p style={{ color: "white" }}>
              Enhance your business efficiency with our enterprise-grade ERP
              solutions. Streamline operations and drive success seamlessly.
            </p>
          </div>
        </div>
        <div className="inner-page-shape">
          <div className="inner-shape">
            <img src="assets/images/resource/shape-2.png" alt="" />
          </div>
          <div className="inner-shape2">
            <img src="assets/images/resource/shap-2.png" alt="" />
          </div>
          <div className="inner-shape3">
            <img src="assets/images/resource/inner-shp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End Breatcam Section  */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start About Section  */}
  {/*==================================================*/}
     <main style={{ width: '100%' }}>
  <SplineComponent2 />
</main>
  <div className="about-section style-three" style={{ background: "linear-gradient(to right, black, blue)", color: 'white' }}>
    <div className="container">
      <div className="row align-items-center">
   

        <div className="col-lg-12 col-md-12">
          <div className="about-left-thumb">
           
          </div>
        </div>
        <div className="col-lg-12">
          <div className="dexon-section-title">
            <h1 style={{ color: "white" }}>Specialized in ERP Solutions</h1>
            <h1 style={{ color: "white" }}>Empower Your Business</h1>
            <h1 style={{ color: "white" }}>with Modern Software</h1>
            <p style={{ color: "white" }}>
              Leverage our ERP services for streamlined workflows and improved
              decision-making. From inventory management to financial tracking,
              we’ve got you covered. <br />{" "}
              <span>
                Our solutions ensure scalability and flexibility to meet your
                business’s growing needs. Drive transformation with us.
              </span>
            </p>
          </div>
          <div className="about-button">
            <a className="dexon-button" href="./About" style={{ color: "white" }}>
              Learn More <i className="bi bi-arrow-right-short" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="row counter-bg">
        <div className="col-lg-3">
          <div className="single-counter-box">
            <div className="counter-title">
              <h1 className="counter" style={{ color: "white" }}>16</h1>
              <h1 style={{ color: "white" }}>M+</h1>
            </div>
            <div className="counter-text">
              <p style={{ color: "white" }}>Total ERP Solutions Delivered</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single-counter-box">
            <div className="counter-title">
              <h1 className="counter" style={{ color: "white" }}>16</h1>
              <h1 style={{ color: "white" }}>%</h1>
            </div>
            <div className="counter-text">
              <p style={{ color: "white" }}>Business Efficiency Boost</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single-counter-box">
            <div className="counter-title">
              <h1 className="counter" style={{ color: "white" }}>5</h1>
              <h1 style={{ color: "white" }}>K+</h1>
            </div>
            <div className="counter-text">
              <p style={{ color: "white" }}>Happy Enterprise Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single-counter-box">
            <div className="counter-title">
              <h1 className="counter" style={{ color: "white" }}>12</h1>
              <h1 style={{ color: "white" }}>K+</h1>
            </div>
            <div className="counter-text">
              <p style={{ color: "white" }}>Successful Integrations</p>
            </div>
          </div>
        </div>
      </div>




      <div className="feature-section style-two" >
  <div className="container">
    <div className="row dream-bg">
      <div className="col-lg-12">
        <div className="dexon-section-title white padding-lg text-center">
          <h1>What ERP SOLUTIONS </h1>
          <h1>WE OFFER?</h1>
          <p>
            <span style={{ color: 'white', fontSize: '14px' }}>
              Supply exceptional services, integrating markets and initiatives.
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
  <a 
    href="./financemanagement" 
    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
  >
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif9.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>Finance Management</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Account Payable, Account Receivable, General Ledger
          </span>
        </p>
      </div>
    </div>
  </a>
</div>



<div className="col-lg-4 col-md-6">
<a href="./humanresource" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="feature-single-box">
          <div className="feature-icon">
            <img src="assets/images/resource/icongif10.gif" alt="" />
          </div>
          <div className="feature-content">
            <h2>Human Resources</h2>
            <p>
              <span style={{ color: 'white', fontSize: '14px' }}>
                HR Management, Payroll, Time Management
              </span>
            </p>
          </div>
        </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6">
  <a href="./MRP" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif11.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>M.R.P</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Inventory, Merchandising, Purchase
          </span>
        </p>
      </div>
    </div>
  </a>
</div>

<div className="col-lg-4 col-md-6">
  <a href="./GSM" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif12.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>GSM</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Fabric Management, Bill of Material, Cutting Management
          </span>
        </p>
      </div>
    </div>
  </a>
</div>

<div className="col-lg-4 col-md-6">
  <a href="./packing" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif13.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>Packing</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            EPC Management, Packing List Management, Order Size Management
          </span>
        </p>
      </div>
    </div>
  </a>
</div>

<div className="col-lg-4 col-md-6">
  <a href="./Shipment" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif14.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>Shipment</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Booking Management, Shipment Container Management, Shipment Setup
          </span>
        </p>
      </div>
    </div>
  </a>
</div>

<div className="col-lg-4 col-md-6">
  <a href="./ThreadManagement" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif15.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>Thread Management</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Thread Management, Thread Setup
          </span>
        </p>
      </div>
    </div>
  </a>
</div>

<div className="col-lg-4 col-md-6">
  <a href="./VehicleManagement" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif16.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>Vehicle Management</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Vehicle Tracking, Maintenance Management
          </span>
        </p>
      </div>
    </div>
  </a>
</div>

<div className="col-lg-4 col-md-6">
  <a href="./fixedassetmanagement" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    <div className="feature-single-box">
      <div className="feature-icon">
        <img src="assets/images/resource/icongif17.gif" alt="" />
      </div>
      <div className="feature-content">
        <h2>Fixed Asset Management</h2>
        <p>
          <span style={{ color: 'white', fontSize: '14px' }}>
            Manage Fixed Assets Efficiently
          </span>
        </p>
      </div>
    </div>
  </a>
</div>


    </div>
  </div>
</div>



    </div>
  </div>



  <div className="service-details-area" style={{ background: "linear-gradient(to right, black, blue)", color: "white", padding: "40px 0" }}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-md-12">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="dexon-service-details-box">
              <div className="dexon-service-thumb">
            <main>
                <SplineComponent1 />
              </main>
              </div>
              <div className="service-details-content">
                <div className="service-page-title">
                  <h1 style={{ color: "lightblue",  }}>Best ERP Solutions</h1>
                </div>
                <div className="serivce-details-desc">
                  <p >
                    Empower your business with our tailored <span style={{ color: "lightblue" }}>ERP solutions</span>. 
                    Streamline operations and enhance efficiency using our cutting-edge technology. 
                    From financial management to 
                   supply chain optimization 
                    we help businesses achieve unparalleled growth.
                  </p>
                  <p className="pb-4" >
                    Our expertise ensures robust integrations, scalability, and security. 
                    Leverage real-time insights for informed decision-making and 
                   transform your operations today.
                  </p>
                </div>
              </div>
            </div>
          </div>

      

          {/* ERP Benefits */}
          <div className="col-lg-12">
            <div className="service-details-content">
              <div className="service-page-title2">
                <h1 style={{ color: "lightblue",  }}>Why Choose Our ERP Services?</h1>
              </div>
              <div className="serivce-details-desc">
                <p className="pb-4" >
                  We deliver cutting-edge solutions designed to enhance your business processes. 
                  Our team provides expertise in real-time analytics
                cloud-based solutions  
                  and reliable support services to ensure seamless operations.
                </p>
              </div>
            </div>
          </div>

          {/* ERP Work Process */}
          <div className="col-lg-4 col-sm-6">
            <div className="service-work-process-box" style={{ backgroundColor: "black", 
                border: "1px solid lightblue", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
              <div className="service-work-process-number" >
                <span style={{ color: "white",background: "linear-gradient(to right, black, blue)", }}>01</span>
              </div>
              <div className="service-work-process-title">
                <h4 style={{ color: "lightblue" }}>Plan Project</h4>
              </div>
              <div className="service-work-process-desc">
                <p style={{ color: "white" }}>Create detailed ERP implementation plans.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-work-process-box" 
            style={{ backgroundColor: "black", border: "1px solid lightblue", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
              <div className="service-work-process-number">
                <span style={{ color: "white", background: "linear-gradient(to right, black, blue)", }}>02</span>
              </div>
              <div className="service-work-process-title">
                <h4 style={{ color: "lightblue" }}>Implement Solutions</h4>
              </div>
              <div className="service-work-process-desc">
                <p style={{ color: "white" }}>Seamlessly integrate ERP with your business operations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-work-process-box" style={{ backgroundColor: "black", border: "1px solid lightblue", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
              <div className="service-work-process-number">
                <span style={{ color: "white", background: "linear-gradient(to right, black, blue)", }}>03</span>
              </div>
              <div className="service-work-process-title">
                <h4 style={{ color: "lightblue" }}>Deliver Results</h4>
              </div>
              <div className="service-work-process-desc">
                <p style={{ color: "white" }}>Achieve optimized and streamlined business processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


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
  {/*==================================================*/}
  {/* Start scrollup section Section */}
  {/*==================================================*/}
  <div className="prgoress_indicator active-progress">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "270.456"
        }}
      />
    </svg>
  </div>
  {/*==========
   */}










</>

</>

  );
};

export default SSConsultant1;
