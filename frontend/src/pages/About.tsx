import { Users, Heart, Award, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const founders = [
    {
      name: "Milan Molla",
      position: "CEO",
      description: "Professional Advocate & Animal Healthcare Expert",
      expertise: "Legal compliance, animal welfare, and business strategy"
    },
    {
      name: "Rohan Parveag",
      position: "Technical & Marketing Head",
      description: "Software Engineer & Growth Strategist",
      expertise: "Technology integration, digital marketing, and customer experience"
    },
    {
      name: "Nhidul Islam Molla",
      position: "Production & Animal Expert",
      description: "Experienced in Healthcare & Poultry Science",
      expertise: "Poultry management, animal health, and production optimization"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Humble Beginnings",
      description: "Started from a small homemade chicken shed with a vision to provide pure, natural eggs to our community."
    },
    {
      year: "2025",
      title: "Rapid Growth",
      description: "Expanded our operations and now produce 100+ fresh eggs per day with maintaining quality standards."
    },
    {
      year: "2025",
      title: "Commitment to Purity",
      description: "Dedicated to pure desi breed chickens and completely hormone-free egg production methods."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Natural & Pure",
      description: "We believe in providing 100% natural products without any artificial additives or hormones."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description: "Our focus is on building trust with our community through quality products and transparent practices."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "Every egg meets our high standards of freshness, nutrition, and taste before reaching your table."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Fresh Delivery",
      description: "Farm-to-doorstep delivery ensures you get the freshest eggs within 24 hours of collection."
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Eggito</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Born from a passion for natural, healthy living, Eggito is committed to bringing you 
            the finest desi free-range chicken eggs directly from our farm to your family's table.
          </p>
        </div>

        {/* Founders Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-2xl">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-3">{founder.position}</p>
                  <p className="text-muted-foreground mb-4">{founder.description}</p>
                  <p className="text-sm text-muted-foreground italic">{founder.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To revolutionize the way families access fresh, natural eggs by providing premium desi 
            free-range chicken eggs that are hormone-free, antibiotic-free, and packed with nutrition. 
            We're committed to sustainable farming practices, animal welfare, and building lasting 
            relationships with our customers through transparency, quality, and trust.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;