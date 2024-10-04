import profile_photo from '../static/profile_photo.jpg';
import './About.css';

export default function About(){
    return(
        <div>
            <div className='about'>
                <img className="profileimg" src={profile_photo} alt="Payne Jones"/>
                <h1 className='name'>Payne Jones</h1>
                <p className='text'>kaodpmwmd opwmaopdamp omcawmpcmoc mawocmaopamos mawcopm powam oamcm o moplamca mom o</p>
            </div>
            <div className='about-mobile'>
                <img className="profileimg-mobile" src={profile_photo} alt="Payne Jones"/>
                <h1 className='name-mobile'>Payne Jones</h1>
                <p className='text-mobile'>kaodpmwmd opwmaopdampom cawmpcmocmawocma opamos mawcopm powam oamcm o moplamca mom o</p>
            </div>
        </div>
    );
}