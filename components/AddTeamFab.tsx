import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTeamFab() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
