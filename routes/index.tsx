import Footer from "../components/Footer.tsx";

const games = [
  {
    href: "/card",
    emoji: "🃏",
    title: "任务卡牌",
    desc: "9 种难度 · 随机挑战",
    chip: "from-purple-300 to-fuchsia-300",
    glow: "group-hover:shadow-fuchsia-200/50",
  },
  {
    href: "/position",
    emoji: "💑",
    title: "姿势卡牌",
    desc: "100+ 姿势 · 随机抽取",
    chip: "from-pink-300 to-rose-300",
    glow: "group-hover:shadow-rose-200/50",
  },
  {
    href: "/positions",
    emoji: "🌟",
    title: "姿势大全",
    desc: "全部解锁 · 免费浏览",
    chip: "from-amber-200 to-orange-300",
    glow: "group-hover:shadow-orange-200/50",
  },
  {
    href: "/quiz",
    emoji: "💕",
    title: "默契问答",
    desc: "双人轮流 · 测默契",
    chip: "from-sky-300 to-blue-300",
    glow: "group-hover:shadow-sky-200/50",
  },
  {
    href: "/daily",
    emoji: "📋",
    title: "每日任务",
    desc: "连续打卡 · 升温感情",
    chip: "from-emerald-300 to-teal-300",
    glow: "group-hover:shadow-emerald-200/50",
  },
];

const features = [
  { icon: "📱", label: "响应式设计" },
  { icon: "🔒", label: "隐私安全" },
  { icon: "⚡", label: "即开即玩" },
  { icon: "🎮", label: "多人互动" },
];

const homeStyles = `
@keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
.h-rise { opacity: 0; animation: fadeUp .6s cubic-bezier(0.22,1,0.36,1) forwards; }
.h-float { animation: floatY 4s ease-in-out infinite; }
.h-gradient-text {
  background: linear-gradient(90deg, #C66FBC, #F19EC2, #9B8CDE, #C66FBC);
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
  animation: shimmer 5s linear infinite;
}
`;

export default function Home() {
  return (
    <div
      class="min-h-screen w-full overflow-hidden relative"
      style="background: linear-gradient(160deg, #FBE7F0 0%, #F3E1FB 45%, #E3ECFD 100%)"
    >
      <style dangerouslySetInnerHTML={{ __html: homeStyles }} />

      {/* 装饰性浮动光斑 */}
      <div class="absolute top-16 left-8 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl h-float"></div>
      <div class="absolute top-44 right-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl h-float" style={{ animationDelay: "1s" }}></div>
      <div class="absolute bottom-32 left-1/4 w-28 h-28 bg-sky-200/40 rounded-full blur-2xl h-float" style={{ animationDelay: "2s" }}></div>
      <div class="absolute -bottom-10 right-1/4 w-48 h-48 bg-rose-200/30 rounded-full blur-3xl"></div>

      <div class="max-w-2xl mx-auto px-4 py-10 relative z-10">
        {/* Logo / 标题 */}
        <div class="text-center mb-9 h-rise">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-pink-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img
              src="/kiss-banana.png"
              class="w-24 h-24 relative mx-auto rounded-3xl shadow-xl border-4 border-white/80 h-float"
            />
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold mt-6 mb-2 tracking-tight h-gradient-text">
            情侣飞行棋
          </h1>
          <p class="text-purple-800/70 text-base sm:text-lg font-medium">专为情侣设计的趣味互动游戏</p>
          <div class="mt-4 inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/80 shadow-sm">
            <span class="text-amber-400">✨</span>
            <span class="text-purple-700 text-sm font-medium">完全免费 · 无需注册 · 数据本地保存</span>
          </div>
        </div>

        {/* 旗舰：飞行棋大卡片 */}
        <a
          href="/fxq/new/chess.html"
          class="group relative block rounded-3xl p-6 mb-5 overflow-hidden shadow-xl border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-rise"
          style="background: linear-gradient(135deg, #D7C4F0 0%, #F3C0DC 60%, #FBD0C4 100%); animation-delay: .08s"
        >
          <div class="absolute -top-8 -right-8 w-40 h-40 bg-white/30 rounded-full blur-2xl group-hover:bg-white/40 transition-colors"></div>
          <div class="absolute -bottom-10 -left-6 w-36 h-36 bg-amber-100/40 rounded-full blur-2xl"></div>
          <div class="relative flex items-center gap-4">
            <div class="text-5xl sm:text-6xl h-float flex-shrink-0">🎲</div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <h2 class="text-xl sm:text-2xl font-bold text-purple-900">趣味飞行棋</h2>
                <span class="text-[10px] font-bold bg-white/80 text-rose-500 px-2 py-0.5 rounded-full shadow-sm">推荐</span>
              </div>
              <p class="text-purple-800/70 text-sm mt-1">6 大模式 · 撒花特效 · 支持自定义每格内容</p>
              <div class="mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-rose-400 to-pink-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg group-hover:gap-2.5 transition-all">
                <span>立即开玩</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </a>

        {/* 其他游戏网格 */}
        <div class="grid grid-cols-2 gap-4 mb-8">
          {games.map((g, i) => (
            <a
              key={g.href}
              href={g.href}
              class={`group relative bg-white/85 backdrop-blur-lg rounded-3xl p-5 shadow-lg hover:shadow-xl ${g.glow} transition-all duration-300 hover:-translate-y-1 border border-white/70 overflow-hidden h-rise`}
              style={{ animationDelay: `${0.14 + i * 0.06}s` }}
            >
              <div class={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.chip} flex items-center justify-center text-2xl shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
                {g.emoji}
              </div>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-gray-700">{g.title}</h3>
                <span class="text-gray-300 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all">→</span>
              </div>
              <p class="text-xs text-gray-500 mt-1">{g.desc}</p>
            </a>
          ))}
        </div>

        {/* 特色标签 */}
        <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/70 mb-6 h-rise" style={{ animationDelay: ".5s" }}>
          <div class="grid grid-cols-4 gap-2 text-center">
            {features.map((f) => (
              <div key={f.label} class="flex flex-col items-center gap-1">
                <span class="text-2xl">{f.icon}</span>
                <span class="text-purple-600 text-xs font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="text-center text-purple-700/60 text-sm">
          <p>支持手机、平板、电脑等多种设备访问</p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
