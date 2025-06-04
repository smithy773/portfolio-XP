import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NoPage from "./components/Pages/NoPage/NoPage";
// import Three from "./components/Three";

export default function App(): React.JSX.Element {
  const [title, setTitle] = useState("Viktor Kolev");

  return (
    <BrowserRouter>
      <h1>{title}</h1>
      {/* NAVBAR */}
      <Routes>
        <Route index element={"home"} />
        <Route path="about" element={"about"} />
        <Route path="projects" element={"projects"} />
        <Route path="hobbies" element={"hobbies"} />
        <Route path="*" element={<NoPage setTitle={setTitle} />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   TITLE
    //   NAV BAR
    //   <h1>Portfolio, eventually</h1>
    //   <Three />
    // </div>
  );
}
