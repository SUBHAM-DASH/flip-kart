import React, { useState, useContext } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { DataContext } from '../../context/DataProvider';

// const Wrapper = styled(Box)`
//     display:flex;
//     margin:0 3% 0 auto;
//     & > button,& > p,& > div{
//       margin-left:35px;
//       font-size:14px;
//     }
// `;

const Wrapper = styled(Box)(({theme})=>({
  display:'flex',
    margin:'0 3% 0 auto',
    '& > *':{
      marginLeft:'35px',
      fontSize:'14px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
}));


const Container = styled(Box)`
  display:flex;
`;

const LoginButton = styled(Button)`
  color:#2874f0;
  background:#ffffff;
  text-transform:none;
  padding:5px 40px;
  border-radius:2px;
  box-shadow:none;
  font-weight:600;
  height:32px;
`;

const CustomButton = () => {

  const [open, setOpen] = useState(false);

  const { auth, setAuth } = useContext(DataContext);

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <Wrapper>
        {
          auth ? <Profile auth={auth} setAuth={setAuth} /> :
            <LoginButton variant="contained" onClick={() => handleOpen()}>Login</LoginButton>
        }
        <Typography style={{ marginTop: 7, width: 130 }}>Become a Seller</Typography>
        <Typography style={{ marginTop: 7, width: 130 }}>More</Typography>

        <Container>
          <LocalGroceryStoreIcon />
          <Typography>cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />
      </Wrapper>
    </>
  )
}

export default CustomButton;
