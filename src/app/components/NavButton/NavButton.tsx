import styles from './NavButton.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavButtonProps = {
    name: string;
    path: string;
};

export default function NavButton({ name, path }: NavButtonProps) {
    const pathname = usePathname();
    
    return (
        <Link href={path} className={`${styles.link} ${pathname === path ? styles.current : ''}`}>{name}</Link>
    );
}