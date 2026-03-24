import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import LocationDetail from "./pages/LocationDetail";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:service" element={<ServiceDetail />} />
        <Route path="/locations/:city" element={<LocationDetail />} />
        {/* Blog route placeholder */}
        <Route path="/blog/:slug" element={<Home />} /> 
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Layout>
  );
}

