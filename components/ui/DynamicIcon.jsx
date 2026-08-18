import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Box,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code,
  Code2,
  Compass,
  Cpu,
  Database,
  Dumbbell,
  ExternalLink,
  Facebook,
  Factory,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Layers,
  Layout,
  Linkedin,
  MapPin,
  MessageCircle,
  MessageSquare,
  Palette,
  Rocket,
  Search,
  Server,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Terminal,
  TrendingUp,
  Twitter,
  Workflow,
  Zap,
} from "lucide-react";

const iconMap = {
  Activity,
  ArrowRight,
  BarChart3,
  Box,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code,
  Code2,
  Compass,
  Cpu,
  Database,
  Dumbbell,
  ExternalLink,
  Facebook,
  Factory,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Layers,
  Layout,
  Linkedin,
  MapPin,
  MessageCircle,
  MessageSquare,
  Palette,
  Rocket,
  Search,
  Server,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Terminal,
  TrendingUp,
  Twitter,
  Workflow,
  Zap,
};

/**
 * Dynamic Lucide icon renderer for YAML string identifiers
 */
export default function DynamicIcon({ name, className = "w-5 h-5", ...props }) {
  if (!name) {
    return <Sparkles className={className} {...props} />;
  }

  // Sanitize icon name: remove non-alphanumeric, capitalize first letter
  const formattedName = name
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const IconComponent = iconMap[formattedName] || iconMap[name] || Sparkles;

  return <IconComponent className={className} {...props} />;
}
