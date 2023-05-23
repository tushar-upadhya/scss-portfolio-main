import Nav from "./navigation/Nav";
import IntroContent from "./intro-content/IntroContent";

import cloud from "../../assets/images/cloud.png";
import cloudSoft from "../../assets/images/cloud-soft.png";

import "./style.scss";

const Intro = () => {
    return (
        <div className="Intro-section">
            <div className="vector-bg" id="parallax"></div>
            <img src={cloud} className="cloud" />
            <img src={cloudSoft} className="cloud-soft" />
            <div className="content">
                <Nav />

                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;
