import { motion } from "motion/react";

export function PageAnimation2({ children, className = "", id}) {
  return (
    <>
        <motion.div
            className={"pageAnimation " + className}
            initial={{ opacity: 0, filter: "blur(50px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(50px)" }}
            transition={{ duration: 0.8 }}
            >
            {children}
        </motion.div>
        
    </>
  );
}