import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Stack } from "@mui/material";

export default function ARGlasses() {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Concepts - AR glasses
      </Typography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <Image
          width="200"
          height="100"
          src="/ar-glasses-concept/AR-glasses-concept.jpg"
          alt="Actual reality"
        />
        <Image
          width="200"
          height="100"
          src="/ar-glasses-concept/AR-glasses-concept-2.jpg"
          alt="Augmented reality with just HUD"
        />
        <Image
          width="200"
          height="100"
          src="/ar-glasses-concept/AR-glasses-concept-3.jpg"
          alt="Augmented reality with HUD and watch app"
        />
        <Image
          width="200"
          height="100"
          src="/ar-glasses-concept/AR-glasses-concept-4.jpg"
          alt="Augmented reality with HUD and maps app"
        />
      </Stack>
    </Box>
  );
}
