"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FormatPaint, Home, Work } from "@mui/icons-material";
import { useDrawer } from "../context/DrawerContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalDrawer() {
  const { isOpen, setIsOpen } = useDrawer();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  console.log(pathname);

  return (
    <Box>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            background: "rgba(255, 255, 255, 0.2)", // Less transparent (more visible)
            backdropFilter: "blur(8px)", // Apply the blur effect to the Drawer content only
            boxShadow: "0 4px 25px rgba(0, 0, 0, 0.15)", // Softer shadow for depth
            color: "#fff", // White text
            transition: "transform 0.3s ease, background 0.3s ease",
            borderRadius: "8px", // Slight border radius for a softer look
            zIndex: 2, // Ensure Drawer content is above the dimmed page
          },
        }}
        // Remove the default backdrop
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "transparent", // Set the backdrop color to transparent
            },
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <List>
            <Link href="/" style={{ color: "initial", textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive("/")
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              href="/portfolio/"
              as="/portfolio/"
              style={{ color: "initial", textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive("/portfolio")
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Work />
                  </ListItemIcon>
                  <ListItemText primary="Portfolio" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              href="/concepts/"
              style={{ color: "initial", textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive("/concepts")
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <FormatPaint />
                  </ListItemIcon>
                  <ListItemText primary="Concepts" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
