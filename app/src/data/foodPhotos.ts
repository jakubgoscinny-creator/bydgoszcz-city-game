// Self-hosted venue photos, keyed by food-place slug. import.meta.glob keeps
// this resilient: a venue without a sourced photo simply renders text-only.

const modules = import.meta.glob('../assets/food/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const foodPhotos: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const slug = path.split('/').pop()!.replace(/\.webp$/, '')
    return [slug, url]
  }),
)
