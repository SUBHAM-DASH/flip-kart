import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
  margin-top:5px;
`;

const Logout = styled(Typography)`
  font-size:14px;
  margin-left:20px;
`;


const Profile = ({ auth,setAuth }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const logoutUser = ()=>{
    setAuth("");
  }

  return (
    <>
      <Box onClick={(e)=>handleClick(e)}>
        <Typography sx={{ marginTop: 1 ,cursor:'pointer'}}>{auth}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logoutUser()}}>
          <PowerSettingsNewIcon fontSize='small' color='primary'/>
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile;
