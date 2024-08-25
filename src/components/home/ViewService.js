import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/Data";

export default function ViewService() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === parseInt(serviceId));
  const navigate = useNavigate();

  if (!service) {
    return (
      <div className="container-xxl py-5">
        <div className="container text-center">
          <h1>Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
          <button onClick={() => navigate("/services")} className="btn btn-primary">
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container-xxl py-5"
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="service-heading" style={{ marginTop: "50px" }}>{service.name} {service.icon}</h1>
          <p className="sec-title">{service.description}</p>

          {/* Display Images */}
          {service.images && service.images.length > 0 && (
            <div className="row">
              {service.images.map((image, index) => (
                <div className="col-md-4" key={index}>
                  <img
                    src={image}
                    alt={`${service.name} pic ${index + 1}`}
                    className="img-fluid rounded mb-3 service-image"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Display Menu if available */}
          {service.menu && (
            <div className="menu-section mt-5">
              <h3 className="menu-title">Menu</h3>
              {Object.keys(service.menu).map((section, index) => (
                <div
                  key={index}
                  className="menu-card wow fadeInUp"
                  data-wow-delay={`${0.2 + index * 0.1}s`}
                >
                  <h4 className="menu-section-title">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h4>
                  <div className="menu-grid">
                    {service.menu[section].map((item, index) => (
                      <div key={index} className="menu-item">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
