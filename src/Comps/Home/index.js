import Web from "./Web";
import Mobile from "./Mobile";
import './index.css';
const frame = window.innerWidth
const Home = () => {
    return(
        <div className="my-home">
        { frame > 500 ?  <Web /> : <Mobile /> }
        </div>
    )
}

export default Home