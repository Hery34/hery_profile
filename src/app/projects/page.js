import Link from "next/link";
import React from "react";
import { Navigation } from "../components/navbar";
import { Annexx } from "../components/annexx";
import { SuperData } from "../components/super_data";



export default function Home() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />

            <Annexx></Annexx>
            <SuperData></SuperData>


        </div>
    );

}
