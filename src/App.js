import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppButton from './components/common/WhatsappButton';
import ScrollToTop from "./components/home/ScrollToTop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Home from "./components/home/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactPage";
import Room from "./pages/RoomPage";
import Services from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ViewDetails from "./components/home/ViewDetails";
import ViewService from "./components/home/ViewService";

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename="/evergreen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/view-details/:roomName" element={<ViewDetails />} />
            <Route path="/service/:serviceId" element={<ViewService />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </Router>
      </ErrorBoundary>
    </>
  );
}
