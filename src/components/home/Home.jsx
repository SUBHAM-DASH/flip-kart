import React, { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import Banner from './Banner'
import Navbar from './Navbar';
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

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
        <MidSlide products={products} title="Deal of The Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discount's For You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selections" timer={false}/>
        <Slide products={products} title="Recomended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's Top Picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accessroies" timer={false}/>
      </Container>
    </>
  )
}

export default Home;
