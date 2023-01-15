import React from 'react'
import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material'
import Search from './Search';
import CustomButton from './CustomButton';


const StyledHeader = styled(AppBar)`
    background:#2874f0;
`;

const Component = styled(Box)`
    margin-left:12%;
    line-height:0px;
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


const Header = () => {
  const imageUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subImageUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div>
      <StyledHeader position="static">
        <Toolbar variant="dense">
          <Component>
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
          <Box>
            <CustomButton />
          </Box>
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header