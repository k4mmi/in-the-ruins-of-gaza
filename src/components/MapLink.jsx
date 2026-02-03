import { Link } from "react-router";
import "./MapLink.scss";

export function MapLink({ text = "LINK", to, l, t }) {
    return (
        <div className="mapLink" style={{left: l, top: t}}>
            <Link to={to} draggable="false">{text}</Link>
        </div>
    );
}