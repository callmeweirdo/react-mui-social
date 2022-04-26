import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  DarkMode,
  Groups,
  Home,
  Pages,
  People,
  RocketLaunchOutlined,
  Settings,
  Shop,
  VerifiedUser,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Shop />
            </ListItemIcon>
            <ListItemText primary="Market" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <VerifiedUser />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
