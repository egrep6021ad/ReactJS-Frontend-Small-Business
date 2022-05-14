import './index_chatroom.css'
import { Button } from '@mui/material'
const ChatRoom = () => {
    return(
        <div className='chat-container'>
            <div className='spacer'>
            <div className='login-container'>
                <input className='email'  placeholder='Email'></input>
                <input className='passphrase' placeholder='Passphrase'></input>
                <input  className='key' placeholder='Key'></input>
                <span className='login-button'>
                <Button active='green' sx={{backgroundColor:'#207178',mt:1}} color='success' variant='contained'>
                    Login
                </Button>
                </span>
            </div>
 
   
            </div>
       
        </div>
    )
}
export default ChatRoom