import React from "react";

export default function Slider() {
  return (
    <div className="reviews-embed-container my-5 py-5">
      <div className="container">
        <h2>Customer Reviews</h2>
        <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25450116'
         frameborder='0' title="customer review" width='100%' height='1000'></iframe>
      </div>
    </div>
  );
}


