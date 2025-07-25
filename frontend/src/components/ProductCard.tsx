import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountPercentage = Math.round(((product.price - product.offerPrice) / product.price) * 100);

  return (
    <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 font-poppins cursor-pointer">
      <CardContent className="p-6">
        <div 
          className="relative overflow-hidden rounded-lg mb-4"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-medium">
              {discountPercentage}% OFF
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h3 
            className="font-semibold text-lg text-foreground hover:text-primary transition-colors cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">₹{product.offerPrice}</span>
            {product.price !== product.offerPrice && (
              <span className="text-muted-foreground line-through">₹{product.price}</span>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;