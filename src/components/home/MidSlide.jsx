import { Box, styled } from '@mui/material'
import React from 'react';
import Slide from './Slide';

const Component = styled(Box)`
  display:flex;
`;

const LeftContainer = styled(Box)(({theme})=>({
  width:'83%',
  [theme.breakpoints.down('md')]:{
    width:'100%',
  }
}))


const RightContainer = styled(Box)(({ theme }) => ({
  width: '17%',
  backgroud: '#ffffff',
  padding: '5px',
  marginTop: '6px',
  marginLeft: '6px',
  textAlign: 'center',
  height: '217px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));


const MidSlide = ({ products, title, timer }) => {

  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <div>
      <Component>
        <LeftContainer>
          <Slide products={products} title={title} timer={timer} />
        </LeftContainer>
        <RightContainer>
          <img src={adURL} style={{ width: '217px' }} alt="ad Image" />
        </RightContainer>
      </Component>
    </div>
  )
}

export default MidSlide