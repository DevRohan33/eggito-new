import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Clock, Truck, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import eggBox6 from '@/assets/egg-box-6.jpg';
import eggBox15 from '@/assets/egg-box-15.jpg';
import eggBox30 from '@/assets/egg-box-30.jpg';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extended product data with multiple images and detailed info
  const productsData: Record<string, Product & { 
    images: string[], 
    fullDescription: string, 
    deliveryTime: string,
    features: string[],
    nutritionalInfo: string[],
    reviews: Array<{
      id: string;
      name: string;
      rating: number;
      comment: string;
      image?: string;
      date: string;
    }>
  }> = {
    '1': {
      id: '1',
      name: '6 Egg Box',
      price: 90,
      offerPrice: 70,
      image: eggBox6,
      images: [eggBox6, eggBox15, eggBox30],
      description: 'Fresh desi free-range eggs - pack of 6',
      fullDescription: 'Our 6-egg pack is perfect for small families or those trying our premium desi eggs for the first time. Each egg comes from free-range chickens that roam freely on our farm, eating natural feed without any hormones or antibiotics. These eggs are rich in protein, omega-3 fatty acids, and essential vitamins.',
      deliveryTime: 'Same day delivery within city limits',
      features: [
        '100% Natural & Hormone-free',
        'Free-range desi chickens',
        'Collected daily for freshness',
        'Rich in protein & omega-3',
        'No artificial additives'
      ],
      nutritionalInfo: [
        'Protein: 6g per egg',
        'Omega-3: 3x higher than regular eggs',
        'Vitamin D: Natural source',
        'No cholesterol concerns'
      ],
      reviews: [
        {
          id: '1',
          name: 'Priya Sharma',
          rating: 5,
          comment: 'Amazing quality! The eggs are so fresh and tasty. My kids love them.',
          image: eggBox6,
          date: '2 days ago'
        },
        {
          id: '2',
          name: 'Raj Kumar',
          rating: 5,
          comment: 'Best eggs in the city. Rich taste and very fresh.',
          date: '1 week ago'
        }
      ]
    },
    '2': {
      id: '2',
      name: '15 Egg Box',
      price: 225,
      offerPrice: 160,
      image: eggBox15,
      images: [eggBox15, eggBox6, eggBox30],
      description: 'Fresh desi free-range eggs - pack of 15',
      fullDescription: 'Our most popular 15-egg pack offers great value for medium-sized families. These premium desi eggs are perfect for daily consumption and cooking. Each egg is carefully selected and packed to ensure you get the freshest, highest quality eggs delivered to your doorstep.',
      deliveryTime: 'Same day delivery within city limits',
      features: [
        '100% Natural & Hormone-free',
        'Free-range desi chickens',
        'Collected daily for freshness',
        'Rich in protein & omega-3',
        'Best value for families'
      ],
      nutritionalInfo: [
        'Protein: 6g per egg',
        'Omega-3: 3x higher than regular eggs',
        'Vitamin D: Natural source',
        'Rich in Vitamin B12'
      ],
      reviews: [
        {
          id: '3',
          name: 'Anita Das',
          rating: 5,
          comment: 'Perfect for our family of 4. Fresh eggs every time!',
          image: eggBox15,
          date: '3 days ago'
        },
        {
          id: '4',
          name: 'Suresh Patel',
          rating: 4,
          comment: 'Good quality eggs. Fast delivery service.',
          date: '5 days ago'
        }
      ]
    },
    '3': {
      id: '3',
      name: '30 Egg Box',
      price: 450,
      offerPrice: 300,
      image: eggBox30,
      images: [eggBox30, eggBox15, eggBox6],
      description: 'Fresh desi free-range eggs - pack of 30',
      fullDescription: 'Our bulk 30-egg pack is ideal for large families, small businesses, or those who consume eggs regularly. This pack offers the best value for money while maintaining our premium quality standards. Perfect for restaurants, bakeries, or families who love cooking with fresh eggs.',
      deliveryTime: 'Same day delivery within city limits',
      features: [
        '100% Natural & Hormone-free',
        'Free-range desi chickens',
        'Collected daily for freshness',
        'Best value for bulk buyers',
        'Perfect for businesses'
      ],
      nutritionalInfo: [
        'Protein: 6g per egg',
        'Omega-3: 3x higher than regular eggs',
        'Vitamin D: Natural source',
        'Rich in essential amino acids'
      ],
      reviews: [
        {
          id: '5',
          name: 'Chef Ramesh',
          rating: 5,
          comment: 'Perfect for my restaurant. Customers love the taste!',
          image: eggBox30,
          date: '1 day ago'
        },
        {
          id: '6',
          name: 'Meera Singh',
          rating: 5,
          comment: 'Great for large family. Fresh and affordable.',
          date: '4 days ago'
        }
      ]
    }
  };

  const product = productsData[id || ''];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountPercentage = Math.round(((product.price - product.offerPrice) / product.price) * 100);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen font-poppins bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index 
                      ? 'border-primary' 
                      : 'border-muted hover:border-muted-foreground'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-primary">₹{product.offerPrice}</span>
              {product.price !== product.offerPrice && (
                <span className="text-xl text-muted-foreground line-through">₹{product.price}</span>
              )}
              {discountPercentage > 0 && (
                <Badge variant="destructive">Save ₹{product.price - product.offerPrice}</Badge>
              )}
            </div>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="font-medium">Delivery:</span>
                  <span className="text-muted-foreground">{product.deliveryTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 space-y-8">
          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Product Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* Nutritional Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Nutritional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.nutritionalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{info}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customer Reviews */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      {review.image && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={review.image}
                            alt="Review"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{review.name}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;