import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";

/** Página 404. */
export default function NotFound() {
  return (
    <PageContainer>
      <Heading level={1}>Página no encontrada</Heading>
      <p>La página que buscas no existe o ha cambiado de dirección.</p>
      <p>
        <Link href="/">Volver al inicio</Link>
      </p>
    </PageContainer>
  );
}
