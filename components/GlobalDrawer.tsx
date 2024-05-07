"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home } from "@mui/icons-material";
import { useDrawer } from "../context/DrawerContext";
import Link from "next/link";

export default function GlobalDrawer() {
  const { isOpen, setIsOpen } = useDrawer();

  return (
    <div>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <List>
            <Link
              href="/"
              as="/"
              style={{ color: "initial", textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
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
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Portfolio" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              href="/resume/"
              as="/resume/"
              style={{ color: "initial", textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
