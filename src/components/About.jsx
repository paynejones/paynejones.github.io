import profile_photo from '../static/profile_photo-compressed.webp';
import './About.css';

export default function About(props){
    return(
        <div className='about'>
            <img className="profileimg" src={profile_photo} alt="Payne Jones"/>
            <h1 className='name'>Payne Jones</h1>
            <p className='text'>{props.blurb}</p>
        </div>
    );
}