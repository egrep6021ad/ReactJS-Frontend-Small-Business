import Web from "./Web";
import Mobile from "./Mobile";

const frame = window.innerWidth
const Pricing = () => (
    <div>
    { frame > 500 ?  <Web /> : <Mobile /> }
    </div>
    )
export default Pricing