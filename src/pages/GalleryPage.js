// pages/GalleryPage.js
import React from "react";
import Gallery from "../components/home/Gallery";
import Heading from "../components/common/Heading";


export default function GalleryPage() {
  return (
    <div>
      <Heading heading="Gallery" title="Home" subtitle="About" />
      <Gallery />
    </div>
  );
}
