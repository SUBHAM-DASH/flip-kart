import React from 'react'
import { Box, styled, Typography } from '@mui/material';
import { navData } from '../../constants/data';

const BoxContainer = styled(Box)`
  display:flex;
  margin:30px 130px 0 110px;
  justify-content:space-evenly;
`;

const ChildBoxContainer = styled(Box)`
  text-align:center;
`;

const Text = styled(Typography)`
  font-weight:600;
  font-size:14px;
  font-family:inherit;
`;

const Navbar = () => {
  return (
    <BoxContainer>
      {
        navData.map((item,index) => {
          return <ChildBoxContainer key={index}>
            <img src={item.url} alt="dp" width={75} />
            <Text>{item.text}</Text>
          </ChildBoxContainer>
        })
      }
    </BoxContainer>
  )
}

export default Navbar
