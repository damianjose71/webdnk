import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Heading } from "@/components/ui/Heading";
import { services } from "@/data/services";
import { buildMetadata } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Servicios",
  ...buildMetadata({
    title: "Servicios",
    description:
      "TODO: definir meta description de la página de servicios de DNK.",
    canonical: "/servicios",
  }),
};

/** Listado de los cinco servicios de DNK. */
export default function ServiciosPage() {
  return (
    <PageContainer>
      <Heading level={1}>Servicios</Heading>
      <p className="placeholder-note">
        TODO: definir el texto de introducción de la página de servicios.
      </p>

      <div className="card-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </PageContainer>
  );
}
