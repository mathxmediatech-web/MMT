import React from "react";
import DynamicIcon from "./DynamicIcon";

export default function Badge({
  children,
  icon,
  pulse = false,
  variant = "sky",
  className = "",
}) {
  const variantStyles = {
    sky: "bg-blue-50 text-blue-700 border-blue-200/80 shadow-blue-sm",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  };

  const selectedVariant = variantStyles[variant] || variantStyles.sky;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-sm transition-all duration-300 ${selectedVariant} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
      )}
      {icon && <DynamicIcon name={icon} className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}
