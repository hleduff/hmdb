import styles from './style.module.css';

export const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>
            HM<span className={styles.highlight}>d</span>B
        </h1>
    </header>
);
