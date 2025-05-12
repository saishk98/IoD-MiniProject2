import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PopupModal = ({ open, onClose, content }) => {
  if (!content) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          overflowY: "auto",
          borderRadius: 2,
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        <Grid container>
          {/* Image on the left */}
          <Grid item xs={12} md={5}>
            <img
              src={content.image}
              alt={content.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>

          {/* Text on the right */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              padding: 4,
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              {content.name}
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              {content.subheading_six}
            </Typography>

            {content.subtitle && (
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                gutterBottom
                sx={{ textTransform: "uppercase", color: "text.secondary" }}
              >
                {content.subtitle}
              </Typography>
            )}

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {content.description}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PopupModal;
