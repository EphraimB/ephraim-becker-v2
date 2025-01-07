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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function FlipCard({ data }: { data: Project }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const cardHeight = 600;

  const showPagination = data.images && data.images.length > 1;

  return (
    <Paper
      sx={{
        p: 2,
        height: cardHeight,
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(255, 255, 255, 0.05))",
        backdropFilter: "blur(10px)", // Glassmorphism effect
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow
        color: "#fff", // Ensures text is legible
        transition: "all 0.3s ease",
        "&:hover": {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.15))", // Slightly darkens on hover
          boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)", // Softens shadow on hover
          transform: "translateY(-5px) scale(1.05)",
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
      {data.status.reason && (
        <Typography
          variant="body2"
          sx={{ textAlign: "center", backgroundColor: data.status.color }}
        >
          {data.status.text} due to {data.status.reason}
        </Typography>
      )}
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
            zIndex: flipped ? 0 : 1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <motion.div
            style={{
              opacity: flipped ? 0 : 1,
              scale: flipped ? 0.8 : 1,
              transition: "opacity 0.5s, scale 0.5s",
            }}
          >
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={showPagination ? { clickable: true } : false}
            >
              {data.images &&
                data.images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.description}
                      width={image.size ? image.size.width : 300}
                      height={image.size ? image.size.height : 200}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)",
            }}
          >
            {data.started &&
              `Started ${dayjs(data.started).format("MMMM DD, YYYY")}.`}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)",
            }}
          >
            {data.finished &&
              `Finished ${dayjs(data.finished).format("MMMM DD, YYYY")}.`}
          </Typography>
          <Typography
            component="h3"
            variant="h4"
            sx={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
          >
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
            <Typography
              component="p"
              variant="body2"
              sx={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
            >
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
                <span
                  key={link.src}
                  style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
                >
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
            zIndex: flipped ? 1 : 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
          >
            {data.title}
          </Typography>
          <br />
          <br />
          <Typography
            component="p"
            variant="body2"
            sx={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
          >
            Technologies used: {data.technologies}
          </Typography>
          <br />
          <br />
          <Typography
            component="p"
            variant="body2"
            sx={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
          >
            Project details: {data.details}
          </Typography>
          <br />
          <br />
          <Typography
            component="p"
            variant="body2"
            sx={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
          >
            Key takeaways: {data.takeaways}
          </Typography>
        </div>
      </motion.div>
    </Paper>
  );
}
