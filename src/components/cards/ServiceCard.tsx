import Link from "next/link";
import type { Service } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./cards.module.css";

interface ServiceCardProps {
  service: Service;
}

/**
 * Tarjeta de servicio (listados de /servicios y home).
 * El contenido llega 100% desde src/data/services.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIcon} aria-hidden="true">
        <Icon name={(service.icon as IconName) ?? "shape"} size={28} />
      </div>

      <h3 className={styles.cardTitle}>
        <Link href={`/servicios/${service.slug}`} className={styles.cardLink}>
          {service.name}
        </Link>
      </h3>

      <p className={styles.cardText}>{service.shortDescription}</p>

      {service.services.length > 0 ? (
        <ul className={styles.cardList} role="list">
          {service.services.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

interface ServiceCardBadgeProps {
  service: Service;
}

/** Badge con el nombre de un servicio (usado en fichas de proyectos). */
export function ServiceBadge({ service }: ServiceCardBadgeProps) {
  return (
    <Link href={`/servicios/${service.slug}`} className={styles.badgeLink}>
      <Badge>{service.name}</Badge>
    </Link>
  );
}
