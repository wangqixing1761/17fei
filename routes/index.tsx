import Footer from '../components/Footer.tsx'

export default function Home() {
  return (
    <div class="min-h-screen w-full overflow-hidden relative" style="background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%)">
      {/* 装饰性浮动元素 */}
      <div class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-20 w-32 h-32 bg-yellow-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div class="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* 主内容 */}
      <div class="max-w-2xl mx-auto px-4 py-8 relative z-10">
        {/* Logo 区域 */}
        <div class="text-center mb-10">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-pink-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img src="/kiss-banana.png" class="w-28 h-28 relative mx-auto rounded-3xl shadow-2xl border-4 border-white/50" />
          </div>
          <h1 class="text-4xl font-bold text-white mt-6 mb-2 drop-shadow-lg tracking-tight">
            情侣飞行棋
          </h1>
          <p class="text-white/80 text-lg">专为情侣设计的趣味互动游戏</p>
          <div class="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <span class="text-yellow-300">✨</span>
            <span class="text-white text-sm font-medium">完全免费 · 无需注册</span>
          </div>
        </div>

        {/* 游戏卡片网格 */}
        <div class="grid grid-cols-2 gap-4 mb-8">
          {/* 飞行棋 */}
          <a href="/fxq/index.html" class="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="text-4xl mb-3">🎲</div>
              <h3 class="text-lg font-bold text-gray-800">趣味飞行棋</h3>
              <p class="text-sm text-white/70 mt-1">经典玩法 · 多种模式</p>
            </div>
          </a>

          {/* 任务卡牌 */}
          <a href="/card" class="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="text-4xl mb-3">🃏</div>
              <h3 class="text-lg font-bold text-gray-800">任务卡牌</h3>
              <p class="text-sm text-white/70 mt-1">9种难度 · 随机挑战</p>
            </div>
          </a>

          {/* 姿势卡牌 */}
          <a href="/position" class="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-red-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="text-4xl mb-3">💑</div>
              <h3 class="text-lg font-bold text-gray-800">姿势卡牌</h3>
              <p class="text-sm text-white/70 mt-1">100+姿势 · 随机抽取</p>
            </div>
          </a>

          {/* 姿势大全 */}
          <a href="/positions" class="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="text-4xl mb-3">🌟</div>
              <h3 class="text-lg font-bold text-gray-800">姿势大全</h3>
              <p class="text-sm text-white/70 mt-1">全部解锁 · 免费浏览</p>
            </div>
          </a>

          {/* 默契问答 */}
          <a href="/quiz" class="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="text-4xl mb-3">💕</div>
              <h3 class="text-lg font-bold text-gray-800">默契问答</h3>
              <p class="text-sm text-white/70 mt-1">测试你们的默契度</p>
            </div>
          </a>

          {/* 每日任务 */}
          <a href="/daily" class="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="text-4xl mb-3">📋</div>
              <h3 class="text-lg font-bold text-gray-800">每日任务</h3>
              <p class="text-sm text-white/70 mt-1">每日甜蜜小任务</p>
            </div>
          </a>
        </div>

        {/* 特色标签 */}
        <div class="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/50 mb-6">
          <div class="flex flex-wrap justify-center gap-2">
            <span class="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">📱 响应式设计</span>
            <span class="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">🔒 隐私安全</span>
            <span class="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">⚡ 即开即玩</span>
            <span class="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">🎮 多人互动</span>
          </div>
        </div>

        {/* 设备支持提示 */}
        <div class="text-center text-white/60 text-sm">
          <p>支持手机、平板、电脑等多种设备访问</p>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
}
