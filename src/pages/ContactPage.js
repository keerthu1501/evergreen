import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact "
            title="For Any Query"
          />
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                {contact.map((item, index) => (
                  <div class="col-md-4">
                    <h6 class="section-title text-start text-primary text-uppercase">
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
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0789021634932!2d77.39025107904429!3d10.255220242478114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076556340b2d3b%3A0x6ee4c44c8193d65e!2sEvergreen%20Meadows%20Glamps!5e0!3m2!1sen!2sin!4v1722343908057!5m2!1sen!2sin" 
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
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