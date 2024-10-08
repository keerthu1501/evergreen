import React from "react";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/Data";
import { Link } from "react-router-dom";


export default function Rooms() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>                  
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                    <Link
                        to={`/view-details/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                      >
                        {item.yellowbtn}
                      </Link>
                      <a className="btn btn-sm btn-dark rounded py-2 px-4" href="https://wa.me/+918939316597?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20Evergreen%20Meadows%20Kodaikanal.">
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}