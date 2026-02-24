import React from 'react';
import { Link,useMatch,useResolvedPath } from "react-router-dom"

export default function NavigationBar(){
  return <nav className="d-flex justify-content-between align-items-center p-3 bg-light border border-secondary shadow">
    <Link to="/" className="text-decoration-none text-black fs-4 mx-2 fw-bold">
      Anime Gala
    </Link>
    <ul className='d-flex gap-3 list-unstyled mb-0 text-uppercase fs-5 fw-bold'>
        <CustomLink className="text-decoration-none" to="/aot">AOT</CustomLink>
        <CustomLink className="text-decoration-none" to="/mha">MHA</CustomLink>
        <CustomLink className="text-decoration-none" to="/jjk">JJK</CustomLink>
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
}

function CustomLink({ to,children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path:resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}