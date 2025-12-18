import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navInner}>
                    <Link href="/" className={styles.logo}>
                        POD<span>SITE</span>
                    </Link>
                    <ul className={styles.navLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/episodes">Episodes</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
