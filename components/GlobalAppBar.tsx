"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawer } from "../context/DrawerContext";

export default function GlobalAppBar() {
  const { isOpen, setIsOpen } = useDrawer();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.75)",
            boxShadow: "0 6px 40px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
              backdropFilter: "blur(10px)",
              borderRadius: "50%",
              padding: "10px",
            }}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon
              sx={{
                fontSize: "2rem",
                color: "#ffffff",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-opaque background
                borderRadius: "50%", // Circular background
                padding: "5px", // Space around the icon
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Slight enlargement on hover
                },
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#ffffff",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Ephraim Becker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
