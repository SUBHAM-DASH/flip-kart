import { Box, Button, styled } from '@mui/material'
import React,{useState} from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/actions/cartActions";

import { ShoppingCart, FlashOn } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0px 0px 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image = styled("img")({
    width: '95%',
    padding: '10px'
});


const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '3px',
    marginTop: '20px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'46%'
    }
}));

const ActionItem = ({ product }) => {
    const [quantity,setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;



    const addProductInCart = ()=>{
        dispatch(addToCart(id,quantity));
        navigate("/cart");
    }


    return (
        <LeftContainer>
            <Box sx={{ padding: "45px 20px", border: "1px solid #f0f0f0" }}>
                <Image src={product.detailUrl} />
            </Box>
            <StyledButton onClick={()=>addProductInCart()} style={{ background: "#ff9f00", marginRight: 10 }} variant='contained'><ShoppingCart />Add To Cart</StyledButton>
            <StyledButton style={{ background: "#fb541b" }} variant='contained'><FlashOn /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem