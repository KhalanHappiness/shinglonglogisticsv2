import {
  Clock,
  FileCheck,
  Globe,
  Headset,
  MapPin,
  PackageCheck,
  Plane,
  Route,
  ShieldCheck,
  Ship,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { HomeIcon } from "@/data/shinglongdata";

// Data files reference icons by key so they stay plain, serialisable content.
export const homeIcons: Record<HomeIcon, LucideIcon> = {
  globe: Globe,
  headset: Headset,
  clock: Clock,
  ship: Ship,
  plane: Plane,
  truck: Truck,
  users: Users,
  map: MapPin,
  package: PackageCheck,
  shield: ShieldCheck,
  file: FileCheck,
  route: Route,
};
