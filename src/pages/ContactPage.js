
import React, { useState } from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';
import "../css/style.css";

export default function Contact() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/; // Regular expression to allow only numbers

    if (value === '' || regex.test(value)) {
      setPhone(value);
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid phone number.');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '+916369309620'; // Replace with your WhatsApp number
    const bookingMessage = `Hello! I would like to book a room at Evergreen Meadows Kodaikanal on ${selectedDate ? selectedDate.toLocaleDateString() : 'a date'}.My name is ${name}. My phone number is ${phone}. Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(bookingMessage)}`;

    // Open the WhatsApp URL
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="☎️"
            subtitle="Contact Us"
            // title="For Any Query"
          />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                {contact.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <h6 className="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0789021634932!2d77.39025107904429!3d10.255220242478114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076556340b2d3b%3A0x6ee4c44c8193d65e!2sEvergreen%20Meadows%20Glamps!5e0!3m2!1sen!2sin!4v1722343908057!5m2!1sen!2sin" 
              style={{ minHeight: "350px", border: "0" }}
              allowFullScreen="map"
              aria-hidden="false"
              title="contact"
              tabIndex="0">
              </iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={handleNameChange}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                          id="phone"
                          placeholder="Enter Your phone number"
                          value={phone}
                          onChange={handlePhoneChange}
                        />
                        {phoneError && (
                          <div className="invalid-feedback">{phoneError}</div>
                        )}
                        <label htmlFor="phone">Your Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          className="form-control"
                          id="date"
                          placeholderText="Choose booking date"
                          dateFormat="dd/MM/yyyy"
                        />
                        <label htmlFor="date"> 
                          <FaCalendarAlt className="position-absolute top-50 start-5 translate-middle-y me-3" />
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                          value={message}
                          onChange={handleMessageChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
