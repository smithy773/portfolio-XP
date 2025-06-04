// receives title state from App, checks title and highlights the corresponding NavElement
// EVENT DELEGATION: hovering on a NavLink makes it pop out and rotates its graphic

import { NavLink } from "react-router";

interface NavBarProps {
  graphic: null;
}

export default function NavBar({ graphic }: NavBarProps) {
  console.log(`${graphic} No graphic yet`);
  return (
    <nav className="flex gap-6">
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <div className="flex gap-1.5">
          <h1>Graphic</h1>
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <div className="flex gap-1.5">
          <h1>Graphic</h1>
          <p>About</p>
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <div className="flex gap-1.5">
          <h1>Graphic</h1>
          <p>Projects</p>
        </div>
      </NavLink>
      <NavLink
        to="/hobbies"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <div className="flex gap-1.5">
          <h1>Graphic</h1>
          <p>Hobbies</p>
        </div>
      </NavLink>
    </nav>
  );
}
