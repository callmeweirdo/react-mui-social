import React from "react";
import { Box } from "@mui/material";

const RightBar = () => {
  return (
    <Box
      bgcolor="red"
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      SideBar
    </Box>
  );
};

export default RightBar;
