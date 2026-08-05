import { About } from "@/components/landing/about";
import { Benefits } from "@/components/landing/benefits";
import { Contact } from "@/components/landing/contact";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Roi } from "@/components/landing/roi";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Worldwide",
    serviceType: ["Веб-дизайн", "Разработка сайтов", "Landing page", "Корпоративные сайты"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: siteConfig.telegram || siteConfig.whatsapp || siteConfig.url,
    },
  };

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Process />
      <Roi />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
