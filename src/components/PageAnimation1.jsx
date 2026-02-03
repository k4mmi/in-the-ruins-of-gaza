import { motion } from "motion/react";

export function PageAnimation1({ children, className = ""}) {
  return (
    <>
        <motion.div
            className={"pageAnimation " + className}
            // initial={{ x: "100%", opacity: 0 }} // Start
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.1, opacity: 0, filter: "blur(50px)" }}
            transition={{ duration: 0.8 }}
            >
            {children}
        </motion.div>
        
    </>
  );
}