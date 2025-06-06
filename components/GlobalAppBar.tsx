"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawer } from "../context/DrawerContext";
import { useEffect, useState } from "react";

export default function GlobalAppBar() {
  const { isOpen, setIsOpen } = useDrawer();
  const [supportsBackdropFilter, setSupportsBackdropFilter] = useState(false);

  useEffect(() => {
    if (window.CSS && window.CSS.supports) {
      setSupportsBackdropFilter(
        window.CSS.supports("backdrop-filter", "blur(12px)")
      );
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(255, 255, 255, 0.05))",
          backdropFilter: supportsBackdropFilter ? "blur(12px)" : "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          textShadow: "0px 1px 3px rgba(0, 0, 0, 0.5)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(255, 255, 255, 0.25))",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)",
            textShadow: "0px 1px 3px rgba(0, 0, 0, 0.5)",
          },
          "&:focus-within": {
            outline: "2px solid rgba(0, 0, 0, 0.2)", // Focus indication
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
            variant="h3"
            component="h1"
            sx={{
              flexGrow: 1,
              color: "#ffffff",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              fontFamily: "Ephraimbecker, Roboto, sans-serif",
            }}
          >
            Ephraim Becker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
