import React, { useEffect, useState } from 'react';
import './index_web_contact.css'
import MyCard from './MyCard'
import InfoAlert from './InfoAlert'
import { Button } from '@mui/material'
import SendContact from '../SendContact'
import axios from 'axios';

const Web = (props) => {
    const [nameText, setNameText] = useState("")
    const [emailText, setEmailText] = useState("")
    const [phoneText, setPhoneText] = useState("")
    const [messageText, setMessageText] = useState("")
    const [cardData, setData] = useState([])
    const onChangeNameText = (e) => { setNameText(e.target.value) }
    const onChangePhoneText = (e) => { setPhoneText(e.target.value) }
    const onChangeMessageText = (e) => { setMessageText(e.target.value) }
    const onChangeEmailText = (e) => { setEmailText(e.target.value)}
    
    const [isBusy, setBusy] = useState(true)
    
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
    <div className='main-web-contact'>
        <div className='left'>
            <form className='form1'>
                <input value={nameText} onChange={e =>onChangeNameText(e)} placeholder='Name' name='Name' type='text'></input>
                <input value={phoneText} onChange={e =>onChangePhoneText(e)} placeholder='Phone' name='Phone' type='text'></input>
            <br />
            </form>
            <form className='form2'>
                <input value={emailText} onChange={e =>onChangeEmailText(e)} placeholder='Email' name='Email' type='text'></input>
                <textarea value={messageText} onChange={e =>onChangeMessageText(e)} type='text' name='Message' placeholder='Message'></textarea>
            </form>
            <div className='submit-buttons'>
                <div className='info-alert'>
                <InfoAlert />
                </div>
                <div className='submit-button'>
                <Button onClick={()=>{handleSubmit()}} variant='contained' color='success'>
                    Submit
                </Button>
                </div>
            </div>
        </div>
            <div  className='right'>
                <div className='card-style' >
                <MyCard 
                title={cardData[0]} 
                date={cardData[2]}
                img={props.arr[2]} 
                component="img" 
                />
                <MyCard 
                title={cardData[3]} 
                date={cardData[5]}
                img={props.arr[3]} 
                component="img" 
                />
                <MyCard 
                title={cardData[6]} 
                date={cardData[8]}
                img={props.arr[4]}
                component="img" 
                />
            </div>
        </div>
 </div>
}
</>
 )
}
export default Web