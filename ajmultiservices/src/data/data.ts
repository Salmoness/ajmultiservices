import { LuPaintRoller } from "react-icons/lu";
import { PiBuildingOffice } from "react-icons/pi";
import { LuHouse } from "react-icons/lu";

export type Service = { title: string; icon: any; bullets: string[]; };
export type Project = { id: string; title: string; image: string; };
export type Review = { id: string; name: string; text: string; rating: number; };

export const services: Service[] = [
  { title: "Residential Painting", icon: PiBuildingOffice, bullets: ["Interior walls & ceilings", "Trim, doors, baseboards", "Drywall repairs & patching", "Color matching"] },
  { title: "Exterior Painting", icon: LuPaintRoller, bullets: ["Stucco & siding", "Fascia, soffits & shutters", "Surface prep & sealing", "Weather-resistant coatings"] },
  { title: "Commercial Painting", icon: LuHouse, bullets: ["Offices, retail & warehouses", "After-hours scheduling", "Durable finishes", "Fast & efficient turnarounds"] },
];

export const projects: Project[] = [
  { id: "p1", title: "Exterior Repaint", image: "/work/work-1.jpg" },
  { id: "p2", title: "Interior Refresh", image: "/work/work-2.jpg" },
  { id: "p3", title: "Cabinet Refinishing", image: "/work/work-3.jpg" },
  { id: "p4", title: "Deck & Fence Stain", image: "/work/work-4.jpg" },
];

export const reviews: Review[] = [
  { id: "r1", name: "Alex M.", rating: 5, text: "They were on time, protected everything, and the lines are super clean." },
  { id: "r2", name: "Bianca S.", rating: 5, text: "Great communication and the exterior looks brand new. Would hire again." },
  { id: "r3", name: "Jordan P.", rating: 4, text: "Solid work, fair price, and they finished faster than expected." },
];
