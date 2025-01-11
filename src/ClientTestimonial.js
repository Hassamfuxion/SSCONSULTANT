import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Updated array with 12 images dynamically generated
const partners = Array.from({ length: 12 }, (_, index) => 
    `assets/new logo/new-logo-${String(index + 1).padStart(2, '0')}.png`
);

const ClientTestimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5, // Show 5 logos at a time
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div
            className="partner-section"
            style={{
                padding: "50px 0",
                background: "linear-gradient(to right, blue, black)",
                color: "#fff",
            }}
        >
            <div className="container">
                {/* Header Section */}
                <div
                    className="section-title text-center"
                    style={{ marginBottom: "30px" }}
                >
                    <h4>Our Clients</h4>
                    <h2>Trusted by over 786+ clients</h2>
                    <p>
                        Our clients are our top priority, and we are committed to
                        providing them with the highest level of service.
                    </p>
                </div>

                {/* Slider Section */}
                <Slider {...settings}>
                    {partners.map((logo, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "5px", // Reduced gap between logos
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "120px", // Increased size of images
                                    objectFit: "contain",
                                    borderRadius: "10px",
                                    padding: "5px",
                                   
                                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))", // Add shadow for better visibility
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientTestimonial;
