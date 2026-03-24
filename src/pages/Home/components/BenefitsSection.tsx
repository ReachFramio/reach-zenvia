import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Consistent Brand Document",
      description: "Maintain a uniform visual identity across all footwear documents and catalogues."
    },
    {
      icon: Users,
      title: "Clear Production Documentation",
      description: "Create structured tech packs and spec sheets that reduce manufacturing errors."
    },
    {
      icon: TrendingUp,
      title: "Faster Collection Updates",
      description: "Use templates to quickly update seasonal collections and product ranges."
    },
    {
      icon: Star,
      title: "High-Impact Catalogues",
      description: "Design visually appealing catalogues and lookbooks for better product presentation."
    },
        {
      icon: Clock,
      title: "Print & Digital Ready Output",
      description: "Export documents suitable for both professional printing and digital sharing."
    },
    {
      icon: Users,
      title: "Better Team Collaboration",
      description: "Align design, development, and sales teams with clear and standardized documents."
    },
        {
      icon: TrendingUp,
      title: "Compliance-Ready Documentation",
      description: "Present technical and regulatory details clearly for safety and specialised footwear."
    },
    {
      icon: Star,
      title: "Professional Portfolio Creation",
      description: "Create high-quality portfolios and documentation for brands, designers, and students."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-600">
          Benefits of REACH Zenvia
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Layout and DTP Software for Footwear Design
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-35 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;