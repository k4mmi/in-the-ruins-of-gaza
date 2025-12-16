import { Scrap } from '../components/Scrap';
import { MapLink } from '../components/MapLink';
import { useRef, useEffect } from "react";
import { NavButton } from '../components/NavButton';
import { SoundsButton } from '../components/SoundsButton';
import "./Map.scss";

export function Map() {

        const root = useRef(null);
        const scope = useRef(null);
    
        let isChanged = false;
    
    useEffect(() => {

        function timeInterval() {
            // if (true) alert("Morning");
            // else alert("Afternoon");
        }
        timeInterval();
        const id = setInterval(timeInterval, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="map" ref={root} container='scrapContainerMap'>
            <MapContent/>
            <div className="map__back">
                <NavButton to="/"><img className="map__backIcon" src='/assets/back.svg'/>Back</NavButton>
            </div>
            <div className="map__sounds">
                <SoundsButton/>
            </div>
        </div>
    );
}

function MapContent() {
    return (
        <>
            <MapLink text="Injuries" to="injuries" t="10%" l="30%"/>
            <MapLink text="Homes" to="homes" t="35%" l="57%"/>
            <MapLink text="Hunger" to="hunger" t="60%" l="20%"/>
            <MapLink text="Deaths" to="deaths" t="80%" l="50%"/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap'/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-1"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-2"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
            <Scrap container='scrapContainerMap' className="scrap__hide-3"/>
        </>
    );
}