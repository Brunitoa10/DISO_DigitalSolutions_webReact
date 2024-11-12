import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import styles from './NavBar.module.css';
import NavLinks from './NavLinks';


const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "Services" },
        { id: 3, link: "HowWeWork" },
        { id: 4, link: "Benefits" },
        { id: 5, link: "Contact" }
    ];

    const toggleNavBar = () => setNavBarOpen(!navBarOpen);

    return (
        <nav className={!navBarOpen ? styles.NavBar : styles.NavOpen}>
            <div className={styles.logo}>
                {!navBarOpen && <p>DISO | Digital Solutions</p>}
            </div>
            {!navBarOpen ? (
                <button className={styles.navToggle} onClick={toggleNavBar}>
                    <AiOutlineMenu size={25} />
                </button>
            ) : (
                <button className={styles.navToggle} onClick={toggleNavBar}>
                    <IoMdClose size={25} />
                </button>
            )}
            {navBarOpen && <NavLinks links={links} onClick={toggleNavBar} />}
        </nav>
    );
};

export default NavBar;
