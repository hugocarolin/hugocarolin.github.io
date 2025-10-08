import { useState, useEffect } from "react";
import { Code2, Smartphone, Database, Palette, Wrench, Zap } from 'lucide-react';

const skills = [
  { name: "Frontend", icon: Code2, level: 95, color: "from-blue-500 to-indigo-600" },
  { name: "Backend", icon: Database, level: 90, color: "from-indigo-500 to-purple-600" },
  { name: "Mobile", icon: Smartphone, level: 85, color: "from-purple-500 to-pink-600" },
  { name: "Design", icon: Palette, level: 80, color: "from-pink-500 to-rose-600" },
  { name: "DevOps", icon: Wrench, level: 75, color: "from-emerald-500 to-teal-600" },
  { name: "Performance", icon: Zap, level: 88, color: "from-yellow-500 to-orange-600" }
];

const stats = [
  { label: "Années d'expérience", value: "4+", suffix: "+" },
  { label: "Projets réalisés", value: "50", suffix: "+" },
  { label: "Technologies maîtrisées", value: "20", suffix: "+" },
  { label: "Clients satisfaits", value: "100", suffix: "%" }
];

export function AboutSection() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const [animatedStats, setAnimatedStats] = useState<number[]>([]);

  useEffect(() => {
    const timers = skills.map((_, index) => 
      setTimeout(() => {
        setVisibleSkills(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 200)
    );

    const statTimers = stats.map((stat, index) => 
      setTimeout(() => {
        const targetValue = parseInt(stat.value);
        let currentValue = 0;
        const increment = targetValue / 30;
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
          }
          
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.round(currentValue);
            return newStats;
          });
        }, 50);
      }, 1000 + index * 100)
    );

    return () => {
      timers.forEach(clearTimeout);
      statTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50/50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualisation des compétences */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Cercle central */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 shadow-2xl"></div>
                <div className="absolute inset-4 rounded-full bg-white/80 backdrop-blur-sm shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <div className="text-lg text-indigo-900">Full-Stack</div>
                    <div className="text-sm text-indigo-600">Developer</div>
                  </div>
                </div>

                {/* SVG pour les lignes de connexion */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 320 320"
                >
                  {skills.map((skill, index) => {
                    const angle = (index * 60) - 90;
                    const centerX = 160; // Centre du SVG (320/2)
                    const centerY = 160; // Centre du SVG (320/2)
                    const innerRadius = 72; // Rayon du cercle intérieur (288px / 4)
                    const outerRadius = 140; // Rayon des compétences
                    
                    const startX = centerX + Math.cos((angle * Math.PI) / 180) * innerRadius;
                    const startY = centerY + Math.sin((angle * Math.PI) / 180) * innerRadius;
                    const endX = centerX + Math.cos((angle * Math.PI) / 180) * outerRadius;
                    const endY = centerY + Math.sin((angle * Math.PI) / 180) * outerRadius;

                    return (
                      <line
                        key={`line-${index}`}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="rgb(165 180 252)"
                        strokeWidth="1"
                        opacity={visibleSkills[index] ? "0.3" : "0"}
                        className="transition-opacity duration-1000"
                        style={{
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Compétences en orbite */}
                {skills.map((skill, index) => {
                  const angle = (index * 60) - 90; // 6 compétences réparties sur 360°
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const IconComponent = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className={`absolute w-16 h-16 transform transition-all duration-1000 ease-out ${
                        visibleSkills[index] 
                          ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
                          : 'translate-x-0 translate-y-0 opacity-0 scale-0'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className={`w-full h-full rounded-xl bg-gradient-to-br ${skill.color} shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Nom de la compétence */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-indigo-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Particules flottantes */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-40 animate-float"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl text-indigo-900 mb-6">À propos de moi</h2>
              <div className="space-y-4 text-indigo-700 leading-relaxed">
                <p>
                  Je suis un développeur polyvalent passionné par la création de solutions digitales 
                  innovantes. Du web au mobile, des APIs aux interfaces utilisateur, je transforme 
                  vos idées en réalité technique.
                </p>
                <p>
                  Mon expertise couvre l'ensemble de la chaîne de développement : conception d'architecture, 
                  développement frontend et backend, optimisation des performances et déploiement. 
                  J'accompagne mes clients de l'idée initiale jusqu'à la mise en production.
                </p>
                <p>
                  Curieux et toujours en veille technologique, j'adapte constamment mes compétences 
                  aux dernières innovations pour offrir des solutions modernes et performantes.
                </p>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-indigo-100">
                  <div className="text-2xl text-indigo-900 mb-1">
                    {animatedStats[index] || 0}{stat.suffix}
                  </div>
                  <div className="text-sm text-indigo-600">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}