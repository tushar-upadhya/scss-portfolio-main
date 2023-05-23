import { useState } from "react";

import Section from "../../common/section/Section";
import Filters from "./filters/Filter";
import Showcase from "./showcase/ShowCase";

import thumbnail1 from "../../assets/images/portfolio/thumb-1.jpg";
import thumbnail2 from "../../assets/images/portfolio/thumb-2.jpg";
import thumbnail3 from "../../assets/images/portfolio/thumb-3.jpg";
import thumbnail4 from "../../assets/images/portfolio/thumb-4.jpg";
import thumbnail5 from "../../assets/images/portfolio/thumb-5.jpg";
import thumbnail6 from "../../assets/images/portfolio/thumb-6.jpg";
import thumbnail7 from "../../assets/images/portfolio/thumb-7.jpg";
import thumbnail8 from "../../assets/images/portfolio/thumb-8.jpg";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restaurant",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: thumbnail1,
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: thumbnail2,
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: thumbnail3,
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: thumbnail4,
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: thumbnail5,
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: thumbnail6,
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: thumbnail7,
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: thumbnail8,
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section id="portfolio" title="Check My Portfolio" background="light">
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />

                <Showcase data={projects} transition={transition} />
            </div>
        </Section>
    );
};

export default Portfolio;
