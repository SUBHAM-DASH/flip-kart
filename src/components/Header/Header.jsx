import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, IconButton, Drawer, ListItem, List, Typography } from '@mui/material';
import { Menu } from "@mui/icons-material";
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';


const StyledHeader = styled(AppBar)`
    background:#2874f0;
`;

const Component = styled(Link)`
    margin-left:12%;
    line-height:0px;
    text-decoration:none;
    color:inherit;
`;

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`;

const PlusImage = styled('img')({
  width: "10px",
  height: "10px",
  marginLeft: "3px"
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MenuIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: 'block'
  }
}));


const Header = () => {
  const imageUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subImageUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState();

  const handleOnClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }


  return (
    <>
      <StyledHeader position="static">
        <Toolbar variant="dense">
          <MenuIcon color="inherit" onClick={handleOpen}>
            <Menu />
          </MenuIcon>
          <Drawer open={open} onClose={handleOnClose}>
            <Box sx={{width:200}} onClick={handleOnClose}>
              <List>
                <ListItem>
                  <CustomButton />
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Component to={"/"}>
            <img src={imageUrl} style={{ width: 75 }} alt='dp' />
            <Box style={{ display: "flex" }}>
              <SubHeading>Expoler&nbsp;
                <Box component="span" style={{ color: "#ffe500" }}>
                  plus
                </Box>
              </SubHeading>
              <PlusImage src={subImageUrl} dp="sub-heading-logo" />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  )
}

export default Header