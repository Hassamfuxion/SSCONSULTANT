import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from '../../Data/feature1.json';
import About1 from "../About/About1";
import counter from '../../Data/counter.json';

const Feature1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="feature-section" data-background="/assets/images/resource/feature-bg.jpg">
                <div className="container">
                    <div className="row dream-bg">
                        <div className="col-lg-12">
                            <div className="dexon-section-title padding-lg2">
                            <SectionTitle
                                    Title="Growing your Revenue using <br> Dexon Services"
                                ></SectionTitle>
                            </div>
                        </div>
                        <div className="dream-shape">
                            <img src="/assets/images/resource/border2.png" alt="img" />
                        </div>
                        <div className="dream-shape2">
                            <img src="/assets/images/resource/icon.png" alt="img" />
                        </div>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="feature-single-box">
                                <div className="feature-icon">
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <div className="feature-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <About1
                        mainimage="/assets/images/resource/about.png"
                        title1="Specialize in help Companies"
                        title2="Promote Your Business"
                        content=">Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti. Vulputate ut aliquam, consectetur turpis odio."
                        listItem={[
                            "Continually engineer ethical partnership",
                            "Seamlessly pursue orthogonal customer service ",
                            "Dynamically reconceptualize value"
                        ]}
                        btnName="Learn More"
                        btnUrl="/about"
                    ></About1>

                    <div className="row counter-bg">
                    {counter.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6">
                            <div className="single-counter-box">
                                <div className="counter-title">
                                    <h1 className="counter">{item.number}</h1>
                                    <h1>{item.symbol}</h1>
                                </div>
                                <div className="counter-text">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}

                        <div className="dream-shape3">
                            <img src="/assets/images/resource/shape-1.png" alt="img" />
                        </div>
                        <div className="dream-shape4">
                            <img src="/assets/images/resource/shape-2.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Feature1;