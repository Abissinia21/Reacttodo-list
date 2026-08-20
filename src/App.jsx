import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/educations.jsx";
import Github from "./components/github";
import Contact from "./components/contact";

import "./App.css";

function App() {
    return (
        <BrowserRouter basename="/reactPortfolio">

            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/github" element={<Github />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;