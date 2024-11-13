import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useScrollPosition } from "../Hooks/scrollPosition";
import styles from './NavBar.module.css';
import NavLinks from './NavLinks';


const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectDimension);

        // Cierra el menú si la ventana es mayor a 800px de ancho
        if (windowDimension.width > 800) {
            setNavBarOpen(false);
        }

        return () => {
            window.removeEventListener('resize', detectDimension);
        };
    }, [windowDimension]);
    
    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "Services" },
        { id: 3, link: "HowWeWork" },
        { id: 4, link: "Benefits" },
        { id: 5, link: "Contact" }
    ];

    const toggleNavBar = () => setNavBarOpen(!navBarOpen);

    const scrollPosition = useScrollPosition();

    return (
        <nav className={navBarOpen ? styles.NavOpen : scrollPosition > 0 ? styles.NavOnScroll : styles.NavBar}>
            <div className={styles.logo}>
                {/* Mostrar el logo solo cuando el menú está cerrado */}
                {!navBarOpen && <p>DISO | Digital Solutions</p>}
            </div>
            {!navBarOpen && windowDimension.width < 800 ? (
                <button className={styles.navToggle} onClick={toggleNavBar}>
                    <AiOutlineMenu size={25} />
                </button>
            ) : windowDimension.width < 800 && (
                <button className={styles.navToggle} onClick={toggleNavBar}>
                    <IoMdClose size={25} />
                </button>
            )}
            {/* Mostrar NavLinks solo cuando el menú está abierto */}
            {(navBarOpen || windowDimension.width > 800) && <NavLinks links={links} onClick={toggleNavBar} />}
        </nav>
    );
};

export default NavBar;
