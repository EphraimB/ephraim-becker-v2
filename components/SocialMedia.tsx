"use client";

import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Chip from '@mui/material/Chip';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from "@mui/material/Grid2";

export default function SocialMedia() {
    return (

        <Grid
            container
            spacing={2}
            size={{ sm: 3, md: 1 }}
            sx={{ justifyContent: "center" }}
        >
            <Chip
                label="Facebook"
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/ephraim.becker/"
                icon={<FacebookIcon />}
                variant="outlined"
                clickable
            />
            <Chip
                label="Instagram"
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/ephraim.becker/"
                icon={<InstagramIcon />}
                variant="outlined"
                clickable
            />
            <Chip
                label="X (formally twitter)"
                component="a"
                target="_blank"
                rel="noopener"
                href="https://twitter.com/emb180"
                icon={<XIcon />}
                variant="outlined"
                clickable
            />
            <Chip
                label="YouTube"
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/channel/UCIHxAXYLxYlNaQiv0do0bUg"
                icon={<YouTubeIcon />}
                variant="outlined"
                clickable
            />
            <Chip
                label="LinkedIn"
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/ephraim-becker/"
                icon={<LinkedInIcon />}
                variant="outlined"
                clickable
            />
            <Chip
                label="GitHub"
                component="a"
                target="_blank"
                rel="noopener"
                href="https://github.com/EphraimB"
                icon={<GitHubIcon />}
                variant="outlined"
                clickable
            />
        </Grid>
    );
}