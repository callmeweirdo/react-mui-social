import React, { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

import { Stack, Box, ThemeProvider, Theme, createTheme } from "@mui/material";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState("dark");

  const darkMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkMode}>
      <Box
        bgcolor={"background.default"}
        sx={{ margin: "0px" }}
        color={"text.primary"}
      >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
