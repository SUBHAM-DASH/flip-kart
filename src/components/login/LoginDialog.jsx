import React, { useState, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, TextField, Button, Typography, styled } from '@mui/material';
import { authenticationSignup, authenticationLogin } from '../../services/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
  height:72vh;
  width:95vh;
`;

const Image = styled(Box)`
  height:80%;
  width:28%;
  background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  padding:45px 35px;
  & > p, & > h5{
    color:#ffffff;
  }
`;

const Wrapper = styled(Box)`
  display:flex;
  flex-direction:column;
  padding:20px 35px;
  flex:1;
  & > div,& > button,&> p{
    margin-top:17px;
  }
`;

const LoginButton = styled(Button)`
  text-transform:none;
  background:#FB641B;
  color:#fff;
  height:48px;
  border-radius:2px;
`;

const RequestButton = styled(Button)`
  text-transform:none;
  background:#fff;
  color:#2824f0;
  height:48px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
`;

const Text = styled(Typography)`
  font-size:12px;
  color:#878787;
`;

const CreateAccount = styled(Typography)`
  font-size:14px;
  text-align:center;
  color:#2824f0;
  font-weight:600;
  cursor:pointer;
`;

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get Access to your orders, Wishlist and Recomendation"
  },
  signup: {
    view: "signup",
    heading: "Look's like you are new here!",
    subHeading: "signup with your mobile number to get started"
  }
};


const LoginDialog = ({ open, setOpen }) => {

  const [account, setAccount] = useState(initialValue.login);
  const [signupValue, setSignupValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
  });

  const [loginValue, setLoginValue] = useState({
    username: "",
    password: ""
  });


  const { setAuth } = useContext(DataContext);

  const handleCloase = () => {
    setOpen(false);
    setAccount(initialValue.login);
  }


  const onToggleSignup = () => {
    setAccount(initialValue.signup);
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  }

  const onSignupUser = async () => {
    const response = await authenticationSignup(signupValue);
    if (!response) return;
    handleCloase();
    setAuth(signupValue.firstname);
  }


  const onLoginValueChange = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  }

  const userLogin = async () => {
    const response = await authenticationLogin(loginValue);
    if (!response) return;
    if(response.data.status === "success"){
      handleCloase();
      setAuth(loginValue.username);
      alert(response.data.message);
    }else{
      handleCloase();
      alert(response.data.message);
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={() => handleCloase()} PaperProps={{ sx: { maxWidth: 'unset' } }}>
        <Component>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant='h5'>{account.heading}</Typography>
              <Typography sx={{ marginTop: "20px" }}>{account.subHeading}</Typography>
            </Image>

            {
              account.view === "login" ?
                <Wrapper>
                  <TextField variant='standard' id="username" onChange={(e) => onLoginValueChange(e)} name="username" label='Enter Username' />
                  <TextField variant='standard' id="password" onChange={(e) => onLoginValueChange(e)} name="password" label='Enter Password' />
                  <Text>By continuing. you agree to flipkart's terms of use and privacy policy.</Text>
                  <LoginButton onClick={userLogin}>Login</LoginButton>
                  <Typography sx={{ textAlign: 'center' }}>OR</Typography>
                  <RequestButton>Request OTP</RequestButton>
                  <CreateAccount onClick={() => onToggleSignup()}>New To Flipkart? Create an account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                  <TextField sx={{ height: "40px" }} id="firstname" onChange={(e) => onInputChange(e)} name="firstname" variant='standard' label='Enter FirstName' />
                  <TextField sx={{ height: "40px" }} id="lastname" onChange={(e) => onInputChange(e)} name="lastname" variant='standard' label='Enter LastName' />
                  <TextField sx={{ height: "40px" }} id="username" onChange={(e) => onInputChange(e)} name="username" variant='standard' label='Enter UserName' />
                  <TextField sx={{ height: "40px" }} id="email" onChange={(e) => onInputChange(e)} name="email" variant='standard' label='Enter Email' />
                  <TextField sx={{ height: "40px" }} id="password" onChange={(e) => onInputChange(e)} name="password" variant='standard' label='Enter Password' />
                  <TextField sx={{ height: "40px" }} id="phone" onChange={(e) => onInputChange(e)} name="phone" variant='standard' label='Enter Phone' />
                  <LoginButton onClick={onSignupUser}>Continue</LoginButton>
                </Wrapper>
            }
          </Box>
        </Component>
      </Dialog>
    </div>
  )
}

export default LoginDialog