import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <div className={styles.nav_bar}>
            <Link href='/#' className={styles.button}>Home</Link>

            <h1 className={styles.divider}>/</h1>

            <Link href='/projects' className={styles.button}>Projects</Link>

            <h1 className={styles.divider}>/</h1>

            <Link href='/blog' className={styles.button}>Blog</Link>
        </div>
    );
}