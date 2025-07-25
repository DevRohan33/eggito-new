import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Terms and Conditions - Eggito</title>
        <meta name="description" content="Read Eggito's terms and conditions for using our services and purchasing our products." />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Eggito! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Orders and Payments</h2>
          <p>
            All orders are subject to availability and confirmation of the order price. We reserve the right to refuse any order.
            Payment must be made in full at the time of ordering.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Delivery</h2>
          <p>
            Delivery times are estimates only and cannot be guaranteed. We are not liable for any delay or failure to deliver within the estimated timeframe.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Returns and Refunds</h2>
          <p>
            Due to the perishable nature of our products, we do not accept returns. Refunds may be issued at our discretion for damaged or incorrect items.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            Eggito shall not be liable for any special or consequential damages that result from the use of, or the inability to use, our products.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of the new terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;