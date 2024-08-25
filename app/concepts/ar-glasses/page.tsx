import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ARGlassesConceptScenes from "@/components/ARGlassesConceptScenes";

export default function ARGlasses() {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Concepts - AR glasses
      </Typography>
      <ARGlassesConceptScenes />
    </Box>
  );
}
