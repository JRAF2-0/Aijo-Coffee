function Bean({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 90"
      className={className}
      fill="currentColor"
    >
      <path d="M30 2C13 2 2 22 2 45s11 43 28 43 28-20 28-43S47 2 30 2z" />
      <path
        d="M30 8c-10 12-10 62 0 74"
        stroke="#1c1917"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CoffeeBeanDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Bean
        className="bean-item absolute top-10 left-[8%] w-8 h-12 text-amber-800/30 rotate-12"
      />
      <Bean
        className="bean-item absolute top-32 right-[12%] w-10 h-14 text-amber-800/20 -rotate-12"
      />
      <Bean
        className="bean-item absolute bottom-16 left-[20%] w-6 h-9 text-amber-800/25 rotate-45"
      />
      <Bean
        className="bean-item absolute bottom-24 right-[25%] w-8 h-12 text-amber-800/20 -rotate-6"
      />
    </div>
  );
}