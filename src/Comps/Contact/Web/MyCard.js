import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import avatarPic from '../../../Assets/Images/Headshot.webp'
import './index_web_contact.css'
export default function MyCard(props) {
  return (
    <div className='my-card-container'>
    <Card sx={{width:400,borderRadius:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label="Yoga Teacher">
            <img height='50px' alt='Yoga Instructor' src={avatarPic} />
          </Avatar>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        component={props.component}
        height={370}
        controls 
        src={props.img}
      />
        <IconButton sx={{padding:'5%'}} aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton sx={{padding:'5%'}} aria-label="share">
            <ShareIcon />
        </IconButton>
    </Card>
    </div>
  );
}
