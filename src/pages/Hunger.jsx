import { SectionMainNumer } from "../components/SectionMainNumer";
import { SectionSmall } from "../components/SectionSmall";
import { SectionTitle } from "../components/SectionTitle";
import "./Hunger.scss"

export function Hunger() {
    return (
        <section className="hunger">
            <SectionTitle>Number of people affected by food emergency and crisis</SectionTitle>
            <SectionMainNumer>1465499</SectionMainNumer>
            <SectionSmall>August 2025 / Source: <a target="_blank" href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1159696/?iso3=PSE">IPC</a></SectionSmall>
            <hr/>
            <SectionTitle>Number of people affected by famine</SectionTitle>
            <SectionMainNumer>513720</SectionMainNumer>
            <SectionSmall>August 2025 / Source: <a target="_blank" href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1159696/?iso3=PSE">IPC</a></SectionSmall>
        </section>
    );
}