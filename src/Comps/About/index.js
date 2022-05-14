import Web from "./Web";
import Mobile from "./Mobile";

const frame = window.innerWidth
const About = () => (
    <div>
    { frame > 500 ?  <Web /> : <Mobile /> }
    </div>
    )

export default About