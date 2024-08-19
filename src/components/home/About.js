import React from "react";


export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Evergreen Meadows Glamps</span>
              </h1>
              <p className="mb-4">
              At Evergreen Meadows Glamps, you can experience the ultimate escape in the heart of nature, 
              where breathtaking mountain views and luxurious accommodations combine to create an unforgettable glamping adventure.
              Imagine waking up to the tranquil sound of birds chirping, with the majestic mountains as your backdrop. 
              Our carefully crafted, private Glamps offer a unique blend of rugged wilderness and refined elegance, 
              with premium amenities that include comfortable bedding, premium linens. 
              Whether you're seeking a romantic getaway or a family adventure, our glamping site provides the perfect retreat. 
              So come, relax and immerse yourself in the stunning scenery, as you indulge in the very best of glamping.
              </p>
             
              <a className="btn btn-primary py-3 px-5 mt-2" href="https://www.youtube.com/@evergreenmeadowsglamps">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn" alt="about img"
                    data-wow-delay="0.1s"
                    src="https://iili.io/dRNJgN2.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn" alt="about img 2"
                    data-wow-delay="0.2s"
                    src="https://iili.io/daKDFiF.md.jpg"
                  />
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}