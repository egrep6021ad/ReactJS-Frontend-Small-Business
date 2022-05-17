import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
const InfoAlert = () => {
    const [open, setOpen] = React.useState(true);
    return(
        <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
            <Alert
            severity='info'
           style={{paddingLeft:'5%', height:'80%',overflowY:'scroll'}}
            action={
                <IconButton
                aria-label="close"
                color="secondary"
                size="small"
                onClick={() => {
                    setOpen(false);
                }}
                >
                <CloseIcon/>
                </IconButton>
                }
                >
                Feel Free to Call or Text <br/>
                678-617-5124 <br />
            </Alert>
        </Collapse>

</Box>
    )
}
export default InfoAlert

/*
        {open ? null :
<Button
    size="medium"
    disabled={open}
    style={{backgroundColor:'#0693E3', color:'white'}}
    onClick={() => {
    setOpen(true);
    }}
>
   {open ? null : "Info" }
</Button>
}
*/