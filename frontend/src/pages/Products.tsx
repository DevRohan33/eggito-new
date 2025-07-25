import ProductCard from '@/components/ProductCard';
import { Product } from '@/contexts/CartContext';
import eggBox6 from '@/assets/egg-box-6.jpg';
import eggBox15 from '@/assets/egg-box-15.jpg';
import eggBox30 from '@/assets/egg-box-30.jpg';

const Products = () => {
  const products: Product[] = [
    {
      id: '1',
      name: '6 Egg Box',
      price: 90,
      offerPrice: 70,
      image: eggBox6,
      description: 'Fresh desi free-range eggs - pack of 6. Perfect for small families or trying our eggs for the first time.'
    },
    {
      id: '2',
      name: '15 Egg Box',
      price: 225,
      offerPrice: 160,
      image: eggBox15,
      description: 'Fresh desi free-range eggs - pack of 15. Great value for medium families and regular consumption.'
    },
    {
      id: '3',
      name: '30 Egg Box',
      price: 450,
      offerPrice: 300,
      image: eggBox30,
      description: 'Fresh desi free-range eggs - pack of 30. Best value for large families and bulk buyers.'
    },
    {
      id: '4',
      name: 'Live Desi Chicken',
      price: 800,
      offerPrice: 700,
      image: eggBox6, // Using placeholder for now
      description: 'Healthy desi hen ready for egg laying. Comes with health guarantee and basic care instructions.'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium desi free-range chicken eggs and live chickens, delivered fresh from our farm. 
            All our products are 100% natural with no hormones or artificial additives.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Eggito?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Farm Fresh Quality</h3>
              <p className="text-muted-foreground">
                Our eggs are collected daily from free-range desi chickens and delivered within 24 hours 
                to ensure maximum freshness and nutritional value.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Natural & Healthy</h3>
              <p className="text-muted-foreground">
                No hormones, no antibiotics, no artificial feed. Our chickens roam freely and eat 
                natural food, resulting in healthier, more nutritious eggs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Direct from Farm</h3>
              <p className="text-muted-foreground">
                We eliminate middlemen by delivering directly from our farm to your doorstep, 
                ensuring better prices and fresher products.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Every egg is carefully inspected before packaging. If you're not satisfied with 
                the quality, we'll replace your order at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;