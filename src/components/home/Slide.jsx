import { Box, styled, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
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

const Component = styled(Box)`
  margin-top:10px;
  background:#ffffff;
`;

const Deal = styled(Box)`
  padding:15px 20px;
  display:flex;
`;
const Timer = styled(Box)`
  display:flex;
  align-items:center;
  margin-left:15px;
  color:#7f7f7f;
`;

const DealText = styled(Typography)`
  font-size:20px;
  font-weight:600;
  margin-right:25px;
  line-height:32px;
`;

const ViewAllButton = styled(Button)`
  margin-left:auto;
  background-color:#2874f0;
  border-radius:2px;
  font-size:13px;
  font-weight:600;
  
`;

const Image = styled('img')({
  width: 'auto',
  height: '150px'
});

const Text = styled(Typography)`
  font-size:14px;
  margin-top:5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours} : {minutes} : {seconds} left</Box>
  }

  return (
    <div>
      <Component>
        <Deal>
          <DealText>{title}</DealText>
          {
            timer && <Timer>
              <img src={timerUrl} alt="timer" style={{ width: 24 }} />
              <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
            </Timer>
          }
          <ViewAllButton variant='contained' color='primary'>View All</ViewAllButton>
        </Deal>
        <Divider />
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
        >
          {
            products?.map((item, index) => {
              return <Box key={index} textAlign="center" style={{ padding: "15px 25px" }}>
                <Image src={item.url} />
                <Text sx={{ fontWeight: 600, color: "#212121" }}>{item.title.shortTitle}</Text>
                <Text sx={{ color: "green" }}>{item.discount}</Text>
                <Text sx={{ color: "#212121", opacity: ".6" }}>{item.tagline}</Text>
              </Box>
            })
          }
        </Carousel>
      </Component>
    </div>
  )
}

export default Slide;