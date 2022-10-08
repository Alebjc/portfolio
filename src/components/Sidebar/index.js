import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>  (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
        </Link>
        <nav>
            <NavLink exact="true"  activeclassname="active" to="/">
                <FontAwesomeIcon id='home_icon' icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon id='home_icon' icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon id='home_icon' icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/alexis-basarte-32414a206/'>
                <FontAwesomeIcon id='home_icon' icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank"
                    rel='noreferrer'
                    href='https://github.com/Alebjc'>
                    <FontAwesomeIcon id='home_icon' icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar