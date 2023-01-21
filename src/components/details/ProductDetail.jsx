import React from 'react'
import { Box, Typography,styled, TableBody, Table, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const TextContent = styled(Typography)` 
  font-size:14px;
  margin-top:10px;
`;

const Badge = styled(LocalOfferIcon)`
  color:#00cc00;
  margin-right:18px;
  font-size:20px;
`;

const ProductDetail = ({ product }) => {

  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <Box>
      <Typography>{product.title.longTitle}</Typography>
      <Typography sx={{ fontSize: "14px", color: "#878787", marginTop: 5 }}>8 Ratings & 1 Review
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" sx={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" sx={{ color: "#878787" }}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" sx={{ color: '#388E3C' }}>{product.price.discount} off</Box>&nbsp;&nbsp;&nbsp;
      </Typography>
      <Typography>Available Offers</Typography>
      <Box>
        <TextContent><Badge/> Bank Offer10% off on Federal Bank Debit and Credit Card, up to ₹1,250. On orders of ₹5,000 and aboveT&C</TextContent>
        <TextContent><Badge/> Bank Offer10% off on HSBC Credit Card and EMI Transactions, up to ₹1,250. On orders of ₹5,000 and aboveT&C</TextContent>
        <TextContent><Badge/> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</TextContent>
        <TextContent><Badge/> Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</TextContent>
      </Box>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{color:"#878787"}}>Delivery</TableCell>
            <TableCell sx={{fontWeight:600}}>Delivery By {date.toDateString()} |  ₹40</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{color:"#878787"}}>Warrenty</TableCell>
            <TableCell>No Warrenty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{color:"#878787"}}>Seller</TableCell>
            <TableCell>
              <Box component="span" sx={{color:"#2874f0"}}>
                SuperComnet
              </Box>
              <Typography>Gst Invoice Available</Typography>
              <Typography>View More Sellers Starting from  ₹ {product.price.cost}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{width:390}} alt="ad" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{color:"#878787"}}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </Box>
  )
}

export default ProductDetail