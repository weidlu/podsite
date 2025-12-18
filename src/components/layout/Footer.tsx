import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <p className="text-muted">&copy; {new Date().getFullYear()} Podsite. Built with Next.js.</p>
                    <div className={styles.socials}>
                        <a href="#">Twitter</a>
                        <a href="#">Spotify</a>
                        <a href="#">Apple Podcasts</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
