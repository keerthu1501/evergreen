import React from 'react';



const WhatsAppButton = () => {
  const phoneNumber = '+918072508025'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to book a room at Evergreen Meadows Kodaikanal.'; // Customize your default message

  return (
    <div className="whatsapp-button">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success"
      >
        <i className="fab fa-whatsapp"></i> Chat with us
      </a>
    </div>
  );
};

export default WhatsAppButton;
