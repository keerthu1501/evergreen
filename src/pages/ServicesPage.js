import React from "react";
import Heading from "../components/common/Heading";
import Services from "../components/home/Services";
import Sliders from "../components/home/Slider";

export default function Service() {
  return (
    <>
      <Heading heading="Services" title="Home" subtitle="Services" />
      <Services />
      <Sliders />
    </>
  );
}