import React from "react";

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  variant = "glass",
  padding = "default",
  ...props
}) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    default: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  const variantStyles = {
    glass:
      "bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-blue-card",
    solid:
      "bg-white border border-slate-150 shadow-sm",
    skyGradient:
      "bg-gradient-to-br from-white via-blue-50/40 to-blue-100/30 border border-blue-150/80 shadow-blue-sm",
    darkAccent:
      "bg-slate-900 text-white border border-slate-800 shadow-xl",
  };

  const hoverClass = hoverEffect
    ? "transition-all duration-300 hover:shadow-blue-md hover:border-blue-300 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`rounded-2xl relative overflow-hidden ${variantStyles[variant] || variantStyles.glass} ${
        paddingStyles[padding] || paddingStyles.default
      } ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
