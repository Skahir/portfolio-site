import Link from "next/link";
import Styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <div className={Styles.NavBar}>
            <Link href='#' className={Styles.Button}>Home</Link>
            <h1 className={Styles.Divider}>/</h1>
            <Link href='/projects' className={Styles.Button}>Projects</Link>
            <h1 className={Styles.Divider}>/</h1>
            <Link href='/blog' className={Styles.Button}>Blog</Link>
        </div>
    );
}