import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Contact } from "@/components/sections/Contact";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Contacto",
  ...buildMetadata({
    title: "Contacto",
    description: "TODO: definir meta description de la página Contacto.",
    canonical: "/contacto",
  }),
};

/** Página de contacto (formulario sin conectar a ningún servicio). */
export default function ContactoPage() {
  return (
    <PageContainer>
      <Heading level={1}>Contacto</Heading>
      <Contact />
    </PageContainer>
  );
}
