import { Helmet } from 'react-helmet-async';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Shipping Policy - Eggito</title>
        <meta name="description" content="Learn about Eggito's shipping procedures, delivery areas, and timelines." />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      
      <div className="prose prose-sm max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Delivery Areas</h2>
          <p>
            We currently deliver to select areas within Howrah , Kolkata , Midnapur. Please check your postal code during checkout to confirm delivery availability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Delivery Schedule</h2>
          <p>
            Orders placed before [cut-off time] will be delivered the next day. We deliver [days of the week] between [time range].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Shipping Charges</h2>
          <p>
            Delivery is free for orders above [amount]. Orders below this amount incur a delivery fee of [amount].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Order Tracking</h2>
          <p>
            You will receive SMS/email notifications with order confirmation and delivery updates, including the estimated delivery time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Handling of Products</h2>
          <p>
            Our eggs are carefully packed in insulated boxes to maintain freshness during transit. Please inspect your delivery upon arrival.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Failed Deliveries</h2>
          <p>
            If delivery fails due to incorrect address or recipient unavailability, we will attempt redelivery once. Additional attempts may incur extra charges.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;