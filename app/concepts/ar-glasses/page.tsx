import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ARGlasses() {
  const width = 500;
  const height = 200;

  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Concepts - AR glasses
      </Typography>
      <motion.div>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept.jpg"
          alt="Actual reality"
        />
        <Typography component="p" variant="subtitle1">
          This is the actual environment before you put on your glasses.
        </Typography>
      </motion.div>
      <motion.div>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-2.jpg"
          alt="Augmented reality with just HUD"
        />
        <Typography component="p" variant="subtitle1">
          When you put on your glasses and swipe up, you get the HUD.
        </Typography>
      </motion.div>
      <motion.div>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-3.jpg"
          alt="Augmented reality with HUD and watch app"
        />
        <Typography component="p" variant="subtitle1">
          When you tap on the watch app, it puts a virtual watch on your wrist
          and you can even choose different watches and even watchfaces.
        </Typography>
      </motion.div>
      <motion.div>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-4.jpg"
          alt="Augmented reality with HUD and maps app"
        />
        <Typography component="p" variant="subtitle1">
          You can even go to the maps app and view maps placed on your own
          table.
        </Typography>
      </motion.div>
      <motion.div>
        <Typography component="p" variant="subtitle1">
          And that&apos;s only the beginning. More to come..
        </Typography>
      </motion.div>
    </Box>
  );
}
