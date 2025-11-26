import { Card, CardContent } from "./ui/card";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
            <Send className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-700">Prenons contact</span>
          </div>
          <h2 className="text-4xl text-indigo-900 mb-4">Contactez-moi</h2>
          <p className="text-indigo-600 max-w-2xl mx-auto">
            Disponible pour vos projets et collaborations. N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-indigo-900 mb-4">Restons en contact</h3>
                  <p className="text-indigo-700 leading-relaxed">
                    Disponible pour vos projets et collaborations. 
                    Je réponds généralement sous 24h.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hugo.carolin04@gmail.com"
                    className="flex items-center text-indigo-700 hover:text-indigo-900 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span>hugo.carolin04@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+262692472745"
                    className="flex items-center text-indigo-700 hover:text-indigo-900 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span>+262 6 92 47 27 45</span>
                  </a>
                  
                  {/* <div className="flex items-center text-indigo-700">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span></span>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* Social & Availability Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-indigo-900 mb-6">Réseaux sociaux</h3>
                
                <div className="space-y-4 mb-8">
                  <a 
                    href="https://www.linkedin.com/in/hugo-carolin-627628256/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-indigo-900">LinkedIn</div>
                        <div className="text-sm text-indigo-600">Connectons-nous</div>
                      </div>
                    </div>
                    <div className="text-indigo-400 group-hover:text-indigo-600 transition-colors">→</div>
                  </a>

                  <a 
                    href="https://github.com/CarolinHugo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-4">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-indigo-900">GitHub</div>
                        <div className="text-sm text-indigo-600">Voir mes projets</div>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">→</div>
                  </a>
                </div>

                {/* Availability Status */}
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-900">Disponible pour de nouveaux projets</span>
                  </div>
                  <p className="text-sm text-emerald-700 ml-6">
                    Réponse sous 24h en moyenne
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a 
              href="mailto:hugo.carolin04@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Envoyez-moi un email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
