import React from "react";
import CommonHeading from "../common/CommonHeading";
import { gallery } from "../data/Data";

export default function Gallery() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Our Gallery"
              title="Gallery"
              subtitle="Explore Our"
            />
          </div>
          <div className="row g-4">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="gallery-item rounded">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
