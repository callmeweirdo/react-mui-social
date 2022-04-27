import { Mail, Notifications, RocketLaunch } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignContent: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          OG WEIRD
        </Typography>
        <RocketLaunch sx={{ display: { xs: "block", sm: "none" } }} />
        <Search bgcolor={"background.default"} color={"text.primary"}>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={101} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={10091} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpenMenu(true)}
            sx={{ width: 30, height: 30 }}
            src="https://media.istockphoto.com/photos/in-space-picture-id1327755749?k=20&m=1327755749&s=612x612&w=0&h=7aMh0J8kj4O92Wdeo3hhCMGtoXy43A8JUIc1aNIYt8A="
          />
        </Icons>
        <UserBox onClick={(e) => setOpenMenu(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://media.istockphoto.com/photos/in-space-picture-id1327755749?k=20&m=1327755749&s=612x612&w=0&h=7aMh0J8kj4O92Wdeo3hhCMGtoXy43A8JUIc1aNIYt8A="
          />
          <Typography>OG Weird</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        onClose={handleMenuClose}
        open={openMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e) => setOpenMenu(false)}>Profile</MenuItem>
        <MenuItem onClose={handleMenuClose}>My Account</MenuItem>
        <MenuItem onClose={handleMenuClose}>Log Out</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
