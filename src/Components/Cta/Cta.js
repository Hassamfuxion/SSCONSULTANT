import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Cta = () => {

    const CallContent = {
        icon:'/assets/images/resource/call.png',
        title2:'+92 333 4838368',
        Content:'Whats App/Call',
      }    

      useEffect(() => {
        loadBackgroudImages();
      }, []);
      

    return (
        <div className="call-to-action"   style={{
			background: "linear-gradient(to right, black, blue)",
			
		  }}
		>
		<div className="container">
			<div className="row dream1-bg">
				<div className="col-lg-6">
					<div className="dexon-section-title white">
                    <SectionTitle
                            Title="Are You Ready to for Your <br> Business Success?"
                            Content="Transform your vision into reality with tailored ERP solutions. Optimize operations, enhance efficiency, and unlock your business's full potential with SSConsultant ERP Software Solutions."
                    ></SectionTitle>
					</div>
					
				</div>
				<div className="col-lg-3"></div>
				<div className="col-lg-3">
					<div className="call-info">
						<div className="call-icon">
							<img src={CallContent.icon} alt="" />
						</div>
						<div className="call-number">
							<h1>{CallContent.title2}</h1>
						</div>
						<div className="call-text">
							<span>({CallContent.Content})</span>
						</div>
					</div>
				</div>
				<div className="call-to-all-shape">
					<div className="call-shape">
						<img src="/assets/images/resource/line.png" alt="" />
					</div>
					<div className="call-shape2">
						<img src="/assets/images/resource/shap2.png" alt="" />
					</div>
					<div className="call-shape3">
						<img src="/assets/images/resource/shap1.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Cta;