import React from 'react'
import { styled } from '@mui/material';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Image = styled("img")({
    width: "100%",
    height: 280
});

const Banner = () => {
    return (
        <>
            <Carousel responsive={responsive}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                dotListClass="custom-dot-list-style"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {
                    bannerData.map((item, index) => {
                        return <Image key={index} src={item.url} alt="no image" />
                    })
                }
            </Carousel>
        </>
    )
}

export default Banner
