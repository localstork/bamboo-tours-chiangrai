/* ==========================================================================
   BAMBOO TOURS CHIANG RAI — SITE DATA
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE TOURS, PRICES OR CONTACT.
   Every page reads from here. Change a price once and it updates everywhere.
   ไฟล์นี้คือไฟล์เดียวที่ต้องแก้เวลาจะเปลี่ยนราคา/โปรแกรมทัวร์/ข้อมูลติดต่อ
   ========================================================================== */

const SITE = {
  name: "Bamboo Tours Chiang Rai",
  tagline: "Chiang Rai Tours, Trekking & Local Experiences",
  phone: "+66 96 587 1859",
  phoneRaw: "+66965871859",
  whatsapp: "66965871859",
  email: "bambootourchiangraith@gmail.com",
  cookingEmail: "lannahomecookingclass@gmail.com",
  cookingPhones: ["+66 95 984 8478", "+66 81 090 1805"],
  address: "70 Moo 18, Sanpanard Rd., Wiang Muang, Chiang Rai, Thailand",
  tripadvisor:
    "https://www.tripadvisor.com/Attraction_Review-g297920-d13090022-Reviews-Bamboo_Tours-Chiang_Rai_Chiang_Rai_Province.html",
  facebook: "https://www.facebook.com/bambootrekkingtour",
  instagram: "https://www.instagram.com/bambootourschiangrai",
  tiktok: "https://www.tiktok.com/@bambootours_chiangrai",
  googleReviews: "https://www.google.com/search?q=bamboo+tours+chiang+rai",
};

/* --------------------------------------------------------------------------
   TREKKING TOURS  (T1 – T8)
   price rows: { rate: number (THB per person), who: "text" }
   -------------------------------------------------------------------------- */
const TREKKING = [
  {
    code: "T1",
    title: "1 Day Trekking & Bamboo Raft",
    badge: "Signature",
    duration: "1 Day",
    walk: "Walk 4–5 hours",
    start: "09:00 AM",
    image: "assets/images/tours/t1-bamboo-raft.jpg",
    summary:
      "The only trek of its kind in Chiang Rai — waterfall, jungle trails, rice fields and a bamboo raft ride to finish the day.",
    itinerary: [
      "Pick-up 09:00 AM from your hotel.",
      "A 30-minute drive to a beautiful large waterfall, followed by a short nature walk.",
      "Continue to a local Thai village for a delicious lunch.",
      "Afternoon: a 4–5 hour trek through jungle trails, rice fields, pineapple and fruit plantations, and rubber trees.",
      "Relax and cool down with a bamboo raft ride at the dam before returning to your hotel.",
    ],
    includes: ["Transportation", "Tour guide", "Lunch", "Drinking water"],
    prices: [
      { rate: 1900, who: "2–4 persons" },
      { rate: 1500, who: "5 persons up" },
      { rate: 2700, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T2",
    title: "1 Day Trekking — Walk Only",
    badge: "Most popular",
    duration: "1 Day",
    walk: "Trekking 5–6 hours",
    start: "09:00 AM",
    image: "assets/images/tours/t2-walk-hills.jpg",
    summary:
      "Bamboo forests, hill tribe villages, a hillside tea plantation, a waterfall and a natural hot spring to finish.",
    itinerary: [
      "Pick-up 09:00 AM from your hotel.",
      "A 40-minute drive to the starting point, then trek through bamboo forests and traditional hill tribe villages surrounded by mountain scenery.",
      "At midday, join a local family to prepare and enjoy a traditional lunch together.",
      "Afternoon: continue trekking to another hill tribe village, walk through a hillside tea plantation and discover a beautiful waterfall.",
      "End with a relaxing soak in a natural hot spring before returning to your hotel.",
    ],
    includes: ["Transportation", "Tour guide", "Lunch", "Drinking water"],
    prices: [
      { rate: 1800, who: "2–4 persons" },
      { rate: 1500, who: "5 persons up" },
      { rate: 2700, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T3",
    title: "1 Day Trekking Adventure by Truck",
    duration: "1 Day",
    walk: "Temples, river & nature",
    start: "09:00 AM",
    image: "assets/images/tours/t3-hilltribe-village.jpg",
    summary:
      "Temples, a long-tail boat on the Mae Kok River, hill tribe villages, a tea plantation, a waterfall and a hot spring — all in one day.",
    itinerary: [
      "Pick-up 09:00 AM from your hotel.",
      "Begin at Wat Huai Pla Kang — a beautiful pagoda and giant Buddha with wonderful views over Chiang Rai.",
      "A scenic long-tail boat trip along the Mae Kok River to an elephant camp (optional elephant ride to a Karen village at additional cost).",
      "Local Thai lunch, then explore hill tribe villages, a peaceful tea plantation and Huai Kaew Waterfall.",
      "End the day relaxing in a natural hot spring before returning to your hotel.",
    ],
    includes: [
      "Transportation",
      "Tour guide (TAT license)",
      "Lunch",
      "Drinking water",
    ],
    prices: [
      { rate: 2500, who: "2 persons" },
      { rate: 2200, who: "3–4 persons" },
      { rate: 1600, who: "5 persons up" },
      { rate: 3000, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T4",
    title: "1 Day Trekking & Boat Trip",
    duration: "1 Day",
    walk: "Easy trek 2–3 hours",
    start: "09:00 AM",
    image: "assets/images/tours/t4-waterfall-pool.jpg",
    summary:
      "A gentle day: long-tail boat to a Karen village, an easy jungle trek, tea plantation, waterfall and hot spring.",
    itinerary: [
      "Pick-up 09:00 AM from your hotel.",
      "A short 10-minute drive to the Chiang Rai pier, then a scenic long-tail boat ride along the Mae Kok River to a traditional Karen village.",
      "Explore the village, then enjoy a delicious local Thai lunch.",
      "Head into the jungle for an easy 2–3 hour trek: tea plantation, hill tribe villages and a refreshing waterfall.",
      "End with a relaxing soak in a natural hot spring before returning to your hotel.",
    ],
    includes: [
      "Transportation",
      "Boat trip",
      "Tour guide (TAT license)",
      "Lunch",
      "Drinking water",
    ],
    prices: [
      { rate: 2500, who: "2 persons" },
      { rate: 2200, who: "3–4 persons" },
      { rate: 1600, who: "5 persons up" },
      { rate: 3000, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T5",
    title: "2 Days 1 Night Trekking & Bamboo Raft",
    badge: "Signature",
    duration: "2 Days 1 Night",
    walk: "Farm stay included",
    start: "09:00 AM",
    image: "assets/images/tours/t5-bamboo-cooking.jpg",
    summary:
      "Waterfall, jungle trek and an authentic farm stay — then an Akha village, bamboo cooking and bamboo rafting on day two.",
    itinerary: [
      "DAY 1 — Trekking & Authentic Farm Stay. Pick-up 09:00 AM. Visit a beautiful large waterfall, then a homemade lunch in a local Thai village. In the afternoon, trek 4–5 hours through jungle, rice fields, pineapple and fruit farms, and rubber plantations. End the day with an authentic farm stay.",
      "DAY 2 — Akha Village & Bamboo Adventure. Breakfast at the farm stay, then trek about 3 hours through the jungle to a traditional Akha hill tribe village with beautiful mountain views. Enjoy a bamboo cooking experience for lunch, then swimming and bamboo rafting at the dam before transferring back to your hotel.",
    ],
    includes: [
      "Transportation",
      "Accommodation",
      "Tour guide (TAT license)",
      "4 meals",
      "Drinking water",
      "Bamboo raft",
    ],
    prices: [
      { rate: 3500, who: "2–4 persons" },
      { rate: 3000, who: "5 persons up" },
      { rate: 5500, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T6",
    title: "2 Days 1 Night Trekking — Walk Only",
    duration: "2 Days 1 Night",
    walk: "Trekking 4–6 hours",
    start: "09:00 AM",
    image: "assets/images/tours/t6-homestay-dinner.jpg",
    summary:
      "A homestay night in a Lisu village, cooking dinner with a local family, then tea plantation, waterfall and hot spring.",
    itinerary: [
      "DAY 1 — Departure 09:00 AM. Trek through bamboo forests, rice fields and traditional hill tribe villages. Lunch at a local village, then continue to a Lisu village where you spend the night in a traditional homestay. In the evening, join a local family to prepare and cook dinner together, then take a relaxing walk through the village.",
      "DAY 2 — After breakfast, explore a tea plantation, waterfall and local villages. Enjoy a bamboo cooking experience for lunch, then visit Akha and Lahu villages before relaxing in a natural hot spring and returning to your hotel. Trekking: approximately 4–6 hours.",
    ],
    includes: [
      "Transportation",
      "Tour guide",
      "Drinking water",
      "Accommodation at hill tribe village",
      "4 meals",
    ],
    prices: [
      { rate: 3500, who: "2–4 persons" },
      { rate: 3000, who: "5 persons up" },
      { rate: 5000, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T7",
    title: "2 Days 1 Night Trekking & Activity",
    duration: "2 Days 1 Night",
    walk: "Trekking 4–5 hrs / 3 hrs",
    start: "09:00 AM",
    image: "assets/images/tours/t7-raft-lake.jpg",
    summary:
      "Waterfall and jungle trek with a farm stay, then traditional net fishing, bamboo cooking and bamboo rafting.",
    itinerary: [
      "DAY 1 — Waterfall, Jungle Trek & Farm Stay. Pick-up 09:00 AM. Visit a scenic waterfall, enjoy local lunch in a Thai village, then trek through rice fields, pineapple and rubber plantations, fruit farms and jungle trails. End the day with an authentic farm-stay experience. Trekking: approximately 4–5 hours.",
      "DAY 2 — Local Life & Bamboo Adventure. After breakfast, experience traditional net fishing and bamboo cooking with local villagers. In the afternoon, swim and enjoy an exciting bamboo rafting adventure at the dam before returning to your hotel. Trekking: approximately 3 hours.",
    ],
    includes: [
      "Transportation",
      "Tour guide",
      "4 meals",
      "Drinking water",
      "Accommodation",
      "Bamboo raft",
    ],
    prices: [
      { rate: 3500, who: "2–4 persons" },
      { rate: 3000, who: "5 persons up" },
      { rate: 5500, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "T8",
    title: "2 Days 1 Night Trekking & Boat Trip",
    duration: "2 Days 1 Night",
    walk: "Boat, homestay & hot spring",
    start: "09:00 AM",
    image: "assets/images/tours/t8-village-guests.jpg",
    summary:
      "Long-tail boat to a Karen village and elephant camp, a hill tribe homestay, then tea plantation, waterfall and hot spring.",
    itinerary: [
      "DAY 1 — Pick-up 09:00 AM. A scenic long-tail boat ride along the Mae Kok River to a Karen village and elephant camp (optional elephant ride at extra cost). Local Thai lunch, then trek through the jungle to a hill tribe village. Authentic homestay where you cook and enjoy dinner with your hosts, followed by an evening village walk.",
      "DAY 2 — After breakfast, continue trekking through mountain scenery, visiting a tea plantation and waterfall. Enjoy a bamboo cooking experience and local lunch, then continue to Akha and Lahu villages before relaxing in a natural hot spring and returning to your hotel.",
    ],
    includes: [
      "Transportation",
      "Boat trip",
      "Tour guide (TAT license)",
      "Drinking water",
      "4 meals",
      "Accommodation",
    ],
    prices: [
      { rate: 3500, who: "2–4 persons" },
      { rate: 3000, who: "5 persons up" },
      { rate: 5500, who: "Special private" },
    ],
    min: "Minimum 2 persons",
  },
];

/* --------------------------------------------------------------------------
   SIGHTSEEING TOURS  (S1 – S11)
   -------------------------------------------------------------------------- */
const STANDARD_SIGHTSEEING_PRICES = [
  { rate: 2500, who: "2–3 persons" },
  { rate: 2000, who: "4–5 persons" },
  { rate: 1700, who: "6 persons up" },
];
const STANDARD_SIGHTSEEING_INCLUDES = [
  "Transportation",
  "English-speaking guide (TAT license)",
  "Lunch (local restaurant)",
  "Insurance",
];

const SIGHTSEEING = [
  {
    code: "S1",
    title: "1 Day Sightseeing — The Grand Tour",
    badge: "Most popular",
    duration: "1 Day",
    start: "08:30 AM",
    image: "assets/images/tours/s1-white-temple.jpg",
    visits:
      "White Temple · Blue Temple · Black House · Long Neck Village · Choui Fong Tea Plantation · Golden Triangle · Opium Museum",
    summary:
      "The complete Chiang Rai highlights day — all three famous temples plus tea plantation and the Golden Triangle.",
    itinerary: [
      "White Temple — the unique temple design by Thailand's most famous national artist. Please wear long pants below the knee. (Entrance 200 THB)",
      "Blue Temple — designed by a local artist who worked as a sculpture maker at the White Temple.",
      "Black House — a beautiful wooden house in black by another famous Thai artist, built to keep his collection. (Entrance 80 THB)",
      "Long Neck Village — you will also see Akha, Yao and Kayaw hill tribes nearby. Optional: pay extra ticket, or we can skip to the next place. (Entrance 300 THB)",
      "Choui Fong Tea Plantation — scenic views and tea tasting.",
      "Golden Triangle — the border of 3 countries: Thailand, Laos and Myanmar. A visit to the Opium Museum is possible. (Entrance 50 THB)",
    ],
    includes: STANDARD_SIGHTSEEING_INCLUDES,
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S2",
    title: "1 Day Doi Mae Salong & Doi Tung",
    duration: "1 Day",
    start: "09:00 AM",
    image: "assets/images/tours/s2-tea-plantation.jpg",
    visits: "Doi Mae Salong · Doi Tung",
    summary:
      "A mountain day for tea lovers and photographers — tea plantations, cool weather and the Mae Fah Luang Garden.",
    itinerary: [
      "Doi Mae Salong — the charm of Chiang Rai's mountains: beautiful tea plantations, cool weather, local hill tribe culture and panoramic views. Taste fresh Oolong tea and visit a local tea plantation.",
      "Doi Tung — the beautiful Mae Fah Luang Garden and Doi Tung Royal Villa, surrounded by spectacular mountain scenery. Peaceful gardens, cultural experiences and great photo opportunities. (Entrance 220 THB)",
      "Note: the tour starts at 09:00 AM because we are going up to the mountain.",
    ],
    includes: STANDARD_SIGHTSEEING_INCLUDES,
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S3",
    title: "1 Day Temples & Lanna Cooking Experience",
    badge: "Family favourite",
    duration: "1 Day",
    start: "08:30 AM",
    image: "assets/images/tours/s3-cooking-class.jpg",
    visits: "White Temple · Blue Temple · Black House · Lanna Home Cooking Class",
    summary:
      "Three landmark temples in the morning, then cook your own Northern Thai lunch at the Lanna Home Cooking Class.",
    itinerary: [
      "08:30 AM — Pick up from your hotel in Chiang Rai.",
      "09:00 AM — White Temple (Wat Rong Khun): one of Chiang Rai's most famous landmarks, with unique white architecture and intricate Buddhist art.",
      "10:30 AM — Blue Temple (Wat Rong Suea Ten): the beautiful blue interior and impressive Buddhist artwork.",
      "11:30 AM — Black House (Baan Dam Museum): traditional Northern Thai architecture and contemporary art.",
      "12:30 PM — Lanna Home Cooking Class: learn to prepare authentic Northern Thai dishes, then enjoy them for lunch.",
      "Afternoon — Relax and return to your hotel.",
    ],
    includes: [
      "Private transportation",
      "English-speaking driver / guide",
      "Lanna cooking class",
      "Lunch",
      "Drinking water",
      "Travel insurance",
    ],
    excludes: ["Entrance fees"],
    prices: [
      { rate: 2700, who: "2 persons" },
      { rate: 2400, who: "3–4 persons up" },
      { rate: 2000, who: "5–9 persons up" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "S4",
    title: "1 Day White Temple, Black House & Doi Mae Salong",
    duration: "1 Day",
    start: "08:30 AM",
    image: "assets/images/tours/s4-black-house.jpg",
    visits: "White Temple · Black House · Doi Mae Salong",
    summary:
      "Two landmark art temples in the morning, tea mountains and hill tribe village life in the afternoon.",
    itinerary: [
      "White Temple (Wat Rong Khun) — the spectacular contemporary design by renowned Thai artist Chalermchai Kositpipat. (Entrance 200 THB)",
      "Black House (Baan Dam Museum) — a unique collection of dark wooden houses and artworks by renowned Thai artist Thawan Duchanee. (Entrance 80 THB)",
      "Doi Mae Salong — beautiful tea plantations, locally grown Oolong tea tasting, a traditional tea factory, the hill tribe market and village, and panoramic mountain views from a scenic viewpoint.",
    ],
    includes: STANDARD_SIGHTSEEING_INCLUDES,
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S5",
    title: "1 Day White Temple, Black House & Doi Tung",
    duration: "1 Day",
    start: "08:30 AM",
    image: "assets/images/tours/s5-white-temple-family.jpg",
    visits: "White Temple · Black House · Doi Tung",
    summary:
      "The two famous art temples plus the Mae Fah Luang Garden and Royal Villa at Doi Tung.",
    itinerary: [
      "White Temple (Wat Rong Khun) — the spectacular contemporary design by renowned Thai national artist Chalermchai Kositpipat. (Entrance 200 THB)",
      "Black House (Baan Dam Museum) — the unique black wooden houses and fascinating art collection of renowned Thai artist Thawan Duchanee. (Entrance 80 THB)",
      "Doi Tung — the beautiful Mae Fah Luang Garden, Doi Tung Royal Villa and Hall of Inspiration, surrounded by stunning mountain scenery and peaceful gardens. (Entrance 220 THB)",
    ],
    includes: STANDARD_SIGHTSEEING_INCLUDES,
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S6",
    title: "2 Days 1 Night Sightseeing & Trekking",
    badge: "Best of both",
    duration: "2 Days 1 Night",
    start: "08:30 AM",
    image: "assets/images/tours/s6-waterfall-group.jpg",
    visits:
      "White Temple · Black House · Golden Triangle · Tea plantation · Waterfall · Hill tribe trek",
    summary:
      "Day one for the famous sights, day two for the jungle — tea plantation, waterfall, bamboo cooking and a hot spring.",
    itinerary: [
      "DAY 1 — White Temple (Wat Rong Khun): the stunning contemporary temple by Chalermchai Kositpipat; please wear clothing covering below the knees. (Entrance 200 THB) · Black House (Baan Dam Museum): unique black wooden houses and artworks by Thawan Duchanee. (Entrance 80 THB) · Golden Triangle: the famous meeting point of Thailand, Laos and Myanmar, panoramic views from the viewpoint and the House of Opium. (Entrance 50 THB) · Also visit the Big Buddha and a local hill tribe village before your overnight stay.",
      "DAY 2 — Tea, Waterfall & Hill Tribe Trek. After breakfast, trek to a Chinese village and tea plantation, followed by a refreshing waterfall where you can swim. Enjoy a unique bamboo cooking experience and a freshly prepared local lunch. Continue trekking to Akha and Lahu villages and scenic mountain viewpoints. End with a 30-minute relaxing soak in a natural hot spring before returning to your hotel.",
    ],
    includes: [
      "Transportation",
      "English-speaking guide (TAT license)",
      "All meals",
      "Insurance",
      "Accommodation at hill tribe village",
    ],
    excludes: ["Entrance fees"],
    prices: [
      { rate: 5500, who: "2–3 persons" },
      { rate: 5000, who: "4–5 persons" },
      { rate: 4500, who: "6 persons up" },
    ],
    min: "Minimum 2 persons",
  },
  {
    code: "S7",
    title: "1 Day White Temple, Khun Korn Waterfall & Doi Chang",
    duration: "1 Day",
    start: "08:30 AM",
    image: "assets/images/tours/s7-waterfall-bridge.jpg",
    visits: "White Temple · Khun Korn Waterfall · Doi Chang",
    summary:
      "Chiang Rai's most impressive waterfall and its famous coffee mountain, plus the White Temple.",
    itinerary: [
      "White Temple (Wat Rong Khun) — the spectacular contemporary design by renowned Thai national artist Chalermchai Kositpipat. (Entrance 200 THB)",
      "Khun Korn Waterfall — one of Chiang Rai's most impressive waterfalls, approximately 70 metres high, surrounded by lush forest.",
      "Doi Chang — Chiang Rai's famous coffee-growing mountain. Coffee plantations, a local coffee tasting, scenic viewpoints and a visit to a hill tribe community.",
    ],
    includes: [
      "Transportation",
      "English-speaking guide (TAT license)",
      "Lunch",
      "Insurance",
    ],
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S8",
    title: "1 Day Sightseeing & Waterfall",
    duration: "1 Day",
    start: "09:00 AM",
    image: "assets/images/tours/s8-hot-spring.jpg",
    visits: "White Temple · Huay Kaew Waterfall · Natural Hot Spring",
    summary:
      "An easy, relaxing day: the White Temple, a peaceful waterfall with tea plantations, and a natural hot spring.",
    itinerary: [
      "White Temple (Wat Rong Khun) — stunning contemporary architecture by Chalermchai Kositpipat. Please wear clothing covering below the knees. (Entrance 200 THB)",
      "Huay Kaew Waterfall — a peaceful natural setting with a beautiful waterfall, tea plantations and a local hill tribe village.",
      "Natural Hot Spring — relax and soak surrounded by nature for about 30 minutes. (Entrance 100 THB)",
    ],
    includes: [
      "Transportation",
      "English-speaking guide (TAT license)",
      "Lunch",
      "Insurance",
    ],
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S9",
    title: "1 Day Doi Mae Salong, Golden Triangle & Chiang Saen",
    duration: "1 Day",
    start: "08:30 AM",
    image: "assets/images/tours/s9-golden-triangle.jpg",
    visits: "Doi Mae Salong · Golden Triangle · Chiang Saen",
    summary:
      "Tea mountains, the meeting point of three countries and the ancient Lanna town of Chiang Saen.",
    itinerary: [
      "Doi Mae Salong — beautiful tea plantations, local Oolong tea tasting, a tea factory, the hill tribe market and village, and panoramic mountain views from a scenic viewpoint.",
      "Golden Triangle — the famous meeting point of Thailand, Laos and Myanmar. Views from the viewpoint, the House of Opium and the impressive Big Buddha. (House of Opium entrance 50 THB)",
      "Chiang Saen — the historic town of an ancient Lanna kingdom settlement, before returning to Chiang Rai.",
    ],
    includes: STANDARD_SIGHTSEEING_INCLUDES,
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S10",
    title: "1 Day Doi Tung, Doi Chang Mub & Golden Triangle",
    duration: "1 Day",
    start: "09:00 AM",
    image: "assets/images/tours/s10-golden-triangle-arch.jpg",
    visits: "Doi Tung · Doi Chang Mub · Golden Triangle",
    summary:
      "A scenic border drive with mountain viewpoints, royal gardens and the Golden Triangle.",
    itinerary: [
      "Doi Tung — the beautiful Mae Fah Luang Garden, Doi Tung Royal Villa and Hall of Inspiration, surrounded by stunning mountain scenery and perfect photo spots. (Entrance 220 THB)",
      "Doi Chang Mub — a scenic drive along the Thai–Myanmar border, passing hill tribe villages and mountain viewpoints with spectacular views.",
      "Golden Triangle — the famous meeting point of Thailand, Laos and Myanmar. Panoramic views, the Big Buddha and the House of Opium. (Entrance 50 THB)",
    ],
    includes: STANDARD_SIGHTSEEING_INCLUDES,
    excludes: ["Entrance fees"],
    prices: STANDARD_SIGHTSEEING_PRICES,
    min: "Minimum 2 persons",
  },
  {
    code: "S11",
    title: "2 Days 1 Night Grand Sightseeing Tour",
    duration: "2 Days 1 Night",
    start: "08:30 AM",
    image: "assets/images/tours/s11-white-temple-group.jpg",
    visits:
      "White Temple · Black House · Doi Mae Salong · Doi Tung · Doi Chang Mub · Mae Sai · Golden Triangle",
    summary:
      "Everything Chiang Rai is famous for across two days, with a night up in the tea mountains of Doi Mae Salong.",
    itinerary: [
      "DAY 1 — White Temple (Wat Rong Khun): spectacular contemporary architecture by Chalermchai Kositpipat; please wear clothing covering below the knees. (Entrance 200 THB) · Black House (Baan Dam Museum): unique black wooden houses and artworks by Thawan Duchanee. (Entrance 80 THB) · Doi Mae Salong: tea plantations and the Chinese-KMT village, local Oolong tea tasting, a tea factory, hill tribe market and village, and panoramic mountain views. Overnight in Doi Mae Salong — accommodation not included.",
      "DAY 2 — Doi Tung: the Mae Fah Luang Garden, Doi Tung Royal Villa and Hall of Inspiration. (Entrance 220 THB) · Doi Chang Mub: the scenic Thai–Myanmar border drive with mountain viewpoints and hill tribe villages. · Mae Sai: Thailand's northernmost town on the Thai–Myanmar border, with panoramic views from the hilltop temple overlooking Myanmar. · Golden Triangle: the famous meeting point of Thailand, Laos and Myanmar, with an optional visit to the House of Opium. (Entrance 50 THB)",
    ],
    includes: [
      "Transportation",
      "English-speaking guide (TAT license)",
      "Meals",
      "Insurance",
    ],
    excludes: ["Entrance fees", "Accommodation", "Dinner meals"],
    prices: [
      { rate: 4500, who: "2–3 persons" },
      { rate: 4000, who: "4–5 persons" },
      { rate: 3500, who: "6 persons up" },
    ],
    min: "Minimum 2 persons",
  },
];

/* --------------------------------------------------------------------------
   CAR & VAN WITH DRIVER
   -------------------------------------------------------------------------- */
const CAR_RENTAL = {
  /* รถทั้ง 3 แบบ — แสดงเป็นการ์ดรูปด้านบนตารางราคา
     "vehicle" ต้องสะกดตรงกับชื่อรถในตารางราคาด้านล่าง เว็บจะได้ดึงราคา
     "เหมาวันเริ่มต้น ฿…" มาเองอัตโนมัติ ไม่มีทางหลุดไม่ตรงกับตาราง
     เปลี่ยนรูป: เอาไฟล์ใหม่ใส่ assets/images/ แล้วแก้ "img" */
  fleet: [
    {
      img: "car-3-seats.jpg",
      vehicle: "Private car — 3 seats",
      label: "Sedan",
      seats: "3 passengers",
      desc: "Air-conditioned sedan. Good for a couple or a small family.",
    },
    {
      img: "car-5-seats.jpg",
      vehicle: "Private car — 5 seats",
      label: "SUV",
      seats: "5 passengers",
      desc: "More room and a higher ride — comfortable on the mountain roads.",
    },
    {
      img: "van-10-seats.jpg",
      vehicle: "Private van — 10 seats",
      label: "Van",
      seats: "10 passengers",
      desc: "For a bigger group or a family travelling together.",
    },
  ],
  intro:
    "Comfortable cars and vans with an expert local driver, so you can plan your own trip at your own pace. Our drivers know the region well and can recommend the best spots, scenic views and the right time to visit each place.",
  groups: [
    {
      title: "Full Day — Chiang Rai & Around",
      note: "Per day. Including car, driver and gasoline.",
      rows: [
        { vehicle: "Private car — 3 seats", price: 2800 },
        { vehicle: "Private car — 5 seats", price: 3000 },
        { vehicle: "Private van — 10 seats", price: 4000 },
      ],
    },
    {
      title: "Full Day — Mountain Areas",
      note:
        "Doi Tung, Doi Mae Salong, Doi Chang, Doi Phahee, Pha Mee and other mountains. Per day, including car, driver and gasoline.",
      rows: [
        { vehicle: "Private car — 3 seats", price: 3300 },
        { vehicle: "Private car — 5 seats", price: 3500 },
        { vehicle: "Private van — 10 seats", price: 5000 },
      ],
    },
    {
      title: "Transfer — Chiang Rai to Chiang Mai",
      note: "One way. Including car, driver and gasoline.",
      rows: [
        { vehicle: "Private car — 3 seats", price: 3200 },
        { vehicle: "Private car — 5 seats", price: 3500 },
        { vehicle: "Private van — 10 seats", price: 4500 },
      ],
    },
    {
      title: "Transfer — Chiang Rai Airport",
      note: "One way. Including car, driver and gasoline.",
      rows: [
        { vehicle: "Private car — 3 seats", price: 300 },
        { vehicle: "Private car — 4 seats", price: 400 },
        { vehicle: "Private van — 10 seats", price: 1200 },
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
   COOKING CLASS — LANNA HOME COOKING CLASS
   -------------------------------------------------------------------------- */
const COOKING = {
  title: "Lanna Home Cooking Class",
  tagline: "Cook · Learn · Eat · Enjoy",
  summary:
    "Experience the authentic flavours of Northern Thailand. Visit a local market, walk through an organic garden, and cook a full Thai meal with your own hands — then sit down and enjoy it.",
  price: 1650,
  priceNote: "THB per person · Minimum 2 participants",
  location:
    "Give Green Farm House Restaurant, next to the Baan Dam Museum (Black House), Chiang Rai",
  highlights: [
    { title: "Visit a Local Market", text: "Shop for fresh ingredients like a local." },
    { title: "Organic Garden Experience", text: "Many ingredients are grown right there." },
    { title: "Hands-on Cooking", text: "You cook every dish yourself, step by step." },
    { title: "Enjoy Your Own Meal", text: "Sit down to the full meal you prepared." },
    { title: "Small Class, Big Smile", text: "Friendly teachers and small groups." },
  ],
  includes: [
    "Drinking water",
    "Visit a local market",
    "Cooking ingredients & equipment",
    "Recipe booklet",
    "Round-trip hotel transfers within Chiang Rai city",
  ],
  dietary:
    "All dietary requirements are welcome. Please inform us of any food allergies or dietary requirements in advance.",
  sessions: [
    {
      name: "Morning Class",
      time: "09:00 AM – 01:00 PM",
      steps: [
        ["09:00 AM", "Hotel pickup in Chiang Rai city"],
        ["09:20 AM", "Visit a local market (approx. 15–20 minutes)"],
        ["09:30 AM", "Head to Lanna Home Cooking Class & explore the organic garden"],
        ["10:00 AM", "Begin the cooking class"],
        ["12:00 PM", "Enjoy lunch with the dishes you prepared"],
        ["12:30 PM", "Depart from Lanna Home Cooking Class"],
        ["01:00 PM", "Arrive back at your hotel"],
      ],
    },
    {
      name: "Afternoon Class",
      time: "03:00 PM – 07:00 PM",
      steps: [
        ["03:00 PM", "Hotel pickup in Chiang Rai city"],
        ["03:20 PM", "Visit a local market (approx. 15–20 minutes)"],
        ["03:30 PM", "Head to Lanna Home Cooking Class & explore the organic garden"],
        ["04:00 PM", "Begin the cooking class"],
        ["06:00 PM", "Enjoy dinner with the dishes you prepared"],
        ["06:30 PM", "Depart from Lanna Home Cooking Class"],
        ["07:00 PM", "Arrive back at your hotel"],
      ],
    },
  ],
  menu: [
    {
      group: "Soup & Curry",
      dishes: [
        "Tom Yum Goong (Spicy Shrimp Soup)",
        "Tom Kha Gai (Chicken Coconut Soup with Galangal)",
        "Green Curry (Thai Coconut Curry)",
        "Khao Soi (Yellow Curry Noodle Soup)",
        "Hung Lay Curry (Northern Thai Pork Curry)",
      ],
    },
    {
      group: "Stir-Fried Dishes",
      dishes: [
        "Cashew Nut Stir-Fry",
        "Sweet and Sour Stir-Fry",
        "Thai Basil Stir-Fry (Pad Krapow)",
        "Pad Thai",
        "Pad Kee Mao (Drunken Noodles)",
      ],
    },
    {
      group: "Salad",
      dishes: [
        "Green Papaya Salad",
        "Green Mango Salad",
        "Spicy Egg Salad",
        "Glass Noodle Salad",
        "Lemongrass Salad",
      ],
    },
    {
      group: "Dessert",
      dishes: [
        "Mango Sticky Rice",
        "Banana in Coconut Milk (or Sweet Potato or Pumpkin)",
        "Banana Samosa",
        "Deep-Fried Banana with Pandan Sauce and Coconut Milk",
        "Vegetable Spring Rolls",
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
   HOME PAGE HERO SLIDESHOW
   18 photos, one every 4 seconds. The old photo slides out to the left,
   the new one slides in from the right, then it loops back to the first.

   ⚠️ TEMPORARY: these 18 photos are still loaded straight from the old Wix
   site. They work now, but they WILL STOP WORKING the day the Wix account is
   cancelled. Before launch, download them into assets/images/ and replace
   each long https://... line with "assets/images/your-file.jpg".

   Change the 4 seconds here:
   -------------------------------------------------------------------------- */
const HERO_INTERVAL_MS = 4000;

// focus = how far down the full frame the faces sit, in percent. The hero box is
// much wider than these photos, so the browser has to crop them top and bottom;
// this tells it which band to keep. 50 = dead centre, lower number = higher up.
const HERO_SLIDES = [
  { src: "assets/images/hero/hero-01.jpg", caption: "Trekking through the rice terraces" , focus: 54 },
  { src: "assets/images/hero/hero-02.jpg", caption: "Bamboo rafting on the river" , focus: 48 },
  { src: "assets/images/hero/hero-03.jpg", caption: "Deep in the Chiang Rai jungle" , focus: 43 },
  { src: "assets/images/hero/hero-04.jpg", caption: "Mountain views on the way up" , focus: 45 },
  { src: "assets/images/hero/hero-05.jpg", caption: "Lunch cooked in bamboo, served on banana leaves" , focus: 47 },
  { src: "assets/images/hero/hero-06.jpg", caption: "Visiting a hill tribe village" , focus: 50 },
  { src: "assets/images/hero/hero-07.jpg", caption: "Through the banana groves" , focus: 62 },
  { src: "assets/images/hero/hero-08.jpg", caption: "Our guests, after a day on the trail" , focus: 26 },
  { src: "assets/images/hero/hero-09.jpg", caption: "The valley we walk through" , focus: 50 },
  { src: "assets/images/hero/hero-10.jpg", caption: "Into the bamboo forest" , focus: 64 },
  { src: "assets/images/hero/hero-11.jpg", caption: "Downstream on a bamboo raft" , focus: 50 },
];

/* --------------------------------------------------------------------------
   GALLERY — add more photos here as you copy them into assets/images/
   -------------------------------------------------------------------------- */
const GALLERY = [
  { src: "assets/images/gallery/g-01.jpg", caption: "Bamboo rafting on the river" },
  { src: "assets/images/gallery/g-02.jpg", caption: "Visiting the Long Neck village" },
  { src: "assets/images/gallery/g-03.jpg", caption: "Dinner cooked over the fire" },
  { src: "assets/images/gallery/g-04.jpg", caption: "At the Myanmar border" },
  { src: "assets/images/gallery/g-05.jpg", caption: "A swim stop at the waterfall" },
  { src: "assets/images/gallery/g-06.jpg", caption: "The White Temple" },
  { src: "assets/images/gallery/g-07.jpg", caption: "Tea picking by hand" },
  { src: "assets/images/gallery/g-08.jpg", caption: "At the Blue Temple" },
  { src: "assets/images/gallery/g-09.jpg", caption: "Cutting bamboo poles for the raft" },
  { src: "assets/images/gallery/g-10.jpg", caption: "Crossing the stream on the way up" },
  { src: "assets/images/gallery/g-11.jpg", caption: "Through the rice fields" },
  { src: "assets/images/gallery/g-12.jpg", caption: "Following the stream bed" },
  { src: "assets/images/gallery/g-13.jpg", caption: "A rest in the bamboo forest" },
  { src: "assets/images/gallery/g-14.jpg", caption: "The bamboo bridge" },
  { src: "assets/images/gallery/g-15.jpg", caption: "Our guide, steering the raft" },
  { src: "assets/images/gallery/g-16.jpg", caption: "No hurry on the water" },
  { src: "assets/images/gallery/g-17.jpg", caption: "Just the two of you at the falls" },
  { src: "assets/images/gallery/g-18.jpg", caption: "The trail down through the jungle" },
  { src: "assets/images/gallery/g-19.jpg", caption: "Made it" },
  { src: "assets/images/gallery/g-20.jpg", caption: "Everyone at the falls" },
  { src: "assets/images/gallery/g-21.jpg", caption: "Bamboo raft on the lake" },
  { src: "assets/images/gallery/g-22.jpg", caption: "Deep in the green" },
  { src: "assets/images/gallery/g-23.jpg", caption: "Our guide explains the forest" },
  { src: "assets/images/gallery/g-24.jpg", caption: "Drying the harvest in the village" },
  { src: "assets/images/gallery/g-25.jpg", caption: "Meeting the village" },
  { src: "assets/images/gallery/g-26.jpg", caption: "Leaf hats from the forest" },
  { src: "assets/images/gallery/g-27.jpg", caption: "A shaded rest stop" },
  { src: "assets/images/gallery/g-28.jpg", caption: "The valley we walk through" },
  { src: "assets/images/gallery/g-29.jpg", caption: "Through the tall grass" },
  { src: "assets/images/gallery/g-30.jpg", caption: "The natural hot spring" },
  { src: "assets/images/gallery/g-31.jpg", caption: "Cooling off under the falls" },
  { src: "assets/images/gallery/g-32.jpg", caption: "Walking the tea hills" },
  { src: "assets/images/gallery/g-33.jpg", caption: "Bamboo poles cut and ready" },
  { src: "assets/images/gallery/g-34.jpg", caption: "The bridge beside the waterfall" },
  { src: "assets/images/gallery/g-35.jpg", caption: "Souvenirs from the jungle" },
  { src: "assets/images/gallery/g-36.jpg", caption: "Fresh fruit after the walk" },
  { src: "assets/images/gallery/g-37.jpg", caption: "Farmland along the way" },
  { src: "assets/images/gallery/g-38.jpg", caption: "Lunch with the family" },
  { src: "assets/images/gallery/g-39.jpg", caption: "Friends at the falls" },
  { src: "assets/images/gallery/g-40.jpg", caption: "Straight into the water" },
  { src: "assets/images/gallery/g-41.jpg", caption: "A waterfall deep in the forest" },
  { src: "assets/images/gallery/g-42.jpg", caption: "Lunch served on banana leaves" },
  { src: "assets/images/gallery/g-43.jpg", caption: "Past the rice hut" },
  { src: "assets/images/gallery/g-44.jpg", caption: "Across the open fields" },
  { src: "assets/images/gallery/g-45.jpg", caption: "Dense jungle, easy pace" },
  { src: "assets/images/gallery/g-46.jpg", caption: "The Blue Temple" },
  { src: "assets/images/gallery/g-47.jpg", caption: "The Black House" },
  { src: "assets/images/gallery/g-48.jpg", caption: "Looking out over the Mekong" },
  { src: "assets/images/gallery/g-49.jpg", caption: "Inside the Black House" },
  { src: "assets/images/gallery/g-50.jpg", caption: "Weaving at the hill tribe village" },
  { src: "assets/images/gallery/g-51.jpg", caption: "The Golden Triangle" },
  { src: "assets/images/gallery/g-52.jpg", caption: "Choui Fong tea plantation" },
  { src: "assets/images/gallery/g-53.jpg", caption: "A photo in the tea fields" },
  { src: "assets/images/gallery/g-54.jpg", caption: "Three countries from one spot" },
  { src: "assets/images/gallery/g-55.jpg", caption: "The White Temple from the water" },
  { src: "assets/images/gallery/g-56.jpg", caption: "Lunch together" },
  { src: "assets/images/gallery/g-57.jpg", caption: "At the viewpoint" },
  { src: "assets/images/gallery/g-58.jpg", caption: "Rows of tea on the hillside" },
];


/* Every bookable item, used to fill the booking form dropdown */
const ALL_PROGRAMS = [
  ...TREKKING.map((t) => ({ code: t.code, label: `${t.code} — ${t.title}`, group: "Trekking" })),
  ...SIGHTSEEING.map((t) => ({ code: t.code, label: `${t.code} — ${t.title}`, group: "Sightseeing" })),
  { code: "COOK", label: "Lanna Home Cooking Class", group: "Cooking Class" },
  { code: "CAR", label: "Car / Van with Driver", group: "Car Rental" },
  { code: "CUSTOM", label: "Custom / private tour — tell us your plan", group: "Other" },
];

/* --------------------------------------------------------------------------
   GUEST REVIEWS — home page carousel
   --------------------------------------------------------------------------
   รีวิวจริงจากหน้า Tripadvisor ของบริษัท ตัดมาเป็นประโยคสั้น ๆ พร้อมชื่อผู้รีวิว
   เดือน และลิงก์กลับไปหน้าต้นทาง

   ⚠️ รีวิวชุดนี้ "ไม่อัปเดตเอง" — เว็บแบบ HTML ล้วนดึงรีวิวสดจาก Google หรือ
   Tripadvisor ไม่ได้ฟรี (ดู README หัวข้อ "รีวิว" ว่ามีทางเลือกอะไรบ้าง)
   เวลามีรีวิวใหม่ที่ชอบ ให้ก๊อปมาเพิ่มเป็นบล็อกใหม่ในลิสต์นี้ได้เลย

   source: "tripadvisor" หรือ "google"  → ใช้เลือกป้ายสีและไอคอน
   เปลี่ยนความเร็วสไลด์ที่ REVIEW_INTERVAL_MS (4000 = 4 วินาที)             */

const REVIEW_INTERVAL_MS = 4000;

/* ตัวเลขสรุปบนหัวข้อ — แก้ตรงนี้เวลาจำนวนรีวิวเพิ่มขึ้น */
const REVIEW_STATS = [
  { source: "tripadvisor", rating: "5.0", count: 319, label: "Tripadvisor" },
  { source: "google", rating: "4.9", count: 241, label: "Google" },
];

/* รีวิวเรียงสลับ Tripadvisor / Google เพื่อให้เห็นทั้งสองป้ายพร้อมกันบนจอคอม
   หมายเหตุเรื่องวันที่: Google แสดงเป็น "2 months ago" ไม่ได้บอกเดือนตรง ๆ
   ตัวเลขเดือน/ปีของรีวิว Google ด้านล่างจึงเป็นการเทียบจากตอนที่เก็บข้อมูล
   (กันยายน 2026) ถ้าอยากให้ตรงเป๊ะ เปิดหน้า Google แล้วแก้ค่า date ได้เลย */
const REVIEWS = [
  {
    source: "tripadvisor",
    title: "An Incredible and Memorable Day!",
    text: "We had the best day with Kai, the owner — he made us laugh so much! It was such a special, genuine experience.",
    author: "Skye H",
    place: "",
    date: "October 2025",
  },
  {
    source: "google",
    title: "",
    text: "Wonderful day with Kai from Bamboo Tours. We did the boat ride followed by a nice trek in the jungle with stops in villages and a nice lunch — amazing views of the mountains!",
    author: "Philippe Jutras",
    place: "Local Guide",
    date: "January 2026",
  },
  {
    source: "tripadvisor",
    title: "A magical day",
    text: "It was truly a magical day, an exceptional guide who knows the region perfectly. The landscapes are magnificent and the guide is full of little thoughtful gestures.",
    author: "dalecooper75",
    place: "Paris, France",
    date: "August 2026",
  },
  {
    source: "google",
    title: "",
    text: "We did a 1 day waterfall and trekking tour — it was simply incredible. Our guide Mr. Kai had excellent English, was funny, and very knowledgeable.",
    author: "Katherine Welsh",
    place: "Local Guide",
    date: "March 2026",
  },
  {
    source: "tripadvisor",
    title: "Wonderful experience! Like true explorers!",
    text: "The experience with nature and the local people was enriched by the kindness and preparation of our guides, who made it fun for us and our children!",
    author: "Michela S",
    place: "",
    date: "August 2026",
  },
  {
    source: "google",
    title: "",
    text: "We did a one day trekking with Mr. Kai to local villages and a waterfall. We loved everything about the day and enjoyed everything we learned about the local customs and plants.",
    author: "Gijs Edelbroek",
    place: "",
    date: "July 2026",
  },
  {
    source: "tripadvisor",
    title: "The best tourist agency in Chiang Rai",
    text: "Kwan, Kai, Pedo and Kwan's wife are definitely the best people to taste real Thai with.",
    author: "Claudio P",
    place: "Rome, Italy",
    date: "November 2025",
  },
  {
    source: "google",
    title: "",
    text: "Our guide Kwan was extremely friendly, knowledgeable, and gave us plenty of time to enjoy the White and Blue Temples with lots of great explanations. A wonderful guide and an unforgettable day.",
    author: "Peter Wijchers",
    place: "Local Guide",
    date: "February 2026",
  },
  {
    source: "tripadvisor",
    title: "I can only recommend going on one of their tours",
    text: "The guide was fantastic, present, engaged and told about the area. We also visited his farm, making the experience even more authentic and personal.",
    author: "Beatrice R",
    place: "",
    date: "February 2026",
  },
  {
    source: "google",
    title: "",
    text: "Amazing guide, vast knowledge sharing, lovely conversations, breathtaking views, a hearty meal in a mountain village. This is where unforgettable trip memories are made.",
    author: "A B",
    place: "Local Guide",
    date: "February 2026",
  },
  {
    source: "tripadvisor",
    title: "Both days were brilliant",
    text: "We had 2 days with Kai, one sightseeing and one trekking — both were brilliant. Could not fault anything.",
    author: "malcolm",
    place: "",
    date: "November 2025",
  },
  {
    source: "google",
    title: "",
    text: "An unforgettable experience with Bamboo Tours in Chiang Rai! Our guide Kwan, joined by Ya, took us on a beautiful trek and shared his knowledge of nature all day long.",
    author: "Lilian",
    place: "",
    date: "July 2026",
  },
  {
    source: "tripadvisor",
    title: "An amazing 1 day trekking experience",
    text: "The guides were patient, knowledgeable and very entertaining.",
    author: "Alona G",
    place: "Vancouver, Canada",
    date: "September 2025",
  },
  {
    source: "google",
    title: "",
    text: "One of the best treks in my life! If you love an authentic experience with local but professional guides, this is the place for you. 11 out of 10!",
    author: "J J",
    place: "Local Guide",
    date: "2022",
  },
  {
    source: "tripadvisor",
    title: "Great time in Chiang Rai thanks to Bamboo Tours",
    text: "Great welcome from Kwan and all his team. Always with a smile, they explain a lot about flora, tribal cultures and history.",
    author: "karine B",
    place: "",
    date: "December 2025",
  },
  {
    source: "google",
    title: "",
    text: "Fantastic full day tour. We got to see everything we wanted to, at just the right pace. Our guide Aryu was funny and informative.",
    author: "Emma Sharp",
    place: "",
    date: "2025",
  },
  {
    source: "tripadvisor",
    title: "Fantastic guides",
    text: "Juan and Kai are fantastic guides — super knowledgeable, accommodating, and great with a mixed-age group.",
    author: "Haim G",
    place: "",
    date: "September 2025",
  },
  {
    source: "google",
    title: "",
    text: "Both guides were very nice and helpful. One was really knowledgeable of local plants and food, which made the hike much more interesting. 100% recommended!",
    author: "Joaquin Vizcaino",
    place: "Local Guide",
    date: "2023",
  },
];

/* ======================================================================
   TEAM — the About Us page
   ----------------------------------------------------------------------
   แก้ชื่อ ตำแหน่ง ภาษา และคำบรรยายของแต่ละคนได้ที่นี่ที่เดียว
   placeholder: true  = การ์ดจะขึ้นป้าย "SAMPLE" สีเหลือง (ข้อมูลสมมติ)
                        ลบบรรทัดนี้ทิ้งเมื่อใส่ข้อมูลจริงแล้ว
   รูป: assets/images/team/<ไฟล์>  — รูปสี่เหลี่ยมจัตุรัส อย่างน้อย 560x560
   ====================================================================== */
const TEAM_FOUNDER = {
  photo: "kwan.jpg",
  name: "Kwanchai Woharn",
  nick: "Kwan",
  role: "Founder &amp; Lead Guide",
  langs: "Thai, English",
  skills: "Trekking · Chiang Rai history &amp; culture · Jungle cooking · Waterfall routes · Bamboo rafting · Temple tours · Photography",
  bio: "Kwan was born and raised in Chiang Rai, and he has never wanted to work anywhere else. "
     + "He is a professional trekking guide who knows these mountains the way most people know their own street — "
     + "which trail is quiet this week, where the water is running, which family in the village will have coffee ready. "
     + "Ask him about the story behind a temple or a hill tribe village and you will get the real one, not the guidebook version. "
     + "Away from the tours, he spends his own time supporting families in the mountain villages, bringing them what they are "
     + "actually short of rather than what outsiders assume they need.",
};

const TEAM = [
  {
    photo: "khai.jpg",
    name: "Khai",
    role: "Senior Trekking Guide",
    langs: "Thai, English",
    skills: "Trekking \u00b7 Jungle cooking \u00b7 Waterfall routes",
    bio: "Khai is Kwan's younger brother, and Bamboo Tours has been the two of them from the start. "
       + "He speaks excellent English, so guests with a lot of questions usually end up walking next "
       + "to him, and he leads most of the trekking days \u2014 calm, patient, and very hard to tire out.",
  },
  {
    photo: "poo.jpg",
    name: "Kongpoo Boonma",
    nick: "Poo",
    role: "Manager",
    langs: "Thai, English",
    skills: "Bookings \u00b7 Trip planning \u00b7 Guest care",
    bio: "Poo is the one who answers when you write to us. She looks after the bookings, the pick-up times "
       + "and the hundred small details that decide whether a trip runs smoothly, and she knows the "
       + "programmes well enough to tell you which one actually suits you. Quick to reply, and very hard "
       + "to catch without a smile.",
  },
];

/* ======================================================================
   COOKING_GALLERY — รูปในหน้า Cooking Class (คลิกแล้วขยายได้)
   เพิ่ม/ลบรูป: วางไฟล์ไว้ใน assets/images/cooking/ แล้วเพิ่มบรรทัดข้างล่าง
   ====================================================================== */
const COOKING_GALLERY = [
  { src: "assets/images/cooking/cook-01.jpg", caption: "Everything measured out before you start" },
  { src: "assets/images/cooking/cook-02.jpg", caption: "Fresh ingredients from the local market" },
  { src: "assets/images/cooking/cook-04.jpg", caption: "Our teacher explains every dish first" },
  { src: "assets/images/cooking/cook-05.jpg", caption: "A small class, so everyone gets help" },
  { src: "assets/images/cooking/cook-06.jpg", caption: "Squeezing fresh coconut milk by hand" },
  { src: "assets/images/cooking/cook-08.jpg", caption: "Chopping, pounding, tasting" },
  { src: "assets/images/cooking/cook-09.jpg", caption: "Working the curry paste in the stone mortar" },
  { src: "assets/images/cooking/cook-10.jpg", caption: "Your station between dishes" },
  { src: "assets/images/cooking/cook-11.jpg", caption: "Everybody cooking together" },
  { src: "assets/images/cooking/cook-12.jpg", caption: "Your own wok, at your own pace" },
  { src: "assets/images/cooking/cook-13.jpg", caption: "A hand whenever you need one" },
  { src: "assets/images/cooking/cook-14.jpg", caption: "Cooking in the open-air kitchen" },
  { src: "assets/images/cooking/cook-15.jpg", caption: "Mango with sticky rice to finish" },
  { src: "assets/images/cooking/cook-16.jpg", caption: "Four or five dishes each, all your own" },
  { src: "assets/images/cooking/cook-17.jpg", caption: "Finished, plated and ready to eat" },
  { src: "assets/images/cooking/cook-18.jpg", caption: "Proud of the result" },
  { src: "assets/images/cooking/cook-19.jpg", caption: "Take the recipes home with you" },
  { src: "assets/images/cooking/cook-20.jpg", caption: "A morning well spent" },
  { src: "assets/images/cooking/cook-21.jpg", caption: "The whole class and the whole menu" },
  { src: "assets/images/cooking/cook-22.jpg", caption: "Everything we cooked today" },
];
