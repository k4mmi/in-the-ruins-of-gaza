import { useRef, useEffect, useState } from "react";
import "./SoundsButton.scss";

let soundArePlaying = false;

export function SoundsButton() {

    const root = useRef(null);

    const [ soundStatus, setSoundStatus ] = useState("/assets/soundsOff.svg");
    
    useEffect(()=>{

        function isPlaying() {

            soundArePlaying = !document.getElementById("sounds").paused;

            if ( soundArePlaying === false ) {
                setSoundStatus("/assets/soundsOff.svg");
            } else if ( soundArePlaying === true ) {
                setSoundStatus("/assets/soundsOn.svg");
            }
            
        }

        let sounds = document.getElementById("sounds");
        // let soundsButton = document.getElementById("soundsButton");
        let soundsButton = root.current;

        const buttonFunction = () => {

            // console.log(soundArePlaying)

            if (soundArePlaying === false){
                sounds.play();
                soundArePlaying = true;
                setSoundStatus("/assets/soundsOn.svg");
                
            } else if (soundArePlaying === true){
                sounds.pause();
                soundArePlaying = false;
                setSoundStatus("/assets/soundsOff.svg");
            }
        };

        soundsButton.addEventListener("click", buttonFunction);


        const interval = setInterval(()=>{
            isPlaying();
        }, 500)

        return () => {
            soundsButton.removeEventListener("click", buttonFunction);
            sounds = null;
            soundsButton = null;
            clearInterval(interval)
        }

    }, []) 
    return (
        <button id="soundsButton" ref={root} className="soundsButton"><img src={soundStatus}></img></button>
    );
}