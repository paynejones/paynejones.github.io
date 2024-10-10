import profile_photo from '../static/profile_photo-compressed-sized.webp';
import './About.css';

export default function About(props){
    return(
        <div className='about'>
            <img className="profileimg"  rel="preload" fetchpriority="high" loading="eager" src={profile_photo} alt="Payne Jones"/>
            <h1 className='name'>Payne Jones</h1>
            <p className='text'>{props.blurb}</p>
        </div>
    );
}