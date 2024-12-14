import { Box, Typography } from "@mui/material";

export default function StatusRibbon({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: -16,
        right: -32,
        padding: "4px 8px",
        backgroundColor: color,
        color: "#fff",
        borderRadius: "8px 0 0 8px",
        transform: "rotate(45deg)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        whiteSpace: "nowrap",
        zIndex: 1,
      }}
    >
      <Typography variant="body2" component="span">
        {text}
      </Typography>
    </Box>
  );
}
