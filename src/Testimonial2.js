import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import other necessary files
import loadBackgroudImages from './Testimonial/loadBackgroudImages'; // Correct path for the function

// Directly include the data
const data = [
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
  ];
  

const Testimonial2 = () => {

    useEffect(() => {
        loadBackgroudImages(); // Call your function here, no need for useEffect inside loadBackgroundImages
    }, []); // Empty dependency array ensures this runs only once

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Change slide every 3 seconds
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 3 } },
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } }
        ]
    };

    const HeadingContent = {
        subTitle: 'Testimonial',
        title1: 'What Say Our Customers',
        title2: 'About SSCONSULTANT',
    };

    const CallContent = {
        title1: 'Are you excited to start Next',
        title2: 'Campaign With Us?',
        btnName: 'Get Started',
        btnUrl: '/contact',
    };

    return (
        <div className="testimoonial-section style-two" style={{ background: 'linear-gradient(to right, blue, black)', padding: '30px' }}>
            <div className="container">
                {/* Header Section */}
                <div className="row dream-bg" >
                    <div className="col-lg-12">
                        <div className="dexon-section-title padding-lg white">
                            <h4>{HeadingContent.subTitle}</h4>
                            <h1>{HeadingContent.title1}</h1>
                            <h1>{HeadingContent.title2}</h1>
                        </div>
                    </div>
                    <div className="testi-shape">
                        <img src="/assets/images/resource/shape2.png" alt="" />
                    </div>
                </div>

                {/* Testimonials Slider */}
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="testi-list2">
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index} className="col-lg-12">
                                    <div className="testimonial-single-box" 
                                         style={{
                                             ...glassEffect, 
                                             marginBottom: '30px', 
                                             padding: '20px', 
                                             marginRight: '10px',
                                             marginLeft: '10px'
                                         }}>
                                        <div className="testi-people">
                                            <img src={item.image} alt={item.title} style={{ maxWidth: '100%', borderRadius: '50%' }} />
                                        </div>
                                        <div className="people-name" style={{ marginTop: '15px' }}>
                                            <h2>{item.title}</h2>
                                            <span>{item.subTitle}</span>
                                        </div>
                                        <div className="company-rating" style={{ marginTop: '10px' }}>
                                            <ul className="list-unstyled" style={{ paddingLeft: '0' }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <i
                                                            className={`bi ${i < item.rating ? 'bi-star-fill' : 'bi-star'}`}
                                                        ></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="testi-description" style={{ marginTop: '10px' }}>
                                            <p>“{item.desc}”</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="row call-bg" style={{ marginTop: '40px' }}>
                    <div className="col-lg-12">
                        <div className="dexon-section-title text-center white">
                            <h1>{CallContent.title1}</h1>
                            <h1>{CallContent.title2}</h1>
                        </div>
                        <div className="dexon-button2 text-center">
                            <Link to={CallContent.btnUrl}>
                                {CallContent.btnName} <i className="bi-arrow-right-short"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Inline Glass Effect Styles
const glassEffect = {
    backdropFilter: 'blur(10px)', // Frosted glass effect
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 255, 0.3), rgba(0, 0, 0, 0.3))', // Blue-to-black gradient
    borderRadius: '15px', // More rounded corners for a smoother glass effect
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    border: '1px solid rgba(255, 255, 255, 0.3)', // Light border to define the edges
};

export default Testimonial2;
