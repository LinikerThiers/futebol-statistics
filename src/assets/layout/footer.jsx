import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='icons'>
                <a href='https://github.com/LinikerThiers' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} className='github-icon' />
                </a>
                <a  href='https://www.linkedin.com/in/liniker-thiers-a698b01a0/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin}  className='linkedin-icon'/>
                </a>
                <a  href='https://www.instagram.com/liniker_thiers/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faSquareInstagram}  className='instagram-icon'/>
                </a>
            </div>
            <h1>By: Liniker Thiers</h1>
        </footer>
    )
};

export default Footer;