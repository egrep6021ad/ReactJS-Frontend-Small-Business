import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import CloseIcon from '@mui/icons-material/Close';
const MobileInfoAlert = () => {
    const [open, setOpen] = React.useState(true);
    return(
        <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
            <Alert
            severity='info'

            action={
                <IconButton
                aria-label="close"
                color="secondary"
                size="small"
                onClick={() => {
                    setOpen(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{  textAlign:'center',mb: 2 }}
            >
            Feel Free to Call or Text <br/>
            678-617-5124 <br />
          
            </Alert>
        </Collapse>

</Box>
    )
}
export default MobileInfoAlert