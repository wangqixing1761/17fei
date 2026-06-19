import { useEffect, useState } from "preact/hooks";

interface Props {
  positions: string[];
}

export default function PositionList({ positions }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? a : (a - 1 + positions.length) % positions.length));
  const next = () => setActive((a) => (a === null ? a : (a + 1) % positions.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {positions.map((p, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            class="group relative overflow-hidden rounded-lg focus:outline-none"
            aria-label={`查看姿势 ${i + 1}`}
          >
            <img
              src={atob(p)}
              loading="lazy"
              class="w-full rounded-lg block transition-transform duration-300 group-hover:scale-105"
              alt={`姿势 ${i + 1}`}
            />
            <span class="absolute top-1 left-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {i + 1}
            </span>
            <span class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span class="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl drop-shadow">🔍</span>
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          class="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white text-xl flex items-center justify-center transition-all"
            aria-label="关闭"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-all"
            aria-label="上一张"
          >
            ‹
          </button>

          <div class="max-w-3xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={atob(positions[active])}
              class="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain"
              alt={`姿势 ${active + 1}`}
            />
            <div class="mt-3 text-white/80 text-sm bg-white/10 px-4 py-1.5 rounded-full">
              第 {active + 1} / {positions.length} 个
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-all"
            aria-label="下一张"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
