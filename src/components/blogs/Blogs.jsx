import React from "react";

import Section from "../../common/section/Section";

import BlogCard from "./blog-card/BlogCard";

import Blog1 from "../../assets/images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../assets/images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../assets/images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section id="blogs" title="Blogs & Articles" background="dark">
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog2}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog3}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
        </Section>
    );
};

export default Blogs;
