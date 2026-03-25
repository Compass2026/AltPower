import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import LocationDetail from "./pages/LocationDetail";
import ScrollToTop from "./components/layout/ScrollToTop";

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
        {/* Blog route placeholder */}
        <Route path="/blog/:slug" element={<Home />} /> 
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Layout>
  );
}

