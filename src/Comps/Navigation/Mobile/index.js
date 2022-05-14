import './index_mobile_nav.css';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Images/LogoTransparent.webp';
import MenuButton from './MenuButton';

const Mobile = () => (
    <div className='mobile-nav-container'>
        <Link aria-label='home' className='logo' to='/'>
            <img className='trans-img' src={logo} alt='Yoga / Mobile Yoga Studio' /> 
        </Link>
        <MenuButton />
    </div>
    )
export default Mobile;