import { CheckCircle, MessageCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen font-poppins bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="shadow-warm">
            <CardContent className="p-12">
              <div className="mb-8">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-foreground mb-4">Order Placed Successfully!</h1>
                <p className="text-lg text-muted-foreground">
                  Thank you for choosing Eggito! Your order has been received and is being processed.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">What happens next?</h2>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">1</span>
                    </div>
                    <p className="text-muted-foreground">We'll contact you on WhatsApp within 1 hour to confirm your order details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">2</span>
                    </div>
                    <p className="text-muted-foreground">Fresh eggs will be collected from our farm and carefully packed</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">3</span>
                    </div>
                    <p className="text-muted-foreground">Your order will be delivered to your doorstep within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919641442498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with us on WhatsApp
                  </Button>
                </a>

                <Link to="/" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    <Home className="w-5 h-5 mr-2" />
                    Return to Home
                  </Button>
                </Link>
              </div>

              <div className="mt-8 p-4 bg-light-cream rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Your trust matters to us.</strong> We're committed to delivering the freshest, 
                  highest quality desi eggs directly from our farm to your table. If you have any questions 
                  or concerns, don't hesitate to reach out.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;