// privacy-policy.js (or any preferred filename)
"use-client"
import Link from 'next/link';
import { useEffect } from 'react';


const PrivacyPolicy = () => {



  return (
    
      <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to VModel! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>
        {/* Add more sections and content as needed */}

        {/* Example: Data Collection Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Data Collection</h2>
          <p>
            We collect information that you provide directly to us, such as when you sign up for an account, use our services, or contact us for support.
          </p>
          {/* Add more details about data collection */}
        </section>

        {/* Example: Cookies Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Cookies</h2>
          <p>
            We use cookies to enhance your experience and improve our services. By using our website, you agree to the use of cookies.
          </p>
          {/* Add more details about cookie usage */}
        </section>

        {/* Example: Third-Party Services Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">3. Third-Party Services</h2>
          <p>
            Our services may contain links to third-party websites or services that are not owned or controlled by us.
          </p>
          {/* Add more details about third-party services */}
        </section>

        {/* Example: Security Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">4. Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access or disclosure.
          </p>
          {/* Add more details about security measures */}
        </section>

        {/* Example: Changes to Privacy Policy Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">5. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons.
          </p>
          {/* Add more details about changes to the privacy policy */}
        </section>

        {/* Example: Contact Us Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at <Link href="/contact"><span className="text-blue-500">info@vmodelapp.com</span></Link>.
          </p>
          {/* Add more contact information */}
        </section>
      </div>
   
  );
};

export default PrivacyPolicy;

// Layout.js (or any preferred filename)

