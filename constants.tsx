import React from 'react';
import { 
  Wifi, 
  Coffee, 
  Clock, 
  Info, 
  MapPin, 
  ShieldAlert, 
  Waves,
  ShoppingBag,
  Zap,
  Cigarette,
  Dog,
  VolumeX,
  Beer
} from 'lucide-react';

export const HOTEL_NAME = "Tombstone Grand Hotel";
export const HOTEL_SUBTITLE = "a Baymont by Wyndham";
export const HOTEL_LOCATION = "Tombstone, Arizona";
export const HOTEL_PHONE = "520-457-9507";
export const HOTEL_EMAIL = "reservations@tombstonegrand.com";

export const HOTEL_COORDINATES = { lat: 31.7215, lng: -110.0684 };

export const WIFI_NETWORK = "wyndhamwifi";
export const WIFI_PASSWORD = "grandhotel";

export const MAINTENANCE_FORM_URL = "https://forms.gle/Et1mTk1AGKLMQQHu6";
export const GOOGLE_REVIEW_LINK = "https://g.page/r/CdMu_RAsng9VEAE/review";
export const VIRTUAL_TOUR_URL = "https://www.google.com/maps/@31.7215,-110.0684,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipMbbG8k...!2e10!3e11!7i8000!8i4000";

export const HOTEL_HISTORY = [
  "The Tombstone Grand Hotel stands as a modern tribute to the enduring spirit of the American West. Situated on a rise overlooking the historic town and the Dragoon Mountains beyond, our location offers the same breathtaking sunsets that cowboys and lawmen witnessed over a century ago.",
  "Originally founded to offer a higher standard of accommodation in 'The Town Too Tough to Die', the hotel has hosted countless visitors seeking to walk the streets of history. Our architecture and decor pay homage to the Victorian era while ensuring contemporary comfort.",
  "As a proud member of the Baymont by Wyndham family, we blend the warmth of hometown hospitality with the reliability of a global brand. This partnership signifies our commitment to quality, ensuring every guest experiences the perfect balance of rugged adventure and restful luxury."
];

export const BREAKFAST_ITEMS = [
  "Fresh regular and decaf coffee",
  "Two juice options",
  "Yogurt with toppings",
  "Two waffle flavors",
  "Fresh fruit",
  "Bagels plain and cinnamon",
  "English muffins",
  "Butter, jelly, cream cheese",
  "Hot chocolate",
  "Scrambled eggs and sausage (select days)",
  "Biscuits and gravy (select days)"
];

export const ATTRACTIONS = [
  { 
    name: "OK Corral", 
    desc: "Site of the famous 1881 gunfight.",
    lat: 31.7129,
    lng: -110.0672
  },
  { 
    name: "Boothill Graveyard", 
    desc: "Final resting place of outlaws.",
    lat: 31.7289,
    lng: -110.0763
  },
  { 
    name: "Historic Allen Street", 
    desc: "Preserved wild west town street.",
    lat: 31.7135,
    lng: -110.0675
  },
];

export const LOCAL_LINKS = [
  { 
    text: "Visitor FAQs", 
    url: "https://tombstonechamber.com/tombstone-az-faqs-for-visitors/" 
  },
  { 
    text: "Places to Eat & Drink", 
    url: "https://www.printfriendly.com/print?source=cs&url=https%3A%2F%2Ftombstonechamber.com%2Fdirectory%2Fplaces-to-eat-and-drink-in-tombstone-az%2F&headerImageUrl=&headerTagline=&imageDisplayStyle=block&disableClickToDel=0&disablePDF=0&encodeImages=false&showHiddenContent=false&disablePrint=0&disableEmail=0&imagesSize=full-size&fallbackStrategy=algo&primaryImage=all&fetchOriginalPage=default" 
  },
  { 
    text: "Tombstone History", 
    url: "https://tombstonechamber.com/about-tombstone-az/tombstone-history/" 
  },
  { 
    text: "Community Events", 
    url: "https://tombstonechamber.com/tombstone-community-events/" 
  }
];

export const GUEST_REVIEWS = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Great location right near the historic district. The breakfast was excellent and the staff was very helpful."
  },
  {
    author: "James P.",
    rating: 5,
    text: "Clean rooms and a wonderful pool. Perfect for our family trip to Tombstone."
  },
  {
    author: "Robert T.",
    rating: 4,
    text: "Comfortable stay. Loved the western theme and the view of the hills."
  }
];