import styles from './WorkEx.module.css';

export default function WorkEx(props){
    return(
        <div className={styles.work}>
            <h2 className={styles.title}>{props.title}</h2>
            <h2 className={styles.workplace}>{props.name}</h2> 
            <p className={styles.dates}>{props.dates}</p>
            <p className={styles.blurb}>{props.blurb}</p>
        </div>
    );
}