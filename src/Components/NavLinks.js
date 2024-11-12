import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavLinks.module.css';

const NavLinks = ({ links, onClick }) => (
    <ul className={styles.NavLinks}>
        {links.map((x) => (
            <li key={x.id} onClick={onClick}>
                <Link to={x.link} smooth={true} duration={500}>
                    {x.link === "HowWeWork" ? "How we work" : x.link}
                </Link>
            </li>
        ))}
    </ul>
);

export default NavLinks;