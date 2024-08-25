import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function ARGlasses() {
  const width = 500;
  const height = 200;

  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Concepts - AR glasses
      </Typography>
      <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept.jpg"
          alt="Actual reality"
        />
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-2.jpg"
          alt="Augmented reality with just HUD"
        />
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-3.jpg"
          alt="Augmented reality with HUD and watch app"
        />
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-4.jpg"
          alt="Augmented reality with HUD and maps app"
        />
      </Stack>
    </Box>
  );
}
