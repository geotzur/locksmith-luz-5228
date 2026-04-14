export interface ImageManifest {
  hero?: string | null;
  hero_portrait?: string | null;
  about?: string | null;
  cta_bg?: string | null;
  services?: Record<string, string | null>;
  areas?: Record<string, string | null>;
  before_after?: Record<string, { before: string; after: string }>;
  reuse_map?: Record<string, string>;
}

function firstAvailable(manifest: ImageManifest | null, ...candidates: (string | null | undefined)[]): string | null {
  for (const c of candidates) { if (c) return c; }
  if (!manifest) return null;
  const pool = [
    manifest.hero, manifest.cta_bg, manifest.about,
    ...Object.values(manifest.services ?? {}),
    ...Object.values(manifest.areas ?? {}),
  ].filter(Boolean) as string[];
  return pool[0] ?? null;
}

export function getServiceImage(slug: string, manifest: ImageManifest | null): string | null {
  return firstAvailable(manifest, manifest?.services?.[slug], manifest?.reuse_map?.[`service:${slug}`], manifest?.cta_bg, manifest?.hero);
}
export function getAreaImage(slug: string, manifest: ImageManifest | null): string | null {
  return firstAvailable(manifest, manifest?.areas?.[slug], manifest?.reuse_map?.[`area:${slug}`], manifest?.hero);
}
export function getHeroImage(manifest: ImageManifest | null): string | null {
  return firstAvailable(manifest, manifest?.hero, manifest?.cta_bg, manifest?.about);
}
export function getAboutImage(manifest: ImageManifest | null): string | null {
  return firstAvailable(manifest, manifest?.about, manifest?.hero);
}
export function getCtaImage(manifest: ImageManifest | null): string | null {
  return firstAvailable(manifest, manifest?.cta_bg, manifest?.hero, manifest?.about);
}

export const imageManifest: ImageManifest = {
  hero: '/images/hero.jpg',
  about: '/images/about-team.jpg',
  cta_bg: '/images/cta-background.jpg',
  services: {
    'automotive-locksmith': '/images/service-automotive-locksmith.jpg',
    'emergency-lockout-service': '/images/service-emergency-lockout-service.jpg',
    'rekeying-services': '/images/service-rekeying-services.jpg',
    'residential-lock-installation': '/images/service-residential-lock-installation.jpg',
  },
  areas: {
    'beverly-hills': '/images/area-beverly-hills.jpg',
    'downtown-los-angeles': '/images/area-downtown-los-angeles.jpg',
    'hollywood': '/images/area-hollywood.jpg',
  },
  before_after: {},
};
