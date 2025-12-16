import { SectionMainNumer } from "../components/SectionMainNumer";
import { SectionSmall } from "../components/SectionSmall";
import { SectionTitle } from "../components/SectionTitle";
import "./Injuries.scss"

export function Injuries() {
    return (
        <section className="injuries">
            <SectionTitle>Total number of injured in Gaza</SectionTitle>
            <SectionMainNumer>171015</SectionMainNumer>
            <SectionSmall>November 2025 / Source: <a target="_blank" href="https://www.ochaopt.org/">OCHA</a></SectionSmall>
        </section>
    );
}