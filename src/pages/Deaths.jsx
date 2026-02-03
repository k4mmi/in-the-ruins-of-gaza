import { SectionMainNumer } from "../components/SectionMainNumer";
import { SectionSmall } from "../components/SectionSmall";
import { SectionTitle } from "../components/SectionTitle";
import "./Deaths.scss"

export function Deaths() {
    return (
        <section className="deaths">
            <SectionTitle>Total death toll in Gaza</SectionTitle>
            <SectionMainNumer>70125</SectionMainNumer>
            <SectionSmall>November 2025 / Source: <a target="_blank" href="https://www.ochaopt.org/">OCHA</a></SectionSmall>
        </section>
    );
}