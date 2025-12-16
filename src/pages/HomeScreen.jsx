import { PageAnimation1 } from "../components/PageAnimation1";
import { Scrap } from "../components/Scrap";
import { NavButton } from "../components/NavButton";
import { motion } from "motion/react";
import { SoundsButton } from "../components/SoundsButton";
import "./HomeScreen.scss";

export function HomeScreen() {
  return (
    <>
        <motion.div
            className="homescreen"
            // initial={{ opacity: 0, filter: "blur(50px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(50px)" }}
            transition={{ duration: .8}}
        >
            <div className="homescreen__scrapContainer" id="scrapContainerHome">
                <PageAnimation1 className="homescreen__wrapper">
                    <h1 className="homescreen__title">In the ruins<br/>of Gaza</h1>
                    <div className="homescreen__buttons">
                        <NavButton to="/map">Start</NavButton>
                        <SoundsButton/>
                    </div>
                    <a className="homescreen__source" target="_blank" href="https://github.com/k4mmi/in-the-ruins-of-gaza">Source code</a>
                </PageAnimation1>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
                <Scrap container='scrapContainerHome'/>
            </div>
        </motion.div>
    </>
  );
}