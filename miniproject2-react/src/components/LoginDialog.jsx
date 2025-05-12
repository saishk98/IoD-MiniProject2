import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function LoginDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        LOG IN TO BATMAN UNIVERSE
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography align="center" sx={{ mb: 2 }}>
          Don&apos;t have an account?{" "}
          <a href="#" style={{ color: "#0073e6" }}>Create an Account</a>
        </Typography>

        <TextField
          label="Enter Your Email"
          fullWidth
          margin="dense"
          variant="standard"
        />
        <TextField
          label="Enter Your Password"
          fullWidth
          margin="dense"
          variant="standard"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="body2" sx={{ mt: 1, mb: 2, color: "#0073e6" }}>
          <a href="#">Forgot Password?</a>
        </Typography>

        <Button
          fullWidth
          variant="contained"
          disabled
          sx={{
            backgroundColor: "#ccc",
            color: "#555",
            fontWeight: "bold",
            borderRadius: "30px",
            py: 1.5,
            mb: 2,
          }}
        >
          LOG IN
        </Button>

        <Typography variant="body2" align="center" color="text.secondary">
          By clicking 'LOG IN', you agree to the{" "}
          <a href="#" style={{ color: "#0073e6" }}>Terms of Use</a>.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          To learn about how your info is processed, see the privacy policy{" "}
          <a href="#" style={{ color: "#0073e6" }}>here</a>.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
