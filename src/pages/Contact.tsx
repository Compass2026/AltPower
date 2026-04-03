import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <div className="min-h-screen bg-base-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-lime-primary font-black uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Contact <span className="text-lime-primary">Us</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Ready to upgrade your infrastructure? Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/50 block">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-primary transition-colors text-sm"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/50 block">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-primary transition-colors text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/50 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-primary transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/50 block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-primary transition-colors text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2 pb-2">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative flex items-start pt-1">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="w-5 h-5 bg-white/5 border border-white/20 rounded-none cursor-pointer accent-lime-primary"
                  />
                </div>
                <span className="text-[12px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  By checking this box, I consent to receive automated and informational text messages from AltPower Co. at the phone number provided. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. You can unsubscribe at any time by replying STOP. View our <Link to="/privacy-policy" className="text-lime-primary hover:underline">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="text-lime-primary hover:underline">Terms & Conditions</Link>.
                </span>
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-white/50 block">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-primary transition-colors text-sm resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-primary text-black font-black uppercase tracking-widest py-4 hover:bg-white transition-colors"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
