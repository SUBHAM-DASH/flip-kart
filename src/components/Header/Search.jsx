import React, { useState, useEffect } from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { getProducts } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from 'react-redux';

const BoxContainer = styled(Box)`
  background:#fff;
  width:38%;
  border-radius:2px;
  margin-left:10px;
`;

const InputBaseContainer = styled(InputBase)`
  padding-left:20px;
  width:100%;
`;

const SearchButton = styled(SearchIcon)`
  position:relative;
  right:31px;
  color:blue;
`;

const Search = () => {
  const [text, setText] = useState('');

  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  const getText = (text) => {
    setText(text);
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <>
      <BoxContainer>
        <InputBaseContainer placeholder='Search for products brands and more' onChange={(e) => getText(e.target.value)} />
      </BoxContainer>
      <SearchButton />
      {/* <Box>
        {
          text &&
          <List>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
                return <ListItem key={product.id}>{product.title.longTitle}</ListItem>
              })
            }
          </List>
        }
      </Box> */}
    </>
  )
}

export default Search;
