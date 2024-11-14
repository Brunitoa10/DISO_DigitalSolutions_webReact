import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import styles from './NavBar.module.css';

const NavToggleButton = ({ isOpen, onToggle }) => (
    <button className={styles.navToggle} onClick={onToggle}>
        {isOpen ? <IoMdClose size={25} /> : <AiOutlineMenu size={25} />}
    </button>
);

export default NavToggleButton;
