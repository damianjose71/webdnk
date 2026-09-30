import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/Button";

/**
 * Home (/)
 * Orden de secciones: Hero → Nosotros → Servicios →
 * Proyectos destacados → Proceso → Testimonios → CTA.
 * Ver docs/architecture/sitemap.md y user-flow.md.
 */
export default function HomePage() {
  return (
    <>
      <Hero
        title="DNK"
        description="Agencia creativa integral: estrategia, diseño, comunicación visual, producción audiovisual, contenido y desarrollo web."
      >
        <Button href="/servicios">Ver servicios</Button>
        <Button href="/proyectos" variant="secondary">
          Ver proyectos
        </Button>
        <p>
          <span className="placeholder-note">
            TODO: definir el titular y la propuesta de valor de la portada.
          </span>
        </p>
      </Hero>

      <About />
      <Services />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
