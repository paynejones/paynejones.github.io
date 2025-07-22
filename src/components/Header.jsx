import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';


export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.links}>
                <a className={styles.link} href="https://github.com/paynejones" aria-label="My Github Account"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                <a className={styles.link} href="https://www.linkedin.com/in/payne-jones/" aria-label="My LinkedIn Account"><FontAwesomeIcon icon={faLinkedin} size="xl" transform="grow-1"/></a>
                <a className={styles.link} href="../static/Payne_Jones_Updated_Resume_July_2025.pdf" download="Payne_Jones_Resume.pdf" aria-label="My Resume"><FontAwesomeIcon icon={faUser} size="xl" transform="shrink-7 down-1.5" mask={faFile}/></a>
            </div>
            <div className={styles.centername}>
                Payne Jones
            </div>
            <div className={styles.resume}></div>
        </header>
        );
}