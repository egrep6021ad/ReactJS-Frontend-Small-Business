import axios from "axios";

const CLIENT_API_BASE_URL = process.env.REACT_APP_NEW_CLIENT

async function SendContact (name,email,phone,message){
    await axios.post(CLIENT_API_BASE_URL, {
    name : name,
    phone: phone,
    email: email,
    message: message,
    })
    .then(console.log("POSTED"))
    .catch((e)=>{console.log(e)})
}
export default SendContact