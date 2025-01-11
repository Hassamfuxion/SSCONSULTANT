import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";


const HeroBanner1 = ({bgmage,Title1,Title2,content,btnName,btnUrl,heroShape1,heroShape2,heroShape3}) => {

	useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="hero-section d-flex align-items-center" data-background={bgmage}>
		<div className="container">
			<div className="row hero-bg">
				<div className="col-lg-12">
					<div className="hero-content">
						<h1> {Title1} </h1>
						<h2> {Title2} </h2>
						<div className="hero-content-text-btn">
							<p>{content}</p>
							<div className="hero-button">
								<Link to={btnUrl}> {btnName} <i className="bi bi-arrow-right-short"></i></Link>
							</div>
						</div>
						<div className="hero-all-shape">
							<div className="hero-shape">
								<img src={heroShape1} alt="img" />
							</div>
							<div className="hero-shape2">
								<img src={heroShape2} alt="img" /> 
							</div>
							<div className="hero-shape3">
								<img src="/assets/images/slider/hero-shp4.png" alt="img" />
							</div>
							<div className="hero-shape4">
								<img src="/assets/images/slider/hero-shp.png" alt="img" />
							</div>
							<div className="hero-shape5">
								<img src={heroShape3} alt="img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default HeroBanner1;