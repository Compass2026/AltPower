import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-base-black text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-lime-primary">Privacy Policy</h1>
        <p className="text-zinc-400 mb-8 italic">Effective Date: March 25, 2026</p>

        <section className="mb-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            APEX Electric ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">1. Information We Collect</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            We may collect personal information including your name, phone number, email address, and any information you submit through our website forms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">2. How We Use Your Information</h2>
          <p className="text-zinc-300 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Respond to inquiries</li>
            <li>Provide customer support</li>
            <li>Send service-related communications</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">3. SMS Communications</h2>
          <p className="text-zinc-300 mb-4">
            If you provide your phone number and opt in, you may receive SMS messages from APEX Electric regarding customer service, appointment reminders, service updates, and responses to inquiries.
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Message frequency may vary</li>
            <li>Message and data rates may apply</li>
            <li>Reply STOP to opt out</li>
            <li>Reply HELP for assistance</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">4. No Sharing of SMS Data (CRITICAL)</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            We do not sell, rent, or share your personal information, including phone numbers and SMS consent, with third parties for marketing purposes. SMS opt-in data and consent will not be shared with any third parties.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">5. Cookies and Tracking</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            We may use cookies and similar tracking technologies to improve user experience and analyze website traffic.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">6. Data Security</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            We implement appropriate security measures to protect your personal information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">7. Your Rights</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            You may opt out of communications at any time by replying STOP to SMS messages or contacting us directly.
          </p>
        </section>

        <section className="mb-12 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">8. Contact Information</h2>
          <div className="text-zinc-300 space-y-1">
            <p className="font-bold text-white">APEX Electric</p>
            <p>Phone: (660) 342-5886</p>
            <p>Email: info@apexelectric.pro</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
