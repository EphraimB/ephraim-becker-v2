import { ImageType, LinkType } from "@/app/types";
import { IconButton, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";

export default function FlipCard({
  started,
  ended,
  images,
  title,
  front,
  back,
  links,
}: {
  started?: string;
  ended?: string;
  images: ImageType[];
  title: string;
  front: string;
  back: string;
  links: LinkType[];
}) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const cardHeight = 600;

  return (
    <Paper sx={{ p: 2, height: cardHeight }}>
      <IconButton onClick={toggleFlip}>
        {flipped ? <FlipToFrontIcon /> : <FlipToBackIcon />}
      </IconButton>
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
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <Image
                src={image.src}
                alt={image.description}
                width={300}
                height={200}
              />
            </div>
          ))}
          <Typography
            variant="body1"
            component="p"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {started
              ? `Started ${dayjs(started).format("MMMM DD, YYYY")}.`
              : null}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {ended ? `Ended ${dayjs(ended).format("MMMM DD, YYYY")}.` : null}
          </Typography>
          <Typography component="h3" variant="h3">
            {title}
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
              {front}
            </Typography>
          </motion.div>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            {links.map((link, index) => (
              <>
                <Link key={index} href={link.src} target="_blank">
                  {link.description}
                </Link>
                <br />
                <br />
              </>
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
            {title}
          </Typography>
          <br />
          <br />
          <Typography component="p" variant="body2">
            {back}
          </Typography>
        </div>
      </motion.div>
    </Paper>
  );
}
