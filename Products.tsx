import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import house1 from "@/assets/house-1.jpg";
import house2 from "@/assets/house-2.jpg";
import house3 from "@/assets/house-3.jpg";
import house4 from "@/assets/house-4.jpg";
import houseT4_1 from "@/assets/house-t4-1.jpg";
import houseT4_2 from "@/assets/house-t4-2.jpg";
import houseT4_3 from "@/assets/house-t4-3.jpg";
import houseT4_4 from "@/assets/house-t4-4.jpg";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
import carI10_1 from "@/assets/car-i10-1.jpg";
import carI10_2 from "@/assets/car-i10-2.jpg";
import carI10_3 from "@/assets/car-i10-3.jpg";
import carI10_4 from "@/assets/car-i10-4.jpg";
import carI10_5 from "@/assets/car-i10-5.jpg";
import carI10_6 from "@/assets/car-i10-6.jpg";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  images: string[];
  adLink: string;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Residência T4 Mobilada",
    price: "350.000 Kz",
    image: houseT4_1,
    images: [houseT4_1, houseT4_2, houseT4_3, houseT4_4],
    adLink: "https://otieu.com/4/10203997",
    description: `😇😇😇Negócio Seguro Você Faz Aqui😇😇😇

*Arrenda-se Residência T4 Mobilada*  

*Localização:* 4 de Abril  
*Tipologia:* T4 – 4 Quartos  
• Totalmente mobilada  
• Sala equipada  
• Cozinha com eletrodomésticos  
• Casas de banho funcionais  
• Água e luz disponíveis  

*Preço:* 350.000 Kz (negociável)  
*Contacto:* 935 544 477  

*Pronta a habitar. Interessados, só ligar!* ✅`
  },
  {
    id: 2,
    title: "Apartamento T3 - Cabinda",
    price: "18 Milhões",
    image: house1,
    images: [house1, house2, house3, house4],
    adLink: "https://otieu.com/4/10203997",
    description: `😇😇😇Negócio Seguro Você Faz Aqui😇😇😇

Apartamento A Venda Na Cidade Sendo De Tipologia T3:

• Três Quartos
• Sala
• Cozinha
• WC
• Varanda
• Tudo Limpo Forrado e Mosaicado

Preço: 18 Milhões
Localização: Cabinda [Prédio Dos Solteiros]`
  },
  {
    id: 3,
    title: "Carro Toyota Hilux",
    price: "A Combinar",
    image: car1,
    images: [car1, car2, car3, car4, car5, car6],
    adLink: "https://otieu.com/4/10200192"
  },
  {
    id: 4,
    title: "Carro I10 1.2",
    price: "5 Milhões",
    image: carI10_1,
    images: [carI10_1, carI10_2, carI10_3, carI10_4, carI10_5, carI10_6],
    adLink: "https://otieu.com/4/10200192",
    description: `😇😇😇Negócio Seguro Você Faz Aqui😇😇😇

Vendo Está Viatura 

I10
1.2
Motor Seco
Caixa Automática 
Ac:Rússia
Pintura Limpa Dentro E Forra
Carro Sem Hístória
Documentos Em Ordem
Pronto Para Viajar 

Preço: 5 Milhões
Localização: Cidade De Cabinda.

Obs: Venha Com O Seu Técnico Para O Diagnóstico.

Falo Direitamente Com O Proprietário.

Cliente Gratifica O Intermediário Porque Ninguém Faz Negócio Sem Ganhar Nada.`
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    // Adiciona um estado ao histórico para permitir voltar
    window.history.pushState({ modalOpen: true }, "");
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    // Remove o estado do histórico se ainda estiver lá
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  // Escuta o evento de voltar do navegador
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (selectedProduct && !event.state?.modalOpen) {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedProduct]);

  return (
    <>
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pronto para encontrar o que procura?</h2>
            <p className="text-xl text-muted-foreground">
              Explore nossa plataforma e descubra as melhores ofertas em produtos, casas, carros e muito mais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  
                  <Button 
                    onClick={() => handleViewDetails(product)}
                    className="w-full"
                  >
                    Ver detalhes
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProduct?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {selectedProduct.images.map((img, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`${selectedProduct.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-3xl font-bold text-primary mb-4">{selectedProduct.price}</p>
                {selectedProduct.description && (
                  <div className="whitespace-pre-line text-muted-foreground">
                    {selectedProduct.description}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Products;
