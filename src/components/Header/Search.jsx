import React from 'react'
import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

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
  return (
    <>
      <BoxContainer>
        <InputBaseContainer placeholder='Search for products brands and more' />
      </BoxContainer>
      <SearchButton/>
    </>
  )
}

export default Search