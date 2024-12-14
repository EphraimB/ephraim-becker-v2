import { Project } from "@/app/types";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import StatusRibbon from "./StatusRibbon";

export default function FlipCard({ data }: { data: Project }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const cardHeight = 600;

  return (
    <Paper
      sx={{
        p: 2,
        height: cardHeight,
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          transform: "translateY(-5px) scale(1.05)",
          transition: "all 0.3s ease",
        },
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={toggleFlip}>
          {flipped ? <FlipToFrontIcon /> : <FlipToBackIcon />}
        </IconButton>
        {data.status && (
          <Box sx={{ position: "relative" }}>
            <StatusRibbon text={data.status.text} color={data.status.color} />
          </Box>
        )}
      </Stack>
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
      >
        <div
          className="card-front"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {data.images &&
            data.images.map((image, index) => (
              <span key={index} className="image-wrapper">
                <Image
                  src={image.src}
                  alt={image.description}
                  width={image.size ? image.size.width : 300}
                  height={image.size ? image.size.height : 200}
                  loading="lazy"
                />
              </span>
            ))}
          <Typography
            variant="body1"
            component="p"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {data.started &&
              `Started ${dayjs(data.started).format("MMMM DD, YYYY")}.`}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {data.finished &&
              `Finished ${dayjs(data.finished).format("MMMM DD, YYYY")}.`}
          </Typography>
          <Typography component="h3" variant="h4">
            {data.title}
          </Typography>
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              position: "relative",
              scale: flipped ? "0" : "1", // Shrink the front
              opacity: flipped ? 0 : 1, // Hide front when flipped
              transition: "transform 0.5s, opacity 0.5s",
            }}
          >
            <Typography component="p" variant="body2">
              {data.description}
            </Typography>
          </motion.div>
          <br />
          <br />
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            {data.links &&
              data.links.map((link) => (
                <span key={link.src}>
                  <Link href={link.src} target="_blank">
                    {link.description}
                  </Link>
                  <br />
                </span>
              ))}
          </Typography>
        </div>
        <div
          className="card-back"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography component="h3" variant="h3">
            {data.title}
          </Typography>
          <br />
          <br />
          <Typography component="p" variant="body2">
            Technologies used: {data.technologies}
          </Typography>
          <br />
          <br />
          <Typography component="p" variant="body2">
            Project details: {data.details}
          </Typography>
          <br />
          <br />
          <Typography component="p" variant="body2">
            Key takeaways: {data.takeaways}
          </Typography>
        </div>
      </motion.div>
    </Paper>
  );
}
