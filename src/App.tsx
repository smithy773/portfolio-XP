import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NoPage from "./components/Pages/NoPage/NoPage";
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Projects from "./components/Pages/Projects/Projects";
import Hobbies from "./components/Pages/Hobbies/Hobbies";
import * as THREE from "three";
// import Three from "./components/Three";


THREE.Cache.enabled = true;

export default function App(): React.JSX.Element {
  const [title, setTitle] = useState("Viktor Kolev");

  return (
    <BrowserRouter>
      <h1>{title}</h1>
      <NavBar graphic={null} />
      <Routes>
        <Route index element={<Home setTitle={setTitle} />} />
        <Route path="about" element={<About setTitle={setTitle} />} />
        <Route path="projects" element={<Projects setTitle={setTitle} />} />
        <Route path="hobbies" element={<Hobbies setTitle={setTitle} />} />
        <Route path="*" element={<NoPage setTitle={setTitle} />} />
      </Routes>
    </BrowserRouter>
    //   <Three />
  );
}
