import {
  Gem,
  Hammer,
  Heart,
  Leaf,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import heroImage from "@/assets/marble-hero.jpg";
import craftImage from "@/assets/marble-craftsmanship.jpg";
import ganeshImage from "@/assets/ganesh-statues.jpg";
import boxImage from "@/assets/marble-decorative-boxes.jpg";
import vaseImage from "@/assets/marble-vases.jpg";
import elephantImage from "@/assets/marble-elephants.jpg";
import poojaImage from "@/assets/marble-pooja-items.jpg";
import bowlsImage from "@/assets/marble-bowls-plates.jpg";
import candleImage from "@/assets/marble-candle-holders.jpg";
import homeImage from "@/assets/marble-home-decor.jpg";
import inlayImage from "@/assets/marble-inlay-art.jpg";
import customImage from "@/assets/custom-marble-work.jpg";

export { heroImage, craftImage };

export const collections = [
  { name: "Marble Statues & Sculptures", description: "Sculptural forms with a quiet, lasting presence.", image: ganeshImage, alt: "Hand-carved white marble Ganesha sculpture" },
  { name: "Marble Decorative Items", description: "Considered details for a more personal home.", image: boxImage, alt: "White marble keepsake box with floral stone inlay" },
  { name: "Marble Vases", description: "Graceful silhouettes shaped from natural stone.", image: vaseImage, alt: "Tall, hand-carved white marble vase" },
  { name: "Marble Showpieces", description: "Artful forms that draw the eye and invite a closer look.", image: elephantImage, alt: "Intricately carved white marble elephant showpiece" },
  { name: "Marble Pooja Items", description: "Thoughtful stonework for a place of reflection.", image: poojaImage, alt: "Carved white marble home pooja shrine" },
  { name: "Marble Bowls & Plates", description: "Beautifully simple accents for table and home.", image: bowlsImage, alt: "Set of white marble serving bowls and plates" },
  { name: "Marble Candle Holders", description: "Soft candlelight meets sculpted marble.", image: candleImage, alt: "Pair of carved marble candle holders" },
  { name: "Marble Home Decor", description: "Natural forms designed to bring a room together.", image: homeImage, alt: "Lotus-shaped white marble decorative bowl" },
  { name: "Marble Inlay Art", description: "Intricate stonework with a fine, floral finish.", image: inlayImage, alt: "Floral inlay artwork set into a white marble panel" },
  { name: "Custom Marble Handicrafts", description: "A starting point for a piece made to your brief.", image: customImage, alt: "Marble artisan hand-finishing a carved sculpture" },
] as const;

export const navigation = [
  ["Home", "/"], ["About Us", "/about"], ["Collections", "/collections"],
  ["Craftsmanship", "/craftsmanship"], ["Gallery", "/gallery"], ["Contact Us", "/contact"],
] as const;

export const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Sparkles, title: "Elegant Designs", description: "Thoughtful forms, balanced proportions, and considered finishes." },
  { icon: Hammer, title: "Fine Craftsmanship", description: "An appreciation for the skill and care behind handmade work." },
  { icon: Gem, title: "Artistic Detailing", description: "Intricate carving and inlay details reward a closer look." },
  { icon: Heart, title: "Timeless Beauty", description: "Natural marble brings a lasting character to every piece." },
  { icon: Leaf, title: "Decorative Appeal", description: "Natural stone adds a tactile, sculptural note to interiors." },
  { icon: MessageCircle, title: "Customization Enquiries", description: "Discuss a particular design, finish, or requirement with us." },
];

export const pageMeta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
