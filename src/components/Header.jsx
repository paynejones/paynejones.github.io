import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import resume from "../static/Payne_Jones_Updated_Resume_July_2025.pdf";



export default function Header(){
    return (
        <header className='header'>
            <div className='links'>
                <a className='link' href="https://github.com/paynejones" aria-label="My Github Account"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                <a className='link' href="https://www.linkedin.com/in/payne-jones/" aria-label="My LinkedIn Account"><FontAwesomeIcon icon={faLinkedin} size="xl" transform="grow-1"/></a>
                <a className='link' href={resume} download="Payne_Jones_Resume.pdf" aria-label="My Resume"><FontAwesomeIcon icon={faUser} size="xl" transform="shrink-7 down-1.5" mask={faFile}/></a>
            </div>
            <div className='center-name'>
                Payne Jones
            </div>
            <div className='resume'></div>
        </header>
        );
}