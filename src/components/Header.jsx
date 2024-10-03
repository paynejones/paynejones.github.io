import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Header(){
    return (
        <div>
        <header className='header'>
            <div className='links'>
                <a className='link' href="https://github.com/paynejones"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                <a className='link' href="https://www.linkedin.com/in/payne-jones/"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
            </div>
            <div className='title'>
                Payne Jones
            </div>
            <div className='resume'></div>
        </header>
        <header className='header-mobile'>
        <div className='links'>
            <a className='link' href="https://github.com/paynejones"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
            <a className='link' href="https://www.linkedin.com/in/payne-jones/"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
        </div>
        <div className='resume'></div>
        </header>
        </div>
        );
}