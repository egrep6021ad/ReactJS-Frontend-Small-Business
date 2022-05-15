import './index_web.css'
import Logo from '../../../Assets/Images/Logo.webp';

const Web = () => (
        <div className='home-web'>
            <div className='web-main-container'>
            <main className='home-main'>
               <img className='main-logo' src={Logo} alt='Foothills Flow Yoga'></img>
                <p>"Ground is what lies beneath our feet. It is the place where we already stand; a state of recognition, the place or the circumstances to which we belong......"<br/>- David Whyte</p>
            </main>
            </div>
        </div>
    )
export default Web