import { Footer } from "./Footer";
import { Header } from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Estructura global de la página:
 * skip-link (teclado) → header → main → footer.
 *
 * Se monta una sola vez en src/app/layout.tsx.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
