import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Section from "../../common/section/Section";
import SocialIcon from "../../common/icon/Social";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section background="dark" className="footer">
            <div className="footer-content-wrapper">
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>

                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>

                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li>

                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>

                <div className="social-icons">
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/tushar-upadhya/scss-portfolio-main"
                    />

                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/tusharupadhya/"
                    />
                </div>

                <div className="bottom-bar">
                    <div className="copyright-text">
                        &copy;{new Date().getFullYear()} All Rights Reserved ||
                        Designed and Coded by{" "}
                        <a
                            className="aHref"
                            href="https://tusharupadhyay.vercel.app/"
                        >
                            Tushar Upadhyay
                        </a>{" "}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
