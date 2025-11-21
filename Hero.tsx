import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    window.open("https://otieu.com/4/10215868", "_blank");
    navigate("/produtos");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-90"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-12">
          <Button 
            onClick={handleViewProducts}
            variant="outline" 
            className="mb-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            Ver produtos
          </Button>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            DZM corrector <span className="text-secondary">Imobiliário</span>
          </h1>
          <p className="text-lg text-white/80 font-medium">Zacarias o mais rápido oh Executivo</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Conheça Zacarias</h2>
          
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              Zacarias é um <strong className="text-white">intermediário experiente</strong>, atuando há mais de{" "}
              <strong className="text-white">4 anos no mercado de Cabinda</strong>. Reconhecido pela sua seriedade, 
              transparência e capacidade de conectar clientes às melhores oportunidades, ele construiu uma 
              reputação sólida baseada em confiança e eficiência.
            </p>
            
            <p>
              Com profundo conhecimento do mercado local, Zacarias auxilia na mediação de negócios, 
              resolução de pendências e facilitação de processos, sempre oferecendo um atendimento 
              personalizado e rápido.
            </p>
            
            <p>
              Profissional comprometido, sempre disponível para garantir que cada cliente tenha uma 
              experiência segura, clara e objetiva.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-white">
            <a 
              href="tel:924829157" 
              className="flex items-center gap-2 text-lg font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              924 829 157
            </a>
            <span className="hidden sm:block text-white/40">•</span>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              Cabinda
            </div>
          </div>

          <Button 
            onClick={handleViewProducts}
            className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-lg"
          >
            Ver produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
