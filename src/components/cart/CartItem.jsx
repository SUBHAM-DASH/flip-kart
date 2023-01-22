import React from 'react';
import { Box, styled, Typography,Button } from "@mui/material";
import ButtonGroup from './ButtonGroup';

const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
`;

const LeftComponent = styled(Box)`
    margin:15px;
`;

const SellerText = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
`;

const Remove = styled(Button)`
    margin:20px 15px;
    color:#000;
    font-weight:bold;
`;

const CartItem = ({ item }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return (
        <div>
            <Component>
                <LeftComponent>
                    <img src={item.url} alt="cart image" width="120" height="120" />
                    <ButtonGroup/>
                </LeftComponent>
                <Box>
                    <Typography>{item.title.longTitle}</Typography>
                    <SellerText>Seller:RetailNet
                        <Box component="span">
                            <img src={fassured} alt="flipcart" style={{ width: 50, marginLeft: '25px' }} />\
                        </Box>
                    </SellerText>
                    <Typography>
                        <Box component="span" sx={{ fontWeight: 600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" sx={{ color: "#878787" }}><strike>{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" sx={{ color: '#388E3C' }}>{item.price.discount} off</Box>&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Remove>Remove</Remove>
                </Box>
            </Component>
        </div>
    )
}

export default CartItem;
