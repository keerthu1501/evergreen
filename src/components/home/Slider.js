import React from "react";
import CommonHeading from "../common/CommonHeading";

export default function Slider() {
  return (
    <div className="reviews-embed-container my-5 py-5">
      <div className="container-review">
      <CommonHeading
            heading="Reviews"
            title="Our Reviews"
            subtitle="Explore"
          />
        <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25450116'
         frameborder='0' title="customer review" width='100%' height='100%'></iframe>
      </div>
    </div>
  );
}




