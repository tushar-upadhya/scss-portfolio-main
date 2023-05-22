import "./app.scss";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <>
            <Intro />
            <Skills />
            <Portfolio />
        </>
    );
}

export default App;
