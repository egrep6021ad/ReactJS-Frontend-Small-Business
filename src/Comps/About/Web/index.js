import './index_web_about.css'
import Headshot from '../../../Assets/Images/Headshot.webp'


  
const Web = () => (
    <div className='web-about-container'>
    <main className='main-about'>
    <img className='headshot' src={Headshot} alt='alt'></img>
        <p className='about-p'>My goal for each yogi, who practices with me, is an awareness and appreciation of his/her individual body. We are all unique, with different capacities for movement, strength and flexibility.  My classes focus on honoring and respecting our bodies, in whatever season we find ourselves.<br />
        <i>Namaste!</i><br/><br/><span className="tab"></span><span className="tab"></span><span className="tab"></span>
        - Rebecca</p>
    </main>
    </div>
    )
export default Web