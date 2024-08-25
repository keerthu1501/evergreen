import React, { Suspense, lazy } from "react";
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

const Home = lazy(() => import("./components/home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/ContactPage"));
const Room = lazy(() => import("./pages/RoomPage"));
const Services = lazy(() => import("./pages/ServicesPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ViewDetails = lazy(() => import("./components/home/ViewDetails"));

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename="/evergreen">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rooms" element={<Room />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/view-details/:roomName" element={<ViewDetails />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </Router>
      </ErrorBoundary>
    </>
  );
}
