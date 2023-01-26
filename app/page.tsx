"use client";

import "./HomePage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Oswald } from "@next/font/google";

const FontOswald = Oswald({
  weight: "700",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1} factor={1} style={{}}>
        <div className="h-full"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1} factor={1} style={{}}>
        <div className="h-full"></div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        sticky={{ start: 1, end: 3 }}
        speed={1}
        style={{
          display: "grid",
          gridColumn: "span 3",
          // alignContent: "center",
        }}
      >
        <div className="grid-cols-2 p-4lg:p-16">
          <span className={"text-6xl lg:text-9xl " + FontOswald.className}>
            WELCOME TO
          </span>
        </div>
      </ParallaxLayer>

      {/* <ParallaxLayer offset={1.5} speed={2.5} style={{}}>
        <div className="bg-primary">Landing Page For Eric & TECH</div>
      </ParallaxLayer> */}
    </Parallax>
  );
}
