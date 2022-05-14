import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope,faUser,faTags } from '@fortawesome/free-solid-svg-icons';

const options = [
  faHome,
  faUser,
  faTags,
  faEnvelope,
];
const my_routes = ['home','about','pricing','contact']
const ITEM_HEIGHT = 48;

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '8ch',
            backgroundColor:'#444',
            marginLeft:'2%'
          },
        }}
      >
        {options.map((option,i=-1) => (
          <MenuItem style={{display:'flex',justifyContent:'center'}}key={i+=1} selected={option === 'Pyxis'} onClick={()=>{handleClose(option)}}>
           <NavLink aria-label='home' className='home-button' exact='true' to={my_routes[i]} >
            <FontAwesomeIcon icon={option} size='xl' />
          </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
