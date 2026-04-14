export default function Marquee() {
  const items = [
    'LICENSED', 'INSURED', '24/7 EMERGENCY', 'FAST RESPONSE',
    'CALIFORNIA CERTIFIED', 'RESIDENTIAL', 'COMMERCIAL', 'AUTOMOTIVE',
    'BACKGROUND CHECKED', 'ALOA CERTIFIED', 'NO SURPRISE CHARGES', 'FREE ESTIMATES',
  ];

  const row1 = [...items, ...items];
  const row2 = [...items, ...items];

  return (
    <div className="bg-[#0f1e17] py-3 overflow-hidden marquee-wrap">
      {/* Row 1 — scrolls left */}
      <div className="marquee-track-left whitespace-nowrap mb-1">
        {row1.map((item, i) => (
          <span
            key={`r1-${i}`}
            className="font-display text-[13px] font-medium uppercase tracking-wider text-[#d6b328]/80 mx-5"
          >
            {item} <span className="text-[#d6b328]/40">◆</span>
          </span>
        ))}
      </div>
      {/* Row 2 — scrolls right */}
      <div className="marquee-track-right whitespace-nowrap">
        {row2.map((item, i) => (
          <span
            key={`r2-${i}`}
            className="font-display text-[13px] font-medium uppercase tracking-wider text-[#d6b328]/80 mx-5"
          >
            {item} <span className="text-[#d6b328]/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
