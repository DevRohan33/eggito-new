import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Privacy Policy - Eggito</title>
        <meta name="description" content="Learn how Eggito collects, uses, and protects your personal information." />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, contact details, delivery address, and payment information when you place an order.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>
            Your information is used to process orders, provide customer support, and improve our services. We may also use it to send you promotional offers if you opt-in.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Third-Party Services</h2>
          <p>
            We may share your information with trusted third parties such as payment processors and delivery services only to the extent necessary to provide our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, but this may affect website functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy periodically. The updated version will be posted on our website with the effective date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;