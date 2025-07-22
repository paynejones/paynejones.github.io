import styles from './WorkEx.module.css'

export default function Project(props){
    var link = "https://github.com/"
    var title = props.user
    link += props.user
    if (props.repo !== undefined){
        link += "/"
        title += "/"
        link += props.repo
        title += props.repo
    }
    return(
        <div className={styles.project}>
            <a className={styles.repo} href={link}>{title}</a>
            <p className={styles.blurb}>{props.blurb}</p>
        </div>
    );
}