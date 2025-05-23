import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Naziv kategorije',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Redni broj',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Slika proizvoda',
      relationTo: 'media', // This must match your media collection slug
    },
    {
      name: 'products',
      type: 'relationship',
      label: 'Povezani proizvodi',
      relationTo: 'products', // Must match EXACTLY your products collection slug
      hasMany: true,
      admin: {
        description: 'Select products that belong to this category',
      },
    },
  ],
}
