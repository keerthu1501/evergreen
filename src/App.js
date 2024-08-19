import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  // PageNotFound,
  Room,
  Services,
  // Team,
} from "./pages/index";
import Footer from "./components/common/Footer";
import GalleryPage from "./pages/GalleryPage";
import WhatsAppButton from './components/common/WhatsappButton';
import ScrollToTop from "./components/home/ScrollToTop"; // Import ScrollToTop
import ViewDetails from "./components/home/ViewDetails";



export default function App() {
  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            {/* <Route path="/team" element={<Team />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/*" element={<PageNotFound />} /> */}
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/view-details/:roomName" element={<ViewDetails />} />

            
          </Routes>
          <WhatsAppButton />
          <Footer />
        </Router>
      </div>
    </>
  );
}