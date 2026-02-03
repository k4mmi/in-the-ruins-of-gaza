import "./SectionMainNumer.scss"
import { useRef, useEffect } from "react";
import { createScope, utils, animate } from "animejs";

export function SectionMainNumer({ children }) {

        const root = useRef(null);
        const scope = useRef(null);
    
        useEffect(() => {
    
            scope.current = createScope({ root }).add( self => {
    
                animate(root.current, {
                    innerHTML: children,
                    modifier: utils.round(0),
                    duration: 800 * 1.5,
                    delay: 400,
                });   
                
            });
    
            return () => {
                scope.current.revert();
            };
    
        }, []);

    return (
        <p className="sectionMainNumer" ref={root}>
            0
        </p>
    );
}