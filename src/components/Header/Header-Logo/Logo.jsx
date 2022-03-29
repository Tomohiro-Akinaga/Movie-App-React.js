import styles from "./Logo.module.scss";

function Logo() {
    return (
        <h1 className={styles.logo} onClick={() => window.location.reload()}>
            Movieflex
        </h1>
    );
}

export default Logo;
