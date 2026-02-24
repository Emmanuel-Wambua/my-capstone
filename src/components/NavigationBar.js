import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function NavigationBar() {

  return (
    <nav className="d-flex justify-content-between align-items-center p-3 bg-light border border-secondary sticky-top shadow">
      
      <Link to="/" className="text-decoration-none text-black fs-4 mx-2 fw-bold">
        Anime<span className="text-primary">Gala</span>
      </Link>

      <ul className='d-flex gap-3 list-unstyled mb-0 text-uppercase fs-5 fw-bold nav nav-pills card-header-pills'>
        
        <li>
          <NavLink
            to="/aot"
            className={({ isActive }) =>
              `text-decoration-none nav-link ${isActive ? "active" : ""}`
            }
          >
            AOT
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/mha"
            className={({ isActive }) =>
              `text-decoration-none nav-link ${isActive ? "active" : ""}`
            }
          >
            MHA
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/jjk"
            className={({ isActive }) =>
              `text-decoration-none nav-link ${isActive ? "active" : ""}`
            }
          >
            JJK
          </NavLink>
        </li>

      </ul>

      <div className="btn-group gap-2">
        <Link to="/login">
          <button className="btn btn-outline-secondary">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-dark">Register</button>
        </Link>
      </div>

    </nav>
  );
}