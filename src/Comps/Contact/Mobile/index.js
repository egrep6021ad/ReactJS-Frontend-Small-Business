import './index_mobile_contact.css';
import { useState, useEffect } from 'react'
import * as React from 'react'
import MobileCard from './MobileCard';
import MobileInfoAlert from './MobileInfoAlert';
import { Button } from '@mui/material';
import SendContact from '../SendContact'
import axios from 'axios';

const Mobile = (props) => {
    const [nameText, setNameText] = useState("")
    const [emailText, setEmailText] = useState("")
    const [phoneText, setPhoneText] = useState("")
    const [messageText, setMessageText] = useState("")
    const onChangeNameText = (e) => { setNameText(e.target.value) }
    const onChangePhoneText = (e) => { setPhoneText(e.target.value) }
    const onChangeMessageText = (e) => { setMessageText(e.target.value) }
    const onChangeEmailText = (e) => { setEmailText(e.target.value)}
    const [isBusy, setBusy] = useState(true)
    const [cardData, setData] = useState([])
    useEffect(()=>{
        const getData = async() => {
            const response = await axios.get(props.arr[1])
            setData(response.data)
            setBusy(false) 
        }
        getData()
    },[props.arr])
    
    const handleSubmit = () => {
        setNameText("")
        setEmailText("")
        setPhoneText("")
        setMessageText("")
        return SendContact(nameText,emailText,phoneText,messageText)    
    }
    return(
   <>
       { isBusy ? null :
   <div className='mobile-contact-container'>
    
     <div className='mobile-info-alert'>
        <MobileInfoAlert />
        </div>
       <div>
        <form className='mobile-form'>
        <input value={nameText} onChange={e =>onChangeNameText(e)} placeholder='Name' name='Name' type='text'></input>
                <br />
                <input value={phoneText} onChange={e =>onChangePhoneText(e)} placeholder='Phone' name='Phone' type='text'></input>
            <br />
            <input value={emailText} onChange={e =>onChangeEmailText(e)} placeholder='Email' name='Email' type='text'></input>
                <br />
                <textarea value={messageText} onChange={e =>onChangeMessageText(e)} type='text' name='Message' placeholder='Message'></textarea>
            </form>
            <Button onClick={()=>{handleSubmit()}} style={{marginTop:'5%',float:'right'}} variant='contained' color='success'>
                    Submit
            </Button>
            </div>
        <div className='mobile-cards'>
  
            <MobileCard 
            title={cardData[0]}
            date={cardData[2]}
            img={props.arr[2]}// Change url for production
            component="img" 
            />
        <br />
        <br />
            <MobileCard 
            title={cardData[3]}
            date={cardData[5]}
            img={props.arr[3]}// Change url for production
            component="img" 
             />
        <br />
        <br />

            <MobileCard 
            title={cardData[6]}
            date={cardData[8]}
            img={props.arr[4]}// Change url for production
            component="img" 
            
             />
               <br />
     
        </div>

   </div>
}
</>
)
    }
export default Mobile