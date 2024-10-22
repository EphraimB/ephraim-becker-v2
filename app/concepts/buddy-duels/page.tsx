import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function BuddyDuels() {
  return (
    <Box sx={{ m: 2 }}>
      <Typography component="h2" variant="h4" sx={{ textAlign: "center" }}>
        Buddy Duels game
      </Typography>
      <br />
      <Typography component="h3" variant="h6" sx={{ textAlign: "center" }}>
        How it works
      </Typography>
      <Typography component="p" variant="body2">
        There are 2 teams of 10 people each paired with a buddy on your own
        team. This means that there are 5 groups of buddies facing an opposing 5
        groups of buddies. Each buddy system operates independently. 5 balls are
        placed in the middle of the pool going side to side. A buddy system and
        their opposing buddy system gets their own lane so that makes it 5
        seperate lanes. Each person gets a rotation on their buddy after the
        round is up. It's 5 minutes per round and 2 minute breaks in between
        rounds. How it works is you have a discussion with your buddy about how
        to pass to each other. The play ends after that pass and you go back to
        the discussion with your buddy again. Meanwhile, the opposing buddies
        has a discussion on how to steal the ball and try to do it. After 5
        minutes if, for example, you make 25% progress, you earn 25 points for
        your team. If you get to your opponents side before 5 minutes is up,
        then your turn in the round is up prematurely and you earn 100 points
        for your team. You need to play quickly because you can get the ball
        knocked out and the opposing buddy system gets the ball (which ends the
        play and goes the other way). The final score is the summed up points
        after 25 rounds.
      </Typography>
      <br />
      <Typography component="h3" variant="h6" sx={{ textAlign: "center" }}>
        Passing techniques
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="techniques table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Technique type</TableCell>
              <TableCell align="right">Technique risk</TableCell>
              <TableCell>Technique name</TableCell>
              <TableCell align="right">Technique description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Passing
              </TableCell>
              <TableCell align="right">Level 2</TableCell>
              <TableCell align="right">Direct Pass</TableCell>
              <TableCell align="right">
                A straightforward pass to a teammate
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Passing
              </TableCell>
              <TableCell align="right">Level 3</TableCell>
              <TableCell align="right">Lead Pass</TableCell>
              <TableCell align="right">
                A pass ahead of a teammate, allowing them to swim into position
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Passing
              </TableCell>
              <TableCell align="right">Level 4</TableCell>
              <TableCell align="right">Cross-Pool Pass</TableCell>
              <TableCell align="right">
                A long pass across the pool to a teammate
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Passing
              </TableCell>
              <TableCell align="right">Level 2</TableCell>
              <TableCell align="right">Skip Pass</TableCell>
              <TableCell align="right">
                A pass that skips across the water, making it harder for
                opponents to intercept
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Giving
              </TableCell>
              <TableCell align="right">Level 1</TableCell>
              <TableCell align="right">Give-and-Go</TableCell>
              <TableCell align="right">
                A player passes to a teammate and then swims just past their
                defender (can't go any further than just past)
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Giving
              </TableCell>
              <TableCell align="right">Level 1</TableCell>
              <TableCell align="right">Give-and-Swim</TableCell>
              <TableCell align="right">
                A player passes to a teammate and then swims to create space
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Giving
              </TableCell>
              <TableCell align="right">Level 1</TableCell>
              <TableCell align="right">Underwater give</TableCell>
              <TableCell align="right">
                A player gives to a teammate while underwater
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography component="p" variant="body2">
        and many more...
      </Typography>
      <br />
      <Link
        href="buddy-duels/interactive-game"
        as="buddy-duels/interactive-game"
      >
        <Button size="small">Play demo</Button>
      </Link>
    </Box>
  );
}
