import { Box } from "@mui/system";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

import DataProvider from "./context/DataProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from "./components/details/DetailView";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 30 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
