import "./Sounds.scss";

export function Sounds({ children }) {

    return (
        <>
            {/* Add "controls" attr for visual player */}
            <audio className="sounds" id="sounds" loop src="/assets/aud_2.mp4"></audio>        
        </>
    );
}