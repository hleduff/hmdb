import styles from './style.module.css';

export const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>
            HMD<span className={styles.highlight}>b</span>
        </h1>
    </header>
);
