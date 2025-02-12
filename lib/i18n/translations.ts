export const translations = {
  en: {
    navigation: {
      technology: 'Technology',
      politics: 'Politics',
      sports: 'Sports',
      health: 'Health'
    },
    categories: {
      technology: 'Technology',
      politics: 'Politics',
      sports: 'Sports',
      health: 'Health'
    },
    language: 'Language',
    footer: {
      tagline: 'Your trusted source for the latest news and updates.',
      categories: 'Categories',
      company: 'Company',
      legal: 'Legal',
      about: 'About Us',
      contact: 'Contact',
      careers: 'Careers',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.'
    }
  },
  fr: {
    navigation: {
      technology: 'Technologie',
      politics: 'Politique',
      sports: 'Sports',
      health: 'Santé'
    },
    categories: {
      technology: 'Technologie',
      politics: 'Politique',
      sports: 'Sports',
      health: 'Santé'
    },
    language: 'Langue',
    footer: {
      tagline: 'Votre source de confiance pour les dernières actualités.',
      categories: 'Catégories',
      company: 'Entreprise',
      legal: 'Légal',
      about: 'À Propos',
      contact: 'Contact',
      careers: 'Carrières',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      rights: 'Tous droits réservés.'
    }
  }
} as const

export type Language = keyof typeof translations 