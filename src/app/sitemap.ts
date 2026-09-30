import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

/** Sitemap generado a partir de las rutas y los datos. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/servicios",
    "/proyectos",
    "/nosotros",
    "/contacto",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/servicios/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/proyectos/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
