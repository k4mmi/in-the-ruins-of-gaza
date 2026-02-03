import "./ScrapContainer.scss";

export function ScrapContainer({ children }) {
    return (
        <svg className="scrapContainer">
            {children}
        </svg>
    );
}