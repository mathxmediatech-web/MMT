import React from 'react';

export default function Logo({ className = "w-48 h-auto", dark = false }) {
  const textColor = dark ? "#ffffff" : "#0f172a";
  const lineColor = dark ? "#334155" : "#cbd5e1";

  return (
    <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Top Arc */}
      <path 
        d="M 120 45 A 110 70 0 0 1 290 45" 
        stroke="url(#top-arc)" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      
      {/* mmt text */}
      <text 
        x="200" 
        y="110" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="900" 
        fontSize="96" 
        textAnchor="middle" 
        fill="url(#mmt-grad)" 
        letterSpacing="-4"
      >
        mmt
      </text>
      
      {/* Bottom Arc */}
      <path 
        d="M 110 120 A 110 60 0 0 0 280 120" 
        stroke="url(#bottom-arc)" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      
      {/* MathX Media & Tech text */}
      <text 
        x="200" 
        y="155" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="700" 
        fontSize="24" 
        textAnchor="middle" 
        fill={textColor}
        letterSpacing="0.5"
      >
        Math<tspan fill="#3b82f6">X</tspan> Media &amp; Tech
      </text>

      {/* Decorative Bottom Dots/Lines */}
      <line x1="110" y1="172" x2="175" y2="172" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
      <circle cx="188" cy="172" r="3.5" fill="#60a5fa" />
      <circle cx="200" cy="172" r="4.5" fill="#3b82f6" />
      <circle cx="212" cy="172" r="3.5" fill="#2563eb" />
      <line x1="225" y1="172" x2="290" y2="172" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />

      {/* Gradients */}
      <defs>
        <linearGradient id="mmt-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="40%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="top-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
          <stop offset="20%" stopColor="#60a5fa" />
          <stop offset="80%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bottom-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
          <stop offset="20%" stopColor="#2563eb" />
          <stop offset="80%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
