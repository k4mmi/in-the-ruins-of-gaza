import { Link } from "react-router";
import "./NavButton.scss";

export function NavButton({ children = "LINK", to, className }) {
    return (
        <div className={`navButton ${className}`}>
            <Link to={to} draggable="false">{children}</Link>
        </div>
    );
}