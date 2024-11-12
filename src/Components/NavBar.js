import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styless from './NavBar.module.css';

const NavBar = () => {
    const[navBarOpen,setNavBarOpen] = useState(false)
    const links=[
        {
            id : 1,
            link : "Home",
        },{
            id : 2,
            link : "Services",
        },{
            id : 3,
            link : "How We Work",
        },{
            id : 4,
            link : "Benefits",
        },{
            id : 5,
            link : "Contact",
        }];

  return (
    <div className={styless.NavBar}>
        <p>Logo</p>
       {
            navBarOpen &&
            <ul>
                {links.map((x) => (
                    <div>
                        <Link>{x.link === "HomeWeWork" ? "How we work" : x.link}</Link>
                    </div>
                ))}
            </ul>
       }
    </div>);
}

export default NavBar