import { z } from "zod";

// Error formatter helper
export function formatConfigError(fileName, error) {
  if (error instanceof z.ZodError) {
    const issues = error.issues
      .map(
        (issue) =>
          `  - Path: "${issue.path.join(".")}" -> ${issue.message}`
      )
      .join("\n");
    return `\n[Configuration Error in "${fileName}"]:\n${issues}\nPlease review your YAML structure.\n`;
  }
  return `\n[Configuration Error in "${fileName}"]: ${error.message}\n`;
}

// Company schema
export const companySchema = z.object({
  company: z.object({
    name: z.string().min(1),
    full_name: z.string().min(1),
    tagline: z.string().min(1),
    headline: z.string().optional(),
    description: z.string().min(1),
    founded_year: z.string().optional(),
    active_projects_count: z.number().default(8),
    running_projects_count: z.number().default(3),
    ongoing_projects_count: z.number().default(5),
    mission: z.string().min(1),
    vision: z.string().min(1),
    core_pillars: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ).optional(),
    why_us: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ).optional(),
  }),
});

// Site schema
export const siteSchema = z.object({
  site: z.object({
    name: z.string(),
    short_name: z.string().optional(),
    url: z.string().url().optional().or(z.string()),
    language: z.string().default("en"),
    theme_mode_toggle: z.boolean().default(true),
    announcement_bar: z.object({
      enabled: z.boolean().default(true),
      badge: z.string().optional(),
      text: z.string(),
      link_text: z.string().optional(),
      link_url: z.string().optional(),
    }).optional(),
    home_sections: z.array(z.string()).default([
      "hero",
      "stats",
      "trust_indicators",
      "services_overview",
      "software_capabilities",
      "marketing_funnel",
      "automation_system",
      "featured_projects",
      "tech_stack",
      "process_timeline",
      "industries",
      "testimonials",
      "faq",
      "cta_banner",
    ]),
    sections: z.record(z.object({ enabled: z.boolean().default(true) })).optional(),
  }),
});

// Theme schema
export const themeSchema = z.object({
  theme: z.object({
    default_mode: z.enum(["light", "dark"]).default("light"),
    allow_toggle: z.boolean().default(true),
    colors: z.object({
      primary: z.string().default("#0ea5e9"),
      primary_dark: z.string().default("#0284c7"),
      primary_light: z.string().default("#38bdf8"),
      secondary: z.string().default("#0284c7"),
      secondary_light: z.string().default("#e0f2fe"),
      accent: z.string().default("#38bdf8"),
      accent_glow: z.string().default("#06b6d4"),
      background: z.string().default("#ffffff"),
      background_alt: z.string().default("#f0f9ff"),
      surface: z.string().default("#ffffff"),
      surface_subtle: z.string().default("#f8fafc"),
      surface_elevated: z.string().default("#ffffff"),
      text: z.string().default("#0f172a"),
      text_muted: z.string().default("#64748b"),
      text_light: z.string().default("#94a3b8"),
      border: z.string().default("#e2e8f0"),
      border_accent: z.string().default("#bae6fd"),
    }),
    glow_intensity: z.string().optional(),
    card_glassmorphism: z.boolean().default(true),
    border_radius: z.string().default("1rem"),
  }),
});

// Navigation schema
export const navigationSchema = z.object({
  navigation: z.object({
    brand: z.object({
      name: z.string(),
      tagline: z.string().optional(),
      logo_path: z.string().optional(),
    }),
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
        badge: z.string().optional(),
        has_dropdown: z.boolean().optional(),
        dropdown_items: z.array(
          z.object({
            label: z.string(),
            description: z.string().optional(),
            href: z.string(),
            icon: z.string().optional(),
          })
        ).optional(),
      })
    ),
    cta_button: z.object({
      label: z.string(),
      href: z.string(),
      icon: z.string().optional(),
    }),
    mobile: z.object({
      enable_quick_contact: z.boolean().optional(),
      whatsapp_button: z.boolean().optional(),
    }).optional(),
  }),
});

// Hero schema
export const heroSchema = z.object({
  hero: z.object({
    badge: z.object({
      icon: z.string().optional(),
      text: z.string(),
      pulse: z.boolean().optional(),
    }).optional(),
    headline_prefix: z.string().optional(),
    headline_highlight: z.string().optional(),
    headline_suffix: z.string().optional(),
    description: z.string(),
    primary_cta: z.object({
      label: z.string(),
      href: z.string(),
      icon: z.string().optional(),
    }),
    secondary_cta: z.object({
      label: z.string(),
      href: z.string(),
      icon: z.string().optional(),
    }),
    trust_badges: z.array(
      z.object({
        icon: z.string(),
        label: z.string(),
      })
    ).optional(),
    floating_cards: z.array(
      z.object({
        title: z.string(),
        status: z.string(),
        badge: z.string(),
        icon: z.string(),
      })
    ).optional(),
  }),
});

// Stats schema
export const statsSchema = z.object({
  stats: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    items: z.array(
      z.object({
        number: z.string(),
        suffix: z.string().optional(),
        label: z.string(),
        subtext: z.string().optional(),
        icon: z.string().optional(),
      })
    ),
  }),
});

// Services schema
export const servicesSchema = z.object({
  services: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    categories: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        tagline: z.string().optional(),
        icon: z.string().optional(),
        color: z.string().optional(),
      })
    ),
    items: z.array(
      z.object({
        id: z.string(),
        slug: z.string(),
        category_id: z.string(),
        title: z.string(),
        short_description: z.string(),
        full_description: z.string().optional(),
        icon: z.string().optional(),
        featured: z.boolean().default(false),
        badge: z.string().optional(),
        features: z.array(z.string()).optional(),
        benefits: z.array(z.string()).optional(),
        technologies: z.array(z.string()).optional(),
        process: z.array(z.string()).optional(),
      })
    ),
  }),
});

// Projects schema
export const projectItemSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  client_name: z.string().optional(),
  client_industry: z.string().optional(),
  category: z.string(),
  status: z.enum(["Running", "Ongoing", "Completed", "Maintenance", "Coming Soon"]),
  status_badge_color: z.string().optional(),
  featured: z.boolean().default(false),
  short_description: z.string(),
  overview: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  full_description: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  services: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  metrics: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ).optional(),
  image: z.string().optional(),
  live_url: z.string().optional(),
  case_study_url: z.string().optional(),
});

export const projectsSchema = z.object({
  projects: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    filters: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
      })
    ).optional(),
    items: z.array(projectItemSchema),
  }),
});

// Technologies schema
export const technologiesSchema = z.object({
  technologies: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    categories: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string().optional(),
        items: z.array(
          z.object({
            name: z.string(),
            level: z.string().optional(),
            icon: z.string().optional(),
            description: z.string().optional(),
          })
        ),
      })
    ),
  }),
});

// Industries schema
export const industriesSchema = z.object({
  industries: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    items: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        icon: z.string().optional(),
        description: z.string(),
        badge: z.string().optional(),
      })
    ),
  }),
});

// Process schema
export const processSchema = z.object({
  process: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    steps: z.array(
      z.object({
        step_number: z.string(),
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        icon: z.string().optional(),
        deliverables: z.array(z.string()).optional(),
      })
    ),
  }),
});

// Testimonials schema
export const testimonialsSchema = z.object({
  testimonials: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    items: z.array(
      z.object({
        id: z.string(),
        author_name: z.string(),
        author_role: z.string(),
        company_name: z.string(),
        project_title: z.string().optional(),
        avatar: z.string().optional(),
        quote: z.string().optional(),
        rating: z.number().optional().default(5),
        badge: z.string().optional(),
        status: z.string().optional(),
        status_badge: z.string().optional(),
        category: z.string().optional(),
        verified_profile: z.boolean().optional(),
        profile_url: z.string().optional(),
        short_description: z.string().optional(),
      })
    ),
  }),
});

// FAQ schema
export const faqSchema = z.object({
  faq: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    items: z.array(
      z.object({
        id: z.string(),
        question: z.string(),
        answer: z.string(),
        category: z.string().optional(),
      })
    ),
  }),
});

// Contact schema
export const contactSchema = z.object({
  contact: z.object({
    section_badge: z.string().optional(),
    section_title: z.string(),
    section_description: z.string().optional(),
    email: z.string(),
    phone: z.string(),
    whatsapp: z.string().optional(),
    whatsapp_message: z.string().optional(),
    address: z.string(),
    working_hours: z.string().optional(),
    map_url: z.string().optional(),
    social_links: z.array(
      z.object({
        platform: z.string(),
        icon: z.string(),
        url: z.string(),
        label: z.string().optional(),
      })
    ).optional(),
    form: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      submit_button_text: z.string().default("Submit"),
      success_message: z.string().optional(),
      service_options: z.array(z.string()).default([]),
      budget_options: z.array(z.string()).default([]),
    }).optional(),
  }),
});

// SEO schema
export const seoSchema = z.object({
  seo: z.object({
    default: z.object({
      title_template: z.string().default("%s | MMT"),
      default_title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()).default([]),
      site_url: z.string().optional(),
      og_image: z.string().optional(),
      twitter_card: z.string().optional(),
      twitter_creator: z.string().optional(),
      robots: z.string().default("index, follow"),
    }),
    pages: z.record(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ).optional(),
  }),
});

// Footer schema
export const footerSchema = z.object({
  footer: z.object({
    brand: z.object({
      name: z.string(),
      full_name: z.string().optional(),
      tagline: z.string().optional(),
      badge: z.string().optional(),
    }),
    newsletter: z.object({
      enabled: z.boolean().default(true),
      title: z.string(),
      description: z.string(),
      button_text: z.string(),
      placeholder: z.string(),
    }).optional(),
    columns: z.array(
      z.object({
        title: z.string(),
        links: z.array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        ),
      })
    ),
    bottom: z.object({
      copyright: z.string(),
      legal_links: z.array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      ).optional(),
      status_indicator: z.object({
        text: z.string(),
      }).optional(),
    }),
  }),
});
