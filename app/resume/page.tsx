import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Resume() {
  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Image
        src="/ephraim-becker.jpg"
        alt="Image of Ephraim Becker"
        width={200}
        height={200}
      />
      <Typography variant="h3" component="h3">
        Ephraim Becker
      </Typography>
      <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
        <Typography variant="body2" component="p">
          emb16@outlook.com
        </Typography>
        <Typography variant="body2" component="p">
          |
        </Typography>
        <Typography variant="body2" component="p">
          (516) 880-3474
        </Typography>
        <Typography variant="body2" component="p">
          |
        </Typography>
        <Typography variant="body2" component="p">
          Cedarhurst, NY 11516
        </Typography>
      </Stack>
      <br />
      <br />
      <Stack spacing={5} direction="row" sx={{ justifyContent: "center" }}>
        <Typography variant="h6" component="h4">
          Professional Summary
        </Typography>
        <Typography variant="body2" component="p" sx={{ width: 500 }}>
          Experienced developer with a demonstrated history of working in the
          financial services industry. Skilled in HTML, CSS, JavaScript, React,
          and NextJS. Strong engineering professional graduated from Ivdu.
        </Typography>
      </Stack>
    </Box>
  );
}
