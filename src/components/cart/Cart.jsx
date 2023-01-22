import React from 'react';
import { useSelector } from "react-redux";
import { Grid, Typography,styled,Box } from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';

const Cart = () => {

  const { cartItems } = useSelector(state => state.cart);

  const Container = styled(Grid)`
    padding:30px 135px;
  `;

  const Header = styled(Box)`
    padding:15px 35px;
  `;


  return (
    <>
      {
        cartItems.length > 0 ?
          <Container container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography>My Carts ({cartItems.length})</Typography>
              </Header>
              {
                cartItems.map(item=>{
                  return <CartItem key={item.id} item={item}/>
                })
              }
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView/>
            </Grid>
          </Container> : <div>Empty</div>
      }
    </>
  )
}

export default Cart
