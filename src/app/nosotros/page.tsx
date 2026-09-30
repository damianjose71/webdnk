import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Nosotros",
  ...buildMetadata({
    title: "Nosotros",
    description: "TODO: definir meta description de la página Nosotros.",
    canonical: "/nosotros",
  }),
};

/**
 * Página "Nosotros".
 * TODO: estructura definitiva (equipo, historia, valores) cuando
 * exista contenido real. No se inventa información de la agencia.
 */
export default function NosotrosPage() {
  return (
    <PageContainer>
      <Heading level={1}>Nosotros</Heading>
      <p className="placeholder-note">
        TODO: definir el contenido de la página Nosotros (equipo, historia,
        forma de trabajo). Ver docs/strategy/ y docs/content/website-copy.md.
      </p>
    </PageContainer>
  );
}
