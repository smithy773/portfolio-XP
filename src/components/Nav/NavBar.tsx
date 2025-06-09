// EVENT DELEGATION: hovering on a NavLink makes it pop out and rotates its graphic

import { NavLink } from "react-router";
// import Pine from "../Three/Pine";
// import { Canvas } from "react-three-fiber";

export default function NavBar() {
  return (
    <nav className="flex gap-6 lg:text-3xl text-xl font-semibold justify-self-center mt-4">
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-cyan-500 text-xl" : ""
        }
      >
        <div className="flex gap-1.5">
          {/* <Canvas>
            <Pine />
          </Canvas> */}
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-cyan-500" : ""
        }
      >
        <div className="flex gap-1.5">
          {/* <h1>Graphic</h1> */}
          <p>About</p>
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-cyan-500" : ""
        }
      >
        <div className="flex gap-1.5">
          {/* <h1>Graphic</h1> */}
          <p>Projects</p>
        </div>
      </NavLink>
      <NavLink
        to="/hobbies"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-cyan-500" : ""
        }
      >
        <div className="flex gap-1.5">
          {/* <h1>Graphic</h1> */}
          <p>Hobbies</p>
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-cyan-500" : ""
        }
      >
        <div className="flex gap-1.5">
          {/* <h1>Graphic</h1> */}
          <p>Contact</p>
        </div>
      </NavLink>
    </nav>
  );
}
