import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";

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
              Evergreen Meadows Glamps Kodaikanal is a great choice for travellers looking for a 3star hotel
              in Kodaikanal. This Hotel stands out as one of the highly recommended hotel in Kodaikanal. 
              Hotel is rated out of 5, which is considered as very good.
              From all the 3 Star hotels in Kodaikanal, this property is very much popular among the tourists. 
              A smooth check-in/check-out process, flexible policies and friendly management garner great customer
              satisfaction for this property. The Hotel has standard Check-In time as 02:00 PM and Check-Out time 
              as 12:00 PM. It is a couple-friendly property, hence it is absolutely safe for unmarried couples to 
              stay here.
              You can find numerous hotels in Kodaikanal under different categories and this property is one 
              the best hotel under its category.
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="https://iili.io/dRqTtSI.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="https://iili.io/dRqTtSI.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="https://iili.io/dRqTtSI.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="https://iili.io/dRqTtSI.jpg"
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