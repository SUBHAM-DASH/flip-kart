import React, { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import Banner from './Banner'
import Navbar from './Navbar';
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from 'react-redux';

const Container = styled(Box)`
  padding:10px;
  background:#f2f2f2;
`;

const Home = () => {

  const { products } = useSelector(state => state.getProducts);

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "10px" }}>
        <Banner />
      </Container>
    </>
  )
}

export default Home;
