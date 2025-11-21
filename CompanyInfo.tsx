import { Card } from "@/components/ui/card";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const CompanyInfo = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Criador do Site</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg leading-relaxed text-foreground/90">
              Site criado com dedicação para facilitar o acesso às melhores oportunidades de negócios 
              em Cabinda. Nossa plataforma conecta pessoas a produtos, imóveis e serviços de qualidade.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/244997711838" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    997 711 838
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-muted-foreground">Cabinda, Angola</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CompanyInfo;
