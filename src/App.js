import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import GalleryPage from "./pages/GalleryPage";
import WhatsAppButton from './components/common/WhatsappButton';
import ScrollToTop from "./components/home/ScrollToTop";
import ViewDetails from "./components/home/ViewDetails";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { Home, AboutUs, Contact, Room, Services } from "./pages/index";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";

export default function App() {
  return (
    <ErrorBoundary>
      <div>
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
      </div>
    </ErrorBoundary>
  );
}
