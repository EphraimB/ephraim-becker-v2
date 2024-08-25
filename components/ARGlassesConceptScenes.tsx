"use client";

import Typography from "@mui/material/Typography";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const width = 500;
const height = 200;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AnimatedItem = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Adjust threshold to trigger the animation
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </motion.div>
  );
};

const ScrollAnimation = () => {
  return (
    <div>
      <AnimatedItem>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept.jpg"
          alt="Actual reality"
        />
        <Typography component="p" variant="subtitle1">
          This is the actual environment before you put on your glasses.
        </Typography>
      </AnimatedItem>
      <AnimatedItem>
        <Image
          width={width}
          height={height}
          src="/ar-glasses-concept/AR-glasses-concept-2.jpg"
          alt="Augmented reality with just HUD"
        />
        <Typography component="p" variant="subtitle1">
          When you put on your glasses and swipe up, you get the HUD.
        </Typography>
      </AnimatedItem>
      <AnimatedItem>
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
      </AnimatedItem>
      <AnimatedItem>
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
      </AnimatedItem>
      <AnimatedItem>
        <Typography component="p" variant="subtitle1">
          You can even go to the maps app and view maps placed on your own
          table.
        </Typography>
      </AnimatedItem>
      <AnimatedItem>
        <Typography component="p" variant="subtitle1">
          And that&apos;s only the beginning. More to come..
        </Typography>
      </AnimatedItem>
    </div>
  );
};

export default ScrollAnimation;
