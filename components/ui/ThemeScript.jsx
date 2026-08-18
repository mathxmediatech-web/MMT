import React from "react";

/**
 * Injects dynamic CSS variables directly from theme.yaml
 */
export default function ThemeScript({ theme }) {
  if (!theme || !theme.colors) return null;

  const { colors, border_radius = "1rem" } = theme;

  const cssVariables = `
    :root {
      --color-primary: ${colors.primary || "#0ea5e9"};
      --color-primary-dark: ${colors.primary_dark || "#0284c7"};
      --color-primary-light: ${colors.primary_light || "#38bdf8"};
      --color-secondary: ${colors.secondary || "#0284c7"};
      --color-secondary-light: ${colors.secondary_light || "#e0f2fe"};
      --color-accent: ${colors.accent || "#38bdf8"};
      --color-accent-glow: ${colors.accent_glow || "#06b6d4"};
      --color-bg: ${colors.background || "#ffffff"};
      --color-bg-alt: ${colors.background_alt || "#f0f9ff"};
      --color-surface: ${colors.surface || "#ffffff"};
      --color-surface-subtle: ${colors.surface_subtle || "#f8fafc"};
      --color-surface-elevated: ${colors.surface_elevated || "#ffffff"};
      --color-text: ${colors.text || "#0f172a"};
      --color-text-muted: ${colors.text_muted || "#64748b"};
      --color-text-light: ${colors.text_light || "#94a3b8"};
      --color-border: ${colors.border || "#e2e8f0"};
      --color-border-accent: ${colors.border_accent || "#bae6fd"};
      --radius-default: ${border_radius};
    }
  `;

  return (
    <style
      id="mmt-theme-vars"
      dangerouslySetInnerHTML={{ __html: cssVariables }}
    />
  );
}
