import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-base-black text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-lime-primary">Terms and Conditions</h1>
        <p className="text-zinc-400 mb-8 italic">Effective Date: March 25, 2026</p>

        <section className="mb-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            By accessing and using this website, you agree to the following Terms and Conditions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">1. Use of Website</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            You agree to use this website for lawful purposes only.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">2. Services</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            APEX Electric provides electrical services throughout the Greater St. Louis area. All estimates and services are subject to change based on project scope and conditions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">3. SMS Terms of Service</h2>
          <p className="text-zinc-300 mb-4 font-bold">
            By providing your phone number and opting in, you consent to receive customer care SMS messages from APEX Electric.
          </p>
          <p className="text-zinc-300 mb-4 italic">These messages may include:</p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-6">
            <li>Appointment reminders</li>
            <li>Service updates</li>
            <li>Responses to customer inquiries</li>
          </ul>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Message frequency may vary</li>
            <li>Message and data rates may apply</li>
            <li>Reply STOP to opt out</li>
            <li>Reply HELP for assistance</li>
          </ul>
          <p className="mt-6 text-sm text-zinc-400 italic">
            Carriers are not liable for delayed or undelivered messages.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">4. Age Requirement</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            You must be at least 18 years old to use this website and services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">5. Limitation of Liability</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            APEX Electric is not liable for any direct or indirect damages resulting from use of this website or services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">6. Privacy Policy</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            Please review our Privacy Policy for information on how we collect and use your data.
          </p>
        </section>

        <section className="mb-12 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">Contact Information</h2>
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

export default TermsAndConditions;
