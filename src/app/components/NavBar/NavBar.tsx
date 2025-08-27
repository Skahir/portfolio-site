'use client'

import Link from "next/link";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";
import NavButton from "../NavButton/NavButton";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <div className={styles.nav_bar}>
            <NavButton name='Home' path="/" />

            <h1 className={styles.divider}>/</h1>

            <NavButton name="Projects" path="/projects" />
            
            <h1 className={styles.divider}>/</h1>

            <NavButton name="Blog" path="/blog" />
        </div>
    );
}