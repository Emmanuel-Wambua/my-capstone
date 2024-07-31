import React from 'react';
import { Link,useMatch,useResolvedPath } from "react-router-dom"

export default function NavigationBar(){
  return <nav className="nav">
    <Link to="/" className="site-title">
      Anime Gala
    </Link>
    <ul>
        <CustomLink to="/aot">Attack</CustomLink>
        <CustomLink to="/mha">MyHero</CustomLink>
        <CustomLink to="/jjk">JujutsuKaisen</CustomLink>
    </ul>
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