import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NoPage from "./components/Pages/NoPage/NoPage";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Projects from "./components/Pages/Projects/Projects";
import Hobbies from "./components/Pages/Hobbies/Hobbies";
import * as THREE from "three";
import NavBar from "./components/Nav/NavBar";

THREE.Cache.enabled = true;

export default function App(): React.JSX.Element {
  const [title, setTitle] = useState("Viktor Kolev");

  return (
    <BrowserRouter>
      <div className="max-w-screen max-h-screen grid gird-cols-1 justify-items-center">
        <h1 className="xl:text-6xl md:text-5xl sm:text-4xl">{title}</h1>
        <NavBar graphic={null} />
        <Routes>
          <Route index element={<Home setTitle={setTitle} />} />
          <Route path="about" element={<About setTitle={setTitle} />} />
          <Route path="projects" element={<Projects setTitle={setTitle} />} />
          <Route path="hobbies" element={<Hobbies setTitle={setTitle} />} />
          <Route path="*" element={<NoPage setTitle={setTitle} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
