import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



export default function Header(){
    return (
        <header className='header'>
            <div className='links'>
                <a className='link' href="https://github.com/paynejones"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                <a className='link' href="https://www.linkedin.com/in/payne-jones/"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
                <a className='link' href="mailto:paynejones01@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="xl"/></a>
            </div>
            <div className='center-name'>
                Payne Jones
            </div>
            <div className='resume'></div>
        </header>
        );
}