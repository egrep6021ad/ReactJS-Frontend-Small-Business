import Web from "./Web";
import Mobile from "./Mobile";

const frame = window.innerWidth
const Navigation = () => (
    <div>
    { frame > 500 ?  <Web /> : <Mobile /> }
    </div>
    )
export default Navigation