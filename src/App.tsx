import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import ServiceDetail from "./pages/serviceDetail";
import LocationDetail from "./pages/locationDetail";
import ScrollToTop from "./components/layout/ScrollToTop";
import Contact from "./pages/contact";

import PrivacyPolicy from "./app/privacy-policy/page";
import TermsAndConditions from "./app/terms-and-conditions/page";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:service" element={<ServiceDetail />} />
        <Route path="/locations/:city" element={<LocationDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        {/* Sync trigger */}
        {/* Blog route placeholder */}
        <Route path="/blog/:slug" element={<Home />} /> 
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Layout>
  );
}

