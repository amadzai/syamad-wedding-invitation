export const translations = {
  en: {
    'landing.weddingOf': 'The wedding of',
    'landing.coupleNames': 'Syafiqah & Amad!',
    'landing.clickToOpen': 'Click to open...',

    'envelope.coupleSmall': 'SYAFIQAH + AMAD',
    'envelope.saveOurDate': "YOU'RE INVITED",
    'envelope.gettingMarried': 'We’re getting married!',

    'invitation.intro':
      'Assalamualaikum and Greetings\nIn the name of Allah SWT,  \nthe Most Gracious, the Most Merciful',
    'invitation.hostsLeft': 'ZAINURIN JAAFAR',
    'invitation.hostsConnector': 'as well as',
    'invitation.hostsRight': 'ZUKARNAIN ZAKARIA\n&\nYUSLINAWATI MOHD YUSOF',
    'invitation.outro':
      'With joyful hearts and deepest gratitude,\nWe are delighted to invite you to the\nWedding reception of our beloved children',
    'invitation.coupleNames': 'SYAFIQAH & AMAD',
    'invitation.dateLong': '30th AUGUST 2026',

    'details.venue.title': 'VENUE',
    'details.venue.detail': 'Astana, Bamboo Hills',
    'details.date.title': 'DATE',
    'details.date.detail': 'August 30th, 2026',
    'details.time.title': 'TIME',
    'details.time.detail': '12:00pm - 4:00pm',
    'details.theme.title': 'THEME',
    'details.theme.detail': 'Wild Garden Elegance',
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
    'envelope.saveOurDate': 'JEMPUT HADIR',
    'envelope.gettingMarried': 'Kami akan berkahwin!',

    'invitation.intro':
      'Assalamualaikum dan Selamat Sejahtera\nDengan nama Allah SWT  yang \nMaha Pengasih lagi Maha Penyayang',
    'invitation.hostsLeft': 'ZAINURIN JAAFAR',
    'invitation.hostsConnector': 'serta',
    'invitation.hostsRight': 'ZUKARNAIN ZAKARIA\n&\nYUSLINAWATI MOHD YUSOF',
    'invitation.outro':
      'Dengan penuh rasa kesyukuran,\nKami ingin menjemput tuan/puan ke\nWalimatul urus anakanda kami',
    'invitation.coupleNames': 'SYAFIQAH & AMAD',
    'invitation.dateLong': '30 OGOS 2026',

    'details.venue.title': 'LOKASI MAJLIS',
    'details.venue.detail': 'Astana, Bamboo Hills',
    'details.date.title': 'TARIKH',
    'details.date.detail': '30 Ogos 2026',
    'details.time.title': 'MASA',
    'details.time.detail': '12:00pm - 4:00pm',
    'details.theme.title': 'TEMA',
    'details.theme.detail': 'Wild Garden Elegance',
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
