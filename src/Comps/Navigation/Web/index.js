import './index_web_nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope,faUser,faTags } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import logo from '../../../Assets/Images/LogoTransparent.webp';

const Web = () => (
    <div className='web-nav-container'>
         <Link aria-label='home' className='logo' to='/'>
            <img className='trans-img' src={logo} alt='Yoga / Mobile Yoga Studio' /> 
        </Link>
         <NavLink aria-label='home' className='home-button' exact='true' to="/" >
            <FontAwesomeIcon icon={faHome} size='xl' />
        </NavLink>
        <NavLink  aria-label='about' exact='true' className='about-button' to="about" >
               <FontAwesomeIcon icon={faUser} size='xl' />
           </NavLink>
        <NavLink  aria-label='pricing' exact='true' className='pricing-button' to="pricing" >
            <FontAwesomeIcon icon={faTags} size='xl' />
        </NavLink>
        <NavLink  aria-label='contacts' exact='true' className='contact-button' to="contact" >
                <FontAwesomeIcon icon={faEnvelope} size='xl'/>
        </NavLink>
        <NavLink aria-label='web-class' className='chatroom-button' exact='true' to="chatroom" >
            <SelfImprovementIcon sx={{ fontSize: 35 }} />
        </NavLink>
    </div>
    )
export default Web