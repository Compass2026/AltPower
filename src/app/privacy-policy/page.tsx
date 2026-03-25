import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-base-black text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-lime-primary">Privacy Policy</h1>
        <p className="text-zinc-400 mb-8 italic">Effective Date: March 25, 2026</p>

        <section className="mb-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            AltPower LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">1. Information We Collect</h2>
          <p className="text-zinc-300 mb-4">We may collect the following personal information when you submit a form or contact us:</p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service address</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">2. How We Use Your Information</h2>
          <p className="text-zinc-300 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Respond to inquiries and provide estimates</li>
            <li>Schedule and deliver electrical services</li>
            <li>Communicate with you about your project</li>
            <li>Send updates, promotions, and service reminders if you opt in</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">3. SMS Communications</h2>
          <p className="text-zinc-300 mb-4">
            By providing your phone number, you consent to receive text messages from AltPower LLC. These messages may include appointment reminders, service updates, follow-ups, and promotional offers.
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Message frequency may vary</li>
            <li>Message and data rates may apply</li>
            <li>You can opt out at any time by replying STOP</li>
            <li>Reply HELP for assistance</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">4. Cookies and Tracking Technologies</h2>
          <p className="text-zinc-300 mb-6">
            We may use cookies, tracking pixels, and similar technologies to improve user experience and measure advertising performance. This includes tools such as Google Ads and social media advertising platforms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">5. Sharing of Information</h2>
          <p className="text-zinc-300 mb-6">
            We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share information with trusted service providers who assist in operating our business, such as CRM systems, communications platforms, and marketing service providers, solely for business purposes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">6. Data Security</h2>
          <p className="text-zinc-300 mb-6">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">7. Your Rights</h2>
          <p className="text-zinc-300 mb-6">
            You may request to access, update, or delete your personal information at any time by contacting us.
          </p>
        </section>

        <section className="mb-12 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">8. Contact Information</h2>
          <div className="text-zinc-300 space-y-1">
            <p className="font-bold text-white">AltPower LLC</p>
            <p>105 Hawks Haven Drive</p>
            <p>O'Fallon, MO 63368</p>
            <p>Email: info@altpower.co</p>
            <p>Phone: 636-497-7314</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
