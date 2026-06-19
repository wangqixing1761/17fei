// 客户端轻量特效工具：撒花 + 震动反馈。
// 所有函数在 SSR 环境（无 document/navigator）下安全降级为 no-op。

const CONFETTI_COLORS = [
  "#FFD700",
  "#E91E63",
  "#3498DB",
  "#27AE60",
  "#FF7043",
  "#AB47BC",
  "#ffffff",
];

/** 触发设备震动（移动端），桌面端或不支持时静默忽略。 */
export function vibrate(pattern: number | number[]): void {
  if (typeof navigator === "undefined") return;
  const nav = navigator as Navigator & { vibrate?: (p: number | number[]) => boolean };
  if (typeof nav.vibrate === "function") {
    try {
      nav.vibrate(pattern);
    } catch {
      // 部分浏览器在非用户手势下会抛错，忽略即可
    }
  }
}

/** 从顶部撒下彩色纸屑，使用 Web Animations API，无需额外 CSS。 */
export function launchConfetti(count = 80): void {
  if (typeof document === "undefined") return;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.style.cssText = [
      "position:fixed",
      "top:-16px",
      `left:${Math.random() * 100}vw`,
      "width:10px",
      "height:14px",
      "border-radius:2px",
      "z-index:9999",
      "pointer-events:none",
      "will-change:transform",
      `background:${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]}`,
    ].join(";");

    const duration = 2200 + Math.random() * 1800;
    const delay = Math.random() * 600;
    const xEnd = (Math.random() - 0.5) * 240;
    const rot = Math.random() * 720 - 360;

    piece.animate(
      [
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${xEnd}px, 105vh) rotate(${rot}deg)`, opacity: 0.9 },
      ],
      { duration, delay, easing: "cubic-bezier(0.25,0.6,0.5,1)", fill: "forwards" },
    );

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), duration + delay + 200);
  }
}
