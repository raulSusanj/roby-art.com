import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Naziv proizvoda',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Redni broj',
    },
    {
      name: 'categories',
      type: 'relationship',
      label: 'Kategorija',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Slika proizvoda',
      relationTo: 'media', // This must match your media collection slug
      required: true,
    },
    {
      name: 'description',
      label: 'Opis',
      type: 'text',
    },
    {
      name: 'additionalPreviewText',
      label: 'Dodatne oznake (npr. dimenzije, motiv, boja)',
      type: 'text',
    },
  ],
}
