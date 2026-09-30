interface ProjectMediaProps {
  projectId: string;
  title: string;
  image?: string;
  videoLoop?: string;
  alt?: string;
  poster?: string;
}

function hashProjectId(value: string) {
  return Array.from(value).reduce((hash, character) => {
    return (Math.imul(hash, 31) + character.charCodeAt(0)) >>> 0;
  }, 2166136261);
}

function AbstractFallback({ projectId, title }: Pick<ProjectMediaProps, "projectId" | "title">) {
  const seed = hashProjectId(projectId);
  const hue = seed % 360;
  const secondaryHue = (hue + 48 + (seed % 72)) % 360;
  const pattern = seed % 3;
  const gradientId = `project-gradient-${projectId.replace(/[^a-z0-9]/gi, "-")}`;

  return (
    <svg
      viewBox="0 0 960 600"
      className="h-full w-full"
      role="img"
      aria-label={`${title} abstract project artwork`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 52% 20%)`} />
          <stop offset="55%" stopColor={`hsl(${secondaryHue} 45% 14%)`} />
          <stop offset="100%" stopColor="hsl(220 18% 8%)" />
        </linearGradient>
      </defs>
      <rect width="960" height="600" fill={`url(#${gradientId})`} />
      {pattern === 0 &&
        Array.from({ length: 9 }).map((_, index) => (
          <circle
            key={index}
            cx={120 + ((index * 137 + seed) % 760)}
            cy={70 + ((index * 83 + seed) % 460)}
            r={28 + ((index * 19 + seed) % 92)}
            fill="none"
            stroke={`hsl(${(hue + index * 12) % 360} 72% 67% / ${0.16 + (index % 3) * 0.08})`}
            strokeWidth={2 + (index % 3)}
          />
        ))}
      {pattern === 1 &&
        Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M ${-80 + index * 94} 620 L ${180 + index * 94} -20`}
            stroke={`hsl(${(secondaryHue + index * 7) % 360} 70% 68% / ${0.12 + (index % 4) * 0.05})`}
            strokeWidth={10 + ((seed + index) % 26)}
          />
        ))}
      {pattern === 2 &&
        Array.from({ length: 18 }).map((_, index) => {
          const size = 34 + ((seed + index * 17) % 86);
          return (
            <rect
              key={index}
              x={(index * 151 + seed) % 900}
              y={(index * 97 + seed) % 540}
              width={size}
              height={size}
              fill={`hsl(${(hue + index * 9) % 360} 64% 62% / ${0.08 + (index % 5) * 0.04})`}
              transform={`rotate(${(seed + index * 11) % 45} ${(index * 151 + seed) % 900} ${(index * 97 + seed) % 540})`}
            />
          );
        })}
      <path
        d={`M0 ${420 + (seed % 80)} C240 ${260 + (seed % 120)}, 620 ${520 - (seed % 90)}, 960 ${230 + (seed % 110)}`}
        fill="none"
        stroke={`hsl(${secondaryHue} 82% 72% / 0.42)`}
        strokeWidth="2"
      />
      <text x="54" y="536" fill="white" fillOpacity="0.72" fontSize="18" letterSpacing="4">
        {projectId.toUpperCase()}
      </text>
    </svg>
  );
}

/** Browser-frame media with deterministic, project-specific artwork as its fallback. */
export function ProjectMedia({
  projectId,
  title,
  image,
  videoLoop,
  alt,
  poster,
}: ProjectMediaProps) {
  return (
    <figure className="overflow-hidden border border-line bg-surface shadow-2xl shadow-black/20">
      <div
        className="flex h-9 items-center gap-2 border-b border-line bg-surface-2 px-3"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-accent/70" />
        <span className="ml-3 h-3 flex-1 rounded-sm border border-line bg-background/60" />
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-background sm:aspect-[16/10]">
        {image ? (
          <img
            src={image}
            alt={alt ?? title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : videoLoop ? (
          <video
            src={videoLoop}
            poster={poster}
            aria-label={alt ?? title}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <AbstractFallback projectId={projectId} title={title} />
        )}
      </div>
    </figure>
  );
}
