import React, { useEffect, useState } from 'react';
import { useScrollPosition } from "../Hooks/scrollPosition";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import styles from './NavBar.module.css';
import NavLinks from './NavLinks';
import NavToggleButton from './NavToggleButton';

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const { width } = useWindowDimensions();
    const scrollPosition = useScrollPosition();

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "Services" },
        { id: 3, link: "HowWeWork" },
        { id: 4, link: "Benefits" },
        { id: 5, link: "Contact" }
    ];

    useEffect(() => {
        if (width > 800) setNavBarOpen(false);
    }, [width]);

    const toggleNavBar = () => setNavBarOpen(prev => !prev);

    const getNavBarClass = () => {
        if (navBarOpen) return styles.NavOpen;
        if (scrollPosition > 0) return styles.NavOnScroll;
        return styles.NavBar;
    };

    return (
        <nav className={getNavBarClass()}>
            <div className={styles.logo}>
                {!navBarOpen && <p>DISO | Digital Solutions</p>}
            </div>
            {width < 800 && <NavToggleButton isOpen={navBarOpen} onToggle={toggleNavBar} />}
            {(navBarOpen || width > 800) && <NavLinks links={links} onClick={toggleNavBar} />}
        </nav>
    );
};

export default NavBar;
