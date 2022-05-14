import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './mobile_card.css'
import avatarPic from '../../../Assets/Images/Headshot.webp'


export default function MobileCard(props) {
  return (
    <div className='my-card-container'>
    <Card sx={{height:470 ,width:320,borderRadius:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label="Yoga Teacher">
            <img alt='Yoga practice' height='50px' src={avatarPic} />
          </Avatar>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        component={props.component}
        height={285}
        controls 
        src={props.img}
      />
        <IconButton sx={{padding:'5%'}} aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton sx={{padding:'5%'}} aria-label="share">
            <ShareIcon />
        </IconButton>

      <CardContent sx={{height:100}} >
        <div style={{textAlign:'center',fontSize:'16px'}} color="text.secondary">
           {props.description}
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
