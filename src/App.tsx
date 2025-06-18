import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import NoPage from './components/Pages/NoPage/NoPage';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Hobbies from './components/Pages/Hobbies/Hobbies';
import * as THREE from 'three';
import NavBar from './components/Nav/NavBar';
import Contact from './components/Pages/Contact/Contact';

THREE.Cache.enabled = true;

export default function App(): React.JSX.Element {
  const [title, setTitle] = useState('Viktor Kolev');

  return (
    <BrowserRouter>
      <div className='max-w-screen w-full sm:h-screen h-fill grid grid-cols-1 place-content-start bg-gray text-white overflow-x-hidden'>
        <h1 className='lg:text-6xl md:text-5xl text-4xl lg:mt-6 mt-4 font-bold justify-self-center'>
          {title}
        </h1>
        <NavBar />
        <Routes>
          <Route index element={<Home setTitle={setTitle} />} />
          <Route path='about' element={<About setTitle={setTitle} />} />
          <Route path='projects' element={<Projects setTitle={setTitle} />} />
          <Route path='hobbies' element={<Hobbies setTitle={setTitle} />} />
          <Route path='contact' element={<Contact setTitle={setTitle} />} />
          <Route path='*' element={<NoPage setTitle={setTitle} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
