import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-base-black text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-lime-primary">Terms and Conditions</h1>
        <p className="text-zinc-400 mb-8 italic">Effective Date: March 25, 2026</p>

        <section className="mb-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            By accessing and using this website, you agree to be bound by the following Terms and Conditions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">1. Use of Website</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            You agree to use this website for lawful purposes only and not to engage in any activity that may harm the website or its users.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">2. Services</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            AltPower LLC provides electrical services throughout the Greater St. Louis Area. All service estimates are subject to change based on project scope, material availability, code requirements, and site conditions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">3. SMS Terms of Service</h2>
          <p className="text-zinc-300 mb-4">
            By providing your phone number, you consent to receive SMS communications from AltPower LLC.
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Message frequency may vary</li>
            <li>Message and data rates may apply</li>
            <li>Reply STOP to opt out</li>
            <li>Reply HELP for assistance</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">4. Limitation of Liability</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            AltPower LLC is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website or reliance on any information provided on this website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">5. Intellectual Property</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            All content on this website, including text, graphics, logos, branding, and design elements, is the property of AltPower LLC and may not be copied, reproduced, or used without permission.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">6. Changes to Terms</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            We reserve the right to update these Terms and Conditions at any time without prior notice. Continued use of the website constitutes acceptance of any revised terms.
          </p>
        </section>

        <section className="mb-12 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-display font-bold mb-4 text-white">7. Contact Information</h2>
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

export default TermsAndConditions;
