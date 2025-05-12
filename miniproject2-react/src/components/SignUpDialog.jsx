// src/components/SignUpDialog.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SignUpModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ m: 0, p: 2, textAlign: "center", fontWeight: "bold" }}>
        JOIN THE BATMAN UNIVERSE
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          SIGN UP NOW TO GET THE LATEST NEWS, OFFERS, AND MORE!
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          margin="dense"
          type="email"
        />

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Yes, I want to receive updates and offers from BATMAN"
          sx={{ mt: 1 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, fontWeight: "bold" }}
        >
          JOIN NOW
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
