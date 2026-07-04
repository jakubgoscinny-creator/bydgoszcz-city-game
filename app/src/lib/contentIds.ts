// Stable ids for every reactable unit of content. These end up in the
// Supabase `reactions.content_id` column, so keep them stable across builds.

export const stopUnitId = (
  stopId: string,
  unit: 'kidFact' | 'adultFact' | 'mission' | 'bonus' | 'photo' | 'deepDive' | 'stop',
  index?: number,
) => `stop:${stopId}:${unit}${index !== undefined ? `:${index}` : ''}`

export const pauseId = (slug: string) => `pause:${slug}`

export const foodId = (slug: string) => `food:${slug}`

export const tipId = (slug: string) => `tip:${slug}`

export const garbaryId = (sectionId: string) => `garbary:${sectionId}`

export const familyPhotoId = (photoId: string) => `familyPhoto:${photoId}`

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ł/g, 'l')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
