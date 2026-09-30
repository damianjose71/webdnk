import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/config/site";
import { buildMetadata } from "@/utils/seo";
import "@/styles/globals.css";

/**
 * Layout global (raíz).
 * - html lang / body: accesibilidad y SEO base.
 * - Metadata por defecto de todo el sitio; cada página puede
 *   sobreescribirla con generateMetadata (ver src/utils/seo.ts).
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Agencia creativa`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  ...buildMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
