import React from "react";
import Badge from "./Badge";

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  description,
  align = "center",
  className = "",
}) {
  const alignClass = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-10 ${alignClass} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge icon={badgeIcon} pulse={false} variant="sky">
            {badge}
          </Badge>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
          {title}{" "}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
              {titleHighlight}
            </span>
          )}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
