import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Shield, Egg, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/contexts/CartContext';
import heroBanner1 from '@/assets/hero-banner-1.jpg';
import heroBanner2 from '@/assets/hero-banner-2.jpg';
import eggBox6 from '@/assets/egg-box-6.jpg';
import eggBox15 from '@/assets/egg-box-15.jpg';
import eggBox30 from '@/assets/egg-box-30.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroBanner1,
      title: "Naturally Healthy",
      subtitle: "Farm Fresh • Free Range Eggs",
      description: "100% natural desi eggs from free-range chickens"
    },
    {
      image: heroBanner2,
      title: "Farm Fresh",
      subtitle: "Premium Desi • Hormone Free",
      description: "Delivered fresh from our farm to your doorstep"
    }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: '6 Egg Box',
      price: 90,
      offerPrice: 70,
      image: eggBox6,
      description: 'Fresh desi free-range eggs - pack of 6'
    },
    {
      id: '2',
      name: '15 Egg Box',
      price: 225,
      offerPrice: 160,
      image: eggBox15,
      description: 'Fresh desi free-range eggs - pack of 15'
    },
    {
      id: '3',
      name: '30 Egg Box',
      price: 450,
      offerPrice: 300,
      image: eggBox30,
      description: 'Fresh desi free-range eggs - pack of 30'
    }
  ];

  const tips = [
    {
      icon: <Egg className="w-8 h-8 text-primary" />,
      title: "100% Natural Desi Eggs",
      description: "Pure breed desi chickens with no artificial hormones or chemicals"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Better Immunity Booster",
      description: "High in protein and essential nutrients for stronger immunity"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "High Protein & No Hormones",
      description: "Natural protein source without any harmful additives"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Free-Range Chickens Only",
      description: "Happy chickens roaming freely in natural environment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-primary font-semibold">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-8 text-gray-200">
              {heroSlides[currentSlide].description}
            </p>
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Best Products Section */}
      <section id="products" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Best Products</h2>
          <p className="text-lg text-muted-foreground">Fresh desi eggs delivered to your doorstep</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Eggito Eggs?</h2>
            <p className="text-lg text-muted-foreground">Health benefits that make a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{tip.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">More than just eggs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-warm transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl text-foreground mb-4">Live Chicken Sale</h3>
              <p className="text-muted-foreground mb-6">
                Buy healthy desi hens directly from our farm. Perfect for those who want to start their own egg production.
              </p>
              <a href="https://wa.me/919641442498" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Contact via WhatsApp</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-warm transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl text-foreground mb-4">Chicken on Rent</h3>
              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground">• 1 egg-laying chicken</p>
                <p className="text-muted-foreground">• 1 cage included</p>
                <p className="text-muted-foreground">• 1-month feed provided</p>
                <p className="text-2xl font-bold text-primary">₹200/month</p>
              </div>
              <a href="https://wa.me/919641442498" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Contact via WhatsApp</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;