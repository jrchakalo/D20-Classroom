'use client';

import type { CSSProperties } from 'react';

const STARS = Array.from({ length: 42 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 78}%`,
  size: index % 5 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  delay: `${(index % 9) * 0.55}s`,
  duration: `${3.4 + (index % 5) * 0.7}s`,
}));

const BATS = [
  { top: '9%', width: 88, duration: 52, delay: -14, opacity: 0.55 },
  { top: '22%', width: 56, duration: 44, delay: -31, opacity: 0.42 },
  { top: '36%', width: 100, duration: 66, delay: -6, opacity: 0.3 },
  { top: '14%', width: 48, duration: 58, delay: -44, opacity: 0.4 },
  { top: '30%', width: 72, duration: 47, delay: -22, opacity: 0.32 },
];

function Bat({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" aria-hidden="true" className={className} fill="currentColor">
      <g className="hw-bat-wing hw-bat-wing-left">
        <path d="M95 30C72 18 40 11 3 15C13 22 15 29 10 38C23 31 31 34 33 43C45 36 55 39 59 50C72 43 85 45 95 52Z" />
      </g>
      <g className="hw-bat-wing hw-bat-wing-right">
        <path d="M105 30C128 18 160 11 197 15C187 22 185 29 190 38C177 31 169 34 167 43C155 36 145 39 141 50C128 43 115 45 105 52Z" />
      </g>
      <path d="M100 28c-5 0-8 4-8 10 0 8 3 15 8 19 5-4 8-11 8-19 0-6-3-10-8-10Z" />
      <path d="M96 25 90 11l11 9Z" />
      <path d="M104 25 110 11l-11 9Z" />
      <circle cx="96.5" cy="30" r="1.4" fill="#0b0517" />
      <circle cx="103.5" cy="30" r="1.4" fill="#0b0517" />
      <path
        d="M96 57l-2 4M104 57l2 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function HalloweenBackdrop({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 overflow-hidden transition-opacity duration-700 ${
        dimmed ? 'opacity-40' : 'opacity-100'
      }`}
    >
      <div className="hw-moon" />
      <div className="hw-moon-haze" />

      {STARS.map((star, index) => (
        <span
          key={index}
          className="hw-star"
          style={
            {
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            } as CSSProperties
          }
        />
      ))}

      {BATS.map((bat, index) => (
        <div
          key={index}
          className="hw-bat text-[#c4a6ff]"
          style={
            {
              top: bat.top,
              width: bat.width,
              opacity: bat.opacity,
              animationDuration: `${bat.duration}s`,
              animationDelay: `${bat.delay}s`,
              '--hw-flap-delay': `${index * -0.27}s`,
            } as CSSProperties
          }
        >
          <Bat className="drop-shadow-[0_0_12px_rgba(168,85,247,0.55)]" />
        </div>
      ))}

      <div className="hw-fog hw-fog-one" />
      <div className="hw-fog hw-fog-two" />

      <div className="hw-pumpkin">
        <svg viewBox="0 0 220 200" className="h-full w-full">
          <path
            d="M110 58c-9-17-3-31 12-38-2 12 2 23 9 29"
            fill="none"
            stroke="#4ade80"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <ellipse cx="110" cy="122" rx="78" ry="62" fill="#f97316" />
          <ellipse cx="110" cy="122" rx="42" ry="62" fill="#fb923c" opacity="0.75" />
          <ellipse cx="70" cy="122" rx="30" ry="55" fill="#ea580c" opacity="0.32" />
          <ellipse cx="150" cy="122" rx="30" ry="55" fill="#ea580c" opacity="0.32" />
          <path d="M78 102 64 82l28 8Z" fill="#1a0b2e" />
          <path d="M142 102l14-20-28 8Z" fill="#1a0b2e" />
          <path d="M92 114l18-11 18 11-8 9h-20Z" fill="#1a0b2e" />
          <path d="M70 142c12 12 24 18 40 18s28-6 40-18c-11-8-25-12-40-12s-29 4-40 12Z" fill="#1a0b2e" />
        </svg>
      </div>

      <div className="hw-vignette" />
    </div>
  );
}
