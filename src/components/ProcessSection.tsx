import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "./ui/card";
import { 
  Search, 
  Lightbulb, 
  Code2, 
  TestTube, 
  Rocket, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Découverte & Analyse",
    description: "Compréhension approfondie de vos besoins, objectifs et contraintes techniques. Audit de l'existant si nécessaire.",
    icon: Search,
    color: "from-blue-500 to-indigo-600",
    highlights: ["Écoute active", "Analyse des besoins", "Définition du scope"]
  },
  {
    number: "02",
    title: "Conception & Architecture",
    description: "Design de la solution technique optimale, choix des technologies adaptées et création des maquettes/prototypes.",
    icon: Lightbulb,
    color: "from-indigo-500 to-purple-600",
    highlights: ["Architecture technique", "Choix technologiques", "Prototypage"]
  },
  {
    number: "03",
    title: "Développement",
    description: "Implémentation de la solution avec code propre, documenté et évolutif. Développement itératif avec points réguliers.",
    icon: Code2,
    color: "from-purple-500 to-pink-600",
    highlights: ["Code quality", "Best practices", "Suivi agile"]
  },
  {
    number: "04",
    title: "Tests & Optimisation",
    description: "Tests rigoureux (unitaires, d'intégration, performance). Optimisation et corrections avant mise en production.",
    icon: TestTube,
    color: "from-pink-500 to-rose-600",
    highlights: ["Tests automatisés", "Performance", "Sécurité"]
  },
  {
    number: "05",
    title: "Déploiement",
    description: "Mise en production sécurisée avec documentation complète et formation si nécessaire.",
    icon: Rocket,
    color: "from-rose-500 to-orange-600",
    highlights: ["CI/CD", "Documentation", "Formation"]
  },
  {
    number: "06",
    title: "Suivi & Maintenance",
    description: "Support post-lancement, monitoring, corrections et évolutions futures selon vos besoins.",
    icon: BarChart3,
    color: "from-orange-500 to-amber-600",
    highlights: ["Monitoring", "Support", "Évolutions"]
  }
];

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.2,
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
    <section id="case-studies" className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-700">Ma méthodologie</span>
          </div>
          <h2 className="text-4xl text-indigo-900 mb-4">Un processus éprouvé</h2>
          <p className="text-indigo-600 max-w-2xl mx-auto">
            De l'idée à la production, chaque étape est pensée pour garantir qualité, performance et pérennité
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={el => { stepRefs.current[index] = el; }}
                  className={`relative transform transition-all duration-1000 ease-out ${
                    visibleSteps[index] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-16 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Card */}
                    <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                      <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-8">
                          {/* Step number & icon */}
                          <div className="flex items-center justify-between mb-4">
                            <div className={`text-6xl bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300`}>
                              {step.number}
                            </div>
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-indigo-900 mb-3 group-hover:text-indigo-700 transition-colors">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2">
                            {step.highlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-center gap-2">
                                <CheckCircle2 className={`w-4 h-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent flex-shrink-0`} />
                                <span className="text-sm text-indigo-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot (desktop) */}
                    <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.color} shadow-lg ring-4 ring-white group-hover:scale-150 transition-transform duration-300`}></div>
                    </div>

                    {/* Connector arrow (mobile) */}
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-6">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10`}>
                          <ArrowRight className={`w-5 h-5 transform rotate-90 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-100 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-indigo-900">
                Une approche collaborative et transparente
              </p>
            </div>
            <p className="text-indigo-600 text-sm max-w-md">
              Tout au long du projet, vous êtes impliqué dans les décisions clés et informé des avancées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
