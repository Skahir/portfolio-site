'use client'

import Link from "next/link";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <div className={styles.nav_bar}>
            <Link href='/#' className={`${styles.link} ${pathname === '/' ? styles.current : ''}`}>Home</Link>

            <h1 className={styles.divider}>/</h1>

            <Link href='/projects' className={`${styles.link} ${pathname === '/projects' ? styles.current : ''}`}>Projects</Link>

            <h1 className={styles.divider}>/</h1>

            <Link href='/blog' className={`${styles.link} ${pathname === '/blog' ? styles.current : ''}`}>Blog</Link>
        </div>
    );
}