import React from "react";
import { useParams } from "react-router-dom";
import { roomItems } from "../data/Data";
import CommonHeading from "../common/CommonHeading";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import your icons

export default function ViewDetails() {
  const { roomName } = useParams();
  
  const room = roomItems.find(
    (item) => item.name.replace(/\s+/g, '-').toLowerCase() === roomName
  );

  if (!room) {
    return <p>Room not found</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container-xxl py-5">
      <div className="container" style={{ marginTop: "50px" }}>
        <CommonHeading
          heading={room.name}
          title={room.name}
          subtitle="Detailed Information of "
        />
        <div className="row">
          <div className="col-lg-6">
            <Slider {...settings}>
              {room.images.map((img, index) => (
                <div key={index}>
                  <img
                    className="img-fluid rounded"
                    src={img}
                    alt={`${room.name} ${index}`}
                  />
                </div>
              ))}

            </Slider>
          </div>
          <div className="col-lg-6">
            <h2>{room.name}</h2>
            <p><strong>Price:</strong> {room.price}</p>
            <p><strong>Description:</strong> {room.description}</p>
            <p><strong>Room Type:</strong> {room.roomType}</p>
            <p><strong>Amenities:</strong> {room.amenities}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};
