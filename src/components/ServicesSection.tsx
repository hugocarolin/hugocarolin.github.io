import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "./ui/card";
import { Monitor, ShoppingCart, Search, Palette, Wrench, Code } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Applications Web & Mobile",
    description: "Développement d'applications complètes, responsive et performantes."
  },
  {
    icon: Code,
    title: "Solutions Backend",
    description: "APIs, bases de données et architectures robustes pour vos projets."
  },
  {
    icon: Search,
    title: "Automatisation & Scripts",
    description: "Outils personnalisés pour optimiser vos processus métier."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Paiement",
    description: "Plateformes de vente en ligne avec systèmes de paiement intégrés."
  },
  {
    icon: Palette,
    title: "Design & Prototypage",
    description: "Interfaces modernes et expériences utilisateur exceptionnelles."
  },
  {
    icon: Wrench,
    title: "Conseil & Maintenance",
    description: "Accompagnement technique et évolution de vos solutions digitales."
  }
];

export function ServicesSection() {
  const [visibleServices, setVisibleServices] = useState<boolean[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleServices(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-indigo-900 mb-4">Mes Services</h2>
          <p className="text-indigo-600 max-w-2xl mx-auto">
            Du web au mobile, des APIs aux outils métier, je développe tout ce dont vous avez besoin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                ref={el => { serviceRefs.current[index] = el; }}
                className={`transform transition-all duration-700 ease-out ${
                  visibleServices[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 backdrop-blur-sm">
                  <CardContent className="p-8 text-center relative">
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-200/50 transition-all duration-500 group-hover:scale-110">
                        <IconComponent className="w-10 h-10 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" />
                      </div>
                      {/* Ombre de l'icône */}
                      <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-indigo-300 to-purple-400 rounded-2xl -z-10 transform translate-x-2 translate-y-2 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    
                    <h3 className="text-indigo-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-indigo-600 leading-relaxed group-hover:text-indigo-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Particules décoratives */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ transitionDelay: '100ms' }}></div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}