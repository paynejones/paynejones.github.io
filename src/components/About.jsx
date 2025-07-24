import profile_photo from '../static/profile_photo-compressed-sized.webp';
import styles from './About.module.css';
import Image from 'next/image'

export default function About(props){
    return(
        <div className={styles.about}>
            <div className={styles.col}>
                <Image loading="eager" priority={true} fetchPriority='high' className={styles.profileimg} src={profile_photo} alt="Payne Jones"/>
                <h1 className={styles.name}>Payne Jones</h1>
            </div>
            <div className={styles.col}>
                <p className={styles.text}>{props.blurb}</p>
            </div>
        </div>
    );
}