import Link from "next/link";
import React from "react";
import { Navigation } from "../components/navbar";
import { Annexx } from "../components/annexx";
import { SuperData } from "../components/super_data";
import Footer from "../components/footer";
import { Lgae } from "../components/lgae";
import { Portofolio } from "../components/portofolio";
import { IntroAngular } from "../components/introAngular";
import { FrenchPopulation } from "../components/frenchPopulation";
import { Stally } from "../components/stally";




export default function Home() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />

            <Annexx></Annexx>
            <Stally></Stally>
            <FrenchPopulation></FrenchPopulation>
            <Portofolio></Portofolio>
            <IntroAngular></IntroAngular>
            <SuperData></SuperData>
            <div style={{ marginTop: '100px' }}></div>
            <Lgae></Lgae>
            <Footer></Footer>


        </div>
    );

}
