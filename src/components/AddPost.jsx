import {
  DateRange,
  Edit,
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Mood,
  PersonAddAltOutlined,
  RocketLaunchOutlined,
  VideoCameraBackOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const AddPost = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box>
      <Tooltip
        title="Create Post"
        color="primary"
        arrow
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: " calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={(e) => setOpenModal(true)}
        >
          <Edit />
        </Fab>
      </Tooltip>
      <StyledModal
        open={openModal}
        onClose={(e) => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="white"
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Box m={2}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
              color="gray"
            >
              Create Your Post
            </Typography>
            <UserBox>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://media.istockphoto.com/photos/in-space-picture-id1327755749?k=20&m=1327755749&s=612x612&w=0&h=7aMh0J8kj4O92Wdeo3hhCMGtoXy43A8JUIc1aNIYt8A="
              />
              <Typography fontWeight={500} variant="span">
                OG Weird
              </Typography>
            </UserBox>
          </Box>
          <Box m={2}>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="Enter Your Bullshit"
              variant="standard"
            />
            <Stack direction="row" spacing={1} mt={2} mb={3}>
              <EmojiEmotions sx={{ color: "yellow" }} />
              <VideoCameraBackOutlined color="primary" />
              <PersonAddAltOutlined color="success" />
              <RocketLaunchOutlined color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button sx={{ width: "70%" }}>Post</Button>
              <Button sx={{ width: "30%" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default AddPost;
