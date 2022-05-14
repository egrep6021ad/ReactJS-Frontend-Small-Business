import Web from "./Web";
import Mobile from "./Mobile";

const frame = window.innerWidth
const arr = [
    process.env.REACT_APP_API_KEY,
    process.env.REACT_APP_CARD_INFO,
    process.env.REACT_APP_CARD1,
    process.env.REACT_APP_CARD2,
    process.env.REACT_APP_CARD3,
]
const Contact = () => (
    <div>
    { frame > 500 ?  <Web arr={arr}/> : <Mobile arr={arr}/> }
    </div>
    )

export default Contact