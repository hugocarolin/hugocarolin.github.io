import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative text-white py-20 overflow-hidden" style={{ backgroundColor: '#1e1b4b' }}>
      {/* Cercle */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#4f46e5' }}></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#7c3aed' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Ligne du haut avec point animé */}
          <div className="flex items-center gap-6">
            <div className="w-32 rounded-full" style={{ height: '2px', backgroundColor: '#818cf8' }}></div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#818cf8' }}></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: '#818cf8' }}></div>
            </div>
            <div className="w-32 rounded-full" style={{ height: '2px', backgroundColor: '#818cf8' }}></div>
          </div>

          {/* Copyright et message centrés */}
          <div className="text-center space-y-4">
            <p style={{ color: '#a5b4fc' }}>
              © 2025 · Hugo Carolin · Tous droits réservés
            </p>
            
            <div className="flex items-center justify-center gap-2" style={{ color: '#c7d2fe' }}>
              <span>Développé avec</span>
              <Heart className="w-5 h-5 animate-pulse" style={{ color: '#f87171', fill: '#f87171' }} />
            </div>
          </div>

          {/* Ligne du bas */}
          <div className="w-32 rounded-full" style={{ height: '2px', backgroundColor: '#818cf8' }}></div>
          
        </div>
      </div>
    </footer>
  );
}
