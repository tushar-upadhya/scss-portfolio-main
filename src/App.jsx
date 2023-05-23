import "./app.scss";

import Blogs from "./components/blogs/Blogs";
// import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Footer />
        </>
    );
}

export default App;
