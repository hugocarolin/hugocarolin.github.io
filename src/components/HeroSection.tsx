import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Code, Sparkles, Layers3, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const words = ["Polyvalent", "Créatif", "Passionné", "Innovant", "Full-Stack"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 2000;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Particules flottantes en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full opacity-30 ${
              i % 3 === 0 ? 'bg-indigo-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-blue-400'
            }`}></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contenu texte */}
        <div className={`space-y-8 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        }`}>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className={`text-lg text-indigo-600 transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                👋 Salut, je suis
              </div>
              <h1 className={`text-5xl lg:text-6xl text-indigo-900 leading-tight transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                Développeur
              </h1>
              <div className={`text-5xl lg:text-6xl leading-tight transform transition-all duration-700 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  {typedText}
                </span>
              </div>
            </div>
            
            <p className={`text-xl text-indigo-700 max-w-lg leading-relaxed transform transition-all duration-700 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Je transforme vos idées en <span className="text-indigo-900">solutions digitales</span> sur mesure
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-200/50 transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">Démarrer un projet</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-6 rounded-xl transition-all duration-300"
            >
              Découvrir mes services
            </Button>
          </div>
        </div>

        {/* Animation/Illustration */}
        <div className={`relative transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
        }`}>
          <div className="relative w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?auto=format&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTk2MDEzMjN8MA&ixlib=rb-4.1.0&q=75&w=550"
              alt="Modern web development workspace"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width="800"
              height="450"
              loading="eager"
            />
            
            {/* Overlay gradient animé */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-purple-900/10 group-hover:from-indigo-900/30 transition-colors duration-500"></div>
            
            {/* Éléments flottants avec animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float-slow transform hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="absolute top-16 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float-medium transform hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float-fast transform hover:scale-110 transition-transform duration-300">
                <Layers3 className="w-6 h-6 text-blue-600" />
              </div>
              
              {/* Nouveaux éléments décoratifs */}
              <div className="absolute top-1/2 right-4 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-16 right-16 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
          
          {/* Décorations améliorées */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-lg animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <button 
          onClick={scrollToServices}
          className="group flex flex-col items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <span className="text-sm mb-2 opacity-70">Découvrir</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-pulse" />
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 3.5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}