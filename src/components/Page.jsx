import { createDraggable, createScope } from 'animejs';
import { useRef, useEffect } from "react";
import { PageAnimation2 } from "./PageAnimation2";
import { Link } from 'react-router';
import "./Page.scss";

export function Page({ children }) {

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        scope.current = createScope({ root }).add( self => {

            createDraggable( root.current, {
                container: document.getElementById("page"),
                containerFriction: 0.75,
                maxVelocity: 0.5,
                minVelocity: 0,
                cursor: {
                    onHover: 'deafult',
                    onGrab: 'pointer'
                }
            });
            
        });

        return () => scope.current.revert();

    }, []);

    return (
        <PageAnimation2 className="page" id="page">
            <div className="page__box" ref={root}>
                {children}
                <Link to="/map" className='page__close'><img className="page__closeBtn" src='/assets/close.svg'/><div className='page__closeText'>Close</div></Link>
                <img className="page__drag" src="/assets/drag.svg" alt="You can move the window" />
            </div>
        </PageAnimation2>
    );
}