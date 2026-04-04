import { useState } from "react";
import { Link } from "react-router-dom";

interface ContactFormProps {
  submitButtonText?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ 
  submitButtonText = "Submit Request",
  onSuccess
}: ContactFormProps) {
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
    if (onSuccess) onSuccess();
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
              required
              checked={formData.smsConsent}
              onChange={handleChange}
              className="w-5 h-5 bg-white/5 border border-white/20 rounded-none cursor-pointer accent-lime-primary"
            />
          </div>
          <span className="text-[12px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
            I consent to receive automated marketing text messages from AltPower Co. at the phone number I provided. Message frequency may vary. Message and data rates may apply. Text HELP to (636) 497-7314 for help, or STOP to opt out. Consent is not a condition of purchase. View our <Link to="/privacy-policy" className="text-lime-primary hover:underline">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="text-lime-primary hover:underline">Terms & Conditions</Link>.
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
        {submitButtonText}
      </button>
    </form>
  );
}
