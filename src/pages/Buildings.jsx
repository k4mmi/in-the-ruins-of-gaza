import { SectionMainNumer } from "../components/SectionMainNumer";
import { SectionSmall } from "../components/SectionSmall";
import { SectionTitle } from "../components/SectionTitle";
import "./Buildings.scss"

export function Buildings() {
    return (
        <section className="buildings">
            <SectionTitle>Number of destroyed homes</SectionTitle>
            <SectionMainNumer>160000</SectionMainNumer>
            <SectionSmall>December 2024 / Source: <a target="_blank" href="https://sheltercluster.org/palestine/documents/devastating-lack-shelter-exacerbates-risk-harm-palestinians-gaza">Shelter Cluster</a></SectionSmall>
            <hr/>
            <SectionTitle>Number of damaged homes</SectionTitle>
            <SectionMainNumer>276000</SectionMainNumer>
            <SectionSmall>December 2024 / Source: <a target="_blank" href="https://sheltercluster.org/palestine/documents/devastating-lack-shelter-exacerbates-risk-harm-palestinians-gaza">Shelter Cluster</a></SectionSmall>
        </section>
    );
}