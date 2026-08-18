import React from "react";
import Link from "next/link";
import DynamicIcon from "./DynamicIcon";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white shadow-blue-md hover:shadow-blue-lg hover:-translate-y-0.5 border border-blue-400/30",
    secondary:
      "bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 border border-blue-200/80 shadow-blue-sm hover:-translate-y-0.5",
    outline:
      "bg-white/90 hover:bg-white text-slate-800 hover:text-blue-600 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    white:
      "bg-white hover:bg-slate-50 text-blue-600 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-slate-100",
    ghost:
      "text-slate-600 hover:text-blue-600 hover:bg-blue-50/80",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const iconElement = icon ? (
    <DynamicIcon
      name={icon}
      className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"}
    />
  ) : null;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={combinedClass}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {icon && iconPosition === "left" && iconElement}
        <span>{children}</span>
        {icon && iconPosition === "right" && iconElement}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {icon && iconPosition === "left" && iconElement}
      <span>{children}</span>
      {icon && iconPosition === "right" && iconElement}
    </button>
  );
}
