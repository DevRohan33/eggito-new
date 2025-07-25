import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-16 font-poppins">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Eggito</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium desi free-range chicken eggs delivered fresh from our farm to your doorstep. 
              100% natural, hormone-free, and packed with nutrition.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Products
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919641442498"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9641442498</span>
              </a>
              <a
                href="https://wa.me/919641442498"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Policies</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/shipping-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Shipping Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms and Conditions
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Eggito. All rights reserved. Delivering farm-fresh goodness since 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;