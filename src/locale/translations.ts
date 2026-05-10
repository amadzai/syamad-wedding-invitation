export const translations = {
  en: {
    'landing.weddingOf': 'The wedding of',
    'landing.coupleNames': 'Syafiqah & Amad!',
    'landing.clickToOpen': 'Click to open...',

    'envelope.coupleSmall': 'SYAFIQAH + AMAD',
    'envelope.saveOurDate': 'SAVE OUR DATE',
    'envelope.gettingMarried': 'We’re getting married!',

    'invitation.intro':
      'With the blessing of Allah we are delighted\nto invite you to the wedding reception of',
    'invitation.coupleNames': 'SYAFIQAH & AMAD',
    'invitation.dateLong': '30th AUGUST 2026',

    'details.venue.title': 'VENUE',
    'details.venue.detail': 'Astana, Bamboo Hills',
    'details.date.title': 'DATE',
    'details.date.detail': 'August 30th, 2026',
    'details.time.title': 'TIME',
    'details.time.detail': '12:00pm - 4:00pm',
    'details.theme.title': 'THEME',
    'details.theme.detail': 'Earthy Elegance',
    'details.dressCode.title': 'DRESS CODE',
    'details.dressCode.detail': 'Traditional / Formal',
    'details.parking.title': 'PARKING AT ASTANA',
    'details.parking.subtext':
      'Ticketless access with TNG / Debit /\nCredit card at RM 5 flat rate / entry',

    'map.heading': 'HOW TO GET THERE',
    'map.placeName': 'Astana at Bamboo Hills',
    'map.placeAddress':
      'Unit P13, Bamboo Hills, Off Lebuhraya DUKE, 51200 Kuala Lumpur',

    'rsvp.cta': 'RSVP HERE',
    'nav.returnToEnvelope': 'RETURN TO ENVELOPE',
  },
  ms: {
    'landing.weddingOf': 'Walimatul Urus',
    'landing.coupleNames': 'Syafiqah & Amad!',
    'landing.clickToOpen': 'Klik untuk buka...',

    'envelope.coupleSmall': 'SYAFIQAH + AMAD',
    'envelope.saveOurDate': 'SIMPAN TARIKH',
    'envelope.gettingMarried': 'Kami akan berkahwin!',

    'invitation.intro':
      'Dengan limpah kurnia Allah, kami sukacita\nmenjemput tuan/puan ke walimatul urus',
    'invitation.coupleNames': 'SYAFIQAH & AMAD',
    'invitation.dateLong': '30 OGOS 2026',

    'details.venue.title': 'LOKASI MAJLIS',
    'details.venue.detail': 'Astana, Bamboo Hills',
    'details.date.title': 'TARIKH',
    'details.date.detail': '30 Ogos 2026',
    'details.time.title': 'MASA',
    'details.time.detail': '12:00pm - 4:00pm',
    'details.theme.title': 'TEMA',
    'details.theme.detail': 'Earthy Elegance',
    'details.dressCode.title': 'KOD PAKAIAN',
    'details.dressCode.detail': 'Tradisional / Formal',
    'details.parking.title': 'PARKIR DI ASTANA',
    'details.parking.subtext':
      'Akses tanpa tiket dengan kad TNG / Debit /\nKredit pada kadar tetap RM 5 / sehari',

    'map.heading': 'ARAH KE MAJLIS',
    'map.placeName': 'Astana at Bamboo Hills',
    'map.placeAddress':
      'Unit P13, Bamboo Hills, Off Lebuhraya DUKE, 51200 Kuala Lumpur',

    'rsvp.cta': 'RSVP DI SINI',
    'nav.returnToEnvelope': 'KEMBALI KE SAMPUL',
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];
