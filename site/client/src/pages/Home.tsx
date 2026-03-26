import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Home as HomeIcon, Key, DollarSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Design Philosophy: Modernismo Corporativo Elegante
 * - Azul profissional (#1e3a8a) para confiança e crescimento
 * - Ouro (#D4AF37) como acento premium
 * - Tipografia Playfair Display (títulos) + Inter (corpo)
 * - Layout assimétrico com transições suaves
 * - Foco em sofisticação e profissionalismo
 * - Logo integrada na navegação
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeImages, setActiveImages] = useState<Record<number, number>>({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: HomeIcon,
      title: "Vendas",
      description: "Encontre seu imóvel dos sonhos com nossa seleção premium de propriedades.",
      color: "from-emerald-600 to-emerald-700",
    },
    {
      icon: DollarSign,
      title: "Financiamentos",
      description: "Facilitamos o processo de financiamento com as melhores condições do mercado.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Key,
      title: "Aluguéis",
      description: "Imóveis para aluguel em localizações estratégicas de Luziânia.",
      color: "from-slate-600 to-slate-700",
    },
  ];

  const properties = [
    {
      id: 1,
      title: "Imóvel 1",
      images: Array.from({ length: 16 }, (_, i) => `/imoveis/imovel-1/${i + 1}.webp`),
      price: "R$ 350.000",
      bedrooms: 3,
      bathrooms: 2,
      area: "130m²",
    },
    {
      id: 2,
      title: "Imóvel 2",
      images: Array.from({ length: 18 }, (_, i) => `/imoveis/imovel-2/${i + 1}.webp`),
      price: "R$ 230.000",
      bedrooms: 3,
      bathrooms: 1,
      area: "95m²",
    },
    {
      id: 3,
      title: "Imóvel 3",
      images: Array.from({ length: 17 }, (_, i) => `/imoveis/imovel-3/${i + 1}.webp`),
      price: "R$ 450.000",
      bedrooms: 4,
      bathrooms: 3,
      area: "180m²",
    },
    {
      id: 4,
      title: "Imóvel 4",
      images: Array.from({ length: 16 }, (_, i) => `/imoveis/imovel-4/${i + 1}.webp`),
      price: "A consultar",
      bedrooms: 3,
      bathrooms: 2,
      area: "120m²",
    },
    {
      id: 5,
      title: "Imóvel 5",
      images: Array.from({ length: 11 }, (_, i) => `/imoveis/imovel-5/${i + 1}.webp`),
      price: "A consultar",
      bedrooms: 3,
      bathrooms: 2,
      area: "110m²",
    },
    {
      id: 6,
      title: "Imóvel 6",
      images: Array.from({ length: 20 }, (_, i) => `/imoveis/imovel-6/${i + 1}.webp`),
      price: "A consultar",
      bedrooms: 4,
      bathrooms: 3,
      area: "160m²",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-3 cursor-pointer">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663105393552/WxD5Cut5XBSrbyWGC56a8a/pasted_file_fSZIGI_image_2e57dc65.png" alt="Logo Ricardo & Adão" className="h-10 w-10" />
            <div className="text-2xl font-bold text-blue-900">
              Ricardo & Adão
            </div>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#servicos" className="text-gray-700 hover:text-blue-900 transition">Serviços</a>
            <a href="#imoveis" className="text-gray-700 hover:text-blue-900 transition">Imóveis</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-900 transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 bg-gradient-to-br from-white via-emerald-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Hero */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Seu Imóvel Perfeito Aguarda
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Somos especialistas em vendas, aluguéis e financiamentos imobiliários em Luziânia. Com mais de uma década de experiência, ajudamos famílias a encontrar seus sonhos.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg"
                  onClick={() => document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Imóveis
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Fale Conosco
                </Button>
              </div>
            </motion.div>

            {/* Imagem Hero */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/imoveis/imovel-1/1.webp"
                  alt="Propriedade Premium"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group"
                >
                  <Card className="p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:bg-blue-50">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="imoveis" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-gray-600 text-lg">Conheça nossas melhores ofertas</p>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {properties.map((property) => {
              const currentImg = activeImages[property.id] ?? 0;
              return (
                <motion.div
                  key={property.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={property.images[currentImg]}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-lg font-bold">
                        {property.price}
                      </div>
                      {property.images.length > 1 && (
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                          {property.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImages(prev => ({ ...prev, [property.id]: idx }))}
                              className={`w-2 h-2 rounded-full transition-all ${idx === currentImg ? "bg-white scale-125" : "bg-white/50"}`}
                            />
                          ))}
                        </div>
                      )}
                      <button
                        onClick={() => setActiveImages(prev => ({ ...prev, [property.id]: (currentImg - 1 + property.images.length) % property.images.length }))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-all"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setActiveImages(prev => ({ ...prev, [property.id]: (currentImg + 1) % property.images.length }))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-all"
                      >
                        ›
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {property.title}
                      </h3>
                      <div className="flex justify-between text-gray-600 mb-4 pb-4 border-b border-gray-200">
                        <span className="flex items-center gap-1">
                          🛏️ {property.bedrooms} quartos
                        </span>
                        <span className="flex items-center gap-1">
                          🚿 {property.bathrooms} banheiro
                        </span>
                        <span className="flex items-center gap-1">
                          📐 {property.area}
                        </span>
                      </div>
                      <Button className="w-full bg-blue-900 hover:bg-blue-950 text-white">
                        Ver Detalhes
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/imoveis/imovel-2/1.webp"
                alt="Escritório Ricardo & Adão"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Sobre Ricardo & Adão
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Somos um escritório imobiliário dedicado a oferecer as melhores soluções para seus negócios imobiliários em Luziânia, Goiás. Com profissionais experientes e comprometidos, garantimos atendimento rápido e eficiente.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Oferecemos serviços completos de vendas, aluguéis, financiamentos, contratos e despachante imobiliário. Nosso objetivo é tornar o processo imobiliário simples, transparente e seguro.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-700">Atendimento especializado e personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-700">Imóveis selecionados e verificados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-700">Suporte completo em toda a transação</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-blue-100 text-lg">
              Estamos prontos para ajudar você a encontrar o imóvel perfeito
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-blue-100 mb-2">(61) 99911-1849</p>
              <p className="text-blue-100">(61) 99684-6107</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-blue-100">Atendimento rápido</p>
              <p className="text-blue-100">pelo WhatsApp</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-blue-100">Luziânia - GO</p>
              <p className="text-blue-100">Disponível para toda região</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-12 py-6 text-lg font-bold rounded-lg transition-all hover:shadow-lg">
              Enviar Mensagem
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2026 Ricardo & Adão Escritório Imobiliário. Todos os direitos reservados.
          </p>
          <p className="text-sm text-blue-300">
            Vendas • Aluguéis • Financiamentos • Contratos • Despachante Imobiliário
          </p>
        </div>
      </footer>
    </div>
  );
}
