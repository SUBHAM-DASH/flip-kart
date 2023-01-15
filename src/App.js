import { Box } from "@mui/system";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";

import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
        <Header />
        <Box style={{ marginTop: 30 }}>
          <Home />
        </Box>
    </DataProvider>
  );
};

export default App;
