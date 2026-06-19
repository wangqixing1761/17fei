import Footer from '../components/Footer.tsx'

export default function About() {
    return (
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(160deg, #FCE3EF 0%, #F4DCF7 50%, #E6DCFB 100%)">
        {/* 装饰性浮动元素 */}
        <div class="absolute top-20 right-10 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/2 left-0 w-60 h-60 bg-purple-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div class="absolute bottom-20 right-1/4 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.2s'}}></div>

        <div class="max-w-2xl mx-auto px-4 py-8 relative z-10">
          {/* Logo 区域 */}
          <div class="text-center mb-10">
            <div class="relative inline-block">
              <div class="absolute inset-0 bg-pink-300/50 rounded-full blur-2xl animate-pulse"></div>
              <a href="/">
                <img src="/kiss-banana.png" class="w-32 h-32 relative mx-auto rounded-full shadow-2xl border-4 border-white/50" />
              </a>
            </div>
            <h1 class="text-4xl font-bold text-purple-800 mt-6 mb-2">
              情侣飞行棋
            </h1>
            <p class="text-purple-700/70 text-lg">专为情侣设计的趣味互动游戏</p>
          </div>

          {/* 主功能卡片 */}
          <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-white/50">
            <h2 class="text-xl font-bold text-pink-600 mb-5 flex items-center gap-3">
              <span class="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                🎮
              </span>
              游戏特色
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-transform cursor-pointer">
                <div class="text-4xl mb-2">🎲</div>
                <div class="font-bold text-gray-800">趣味飞行棋</div>
                <div class="text-xs text-gray-500 mt-1">经典桌游玩法</div>
              </div>
              <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-transform cursor-pointer">
                <div class="text-4xl mb-2">🃏</div>
                <div class="font-bold text-gray-800">任务卡牌</div>
                <div class="text-xs text-gray-500 mt-1">9种难度版本</div>
              </div>
              <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-transform cursor-pointer">
                <div class="text-4xl mb-2">💑</div>
                <div class="font-bold text-gray-800">姿势卡牌</div>
                <div class="text-xs text-gray-500 mt-1">100+种姿势</div>
              </div>
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-transform cursor-pointer">
                <div class="text-4xl mb-2">🌟</div>
                <div class="font-bold text-gray-800">姿势大全</div>
                <div class="text-xs text-gray-500 mt-1">免费浏览全部</div>
              </div>
            </div>
          </div>

          {/* 关于我们 */}
          <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-white/50">
            <h2 class="text-xl font-bold text-pink-600 mb-5 flex items-center gap-3">
              <span class="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                💝
              </span>
              关于我们
            </h2>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-3 bg-white/60 rounded-xl">
                <span class="text-2xl">✨</span>
                <div>
                  <div class="font-semibold text-gray-800">专为情侣设计</div>
                  <div class="text-sm text-gray-600">这是情侣间增进感情的小游戏</div>
                </div>
              </div>
              <div class="flex items-start gap-4 p-3 bg-white/60 rounded-xl">
                <span class="text-2xl">🎯</span>
                <div>
                  <div class="font-semibold text-gray-800">完全免费</div>
                  <div class="text-sm text-gray-600">无需注册登录，所有内容免费使用</div>
                </div>
              </div>
              <div class="flex items-start gap-4 p-3 bg-white/60 rounded-xl">
                <span class="text-2xl">📱</span>
                <div>
                  <div class="font-semibold text-gray-800">多设备支持</div>
                  <div class="text-sm text-gray-600">手机、平板、电脑都能玩</div>
                </div>
              </div>
              <div class="flex items-start gap-4 p-3 bg-white/60 rounded-xl">
                <span class="text-2xl">🔒</span>
                <div>
                  <div class="font-semibold text-gray-800">隐私安全</div>
                  <div class="text-sm text-gray-600">不获取任何隐私信息</div>
                </div>
              </div>
            </div>
          </div>

          {/* 使用须知 */}
          <div class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-5 mb-6 border border-white/50">
            <h2 class="text-lg font-bold text-pink-600 mb-4 flex items-center gap-3">
              <span class="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center text-white text-sm shadow">
                📖
              </span>
              使用须知
            </h2>
            <div class="space-y-2 text-gray-700">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>请在双方自愿的前提下进行游戏</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>如有任何不适，请立即停止</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>本网站仅供娱乐使用</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>祝您和您的伴侣玩得开心</span>
              </div>
            </div>
          </div>

          {/* 返回按钮 */}
          <div class="text-center">
            <a href="/" class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50">
              <span>🚀</span>
              <span>开始游戏</span>
            </a>
          </div>

          {/* 底部 */}
          <div class="text-center mt-8 text-purple-600/60 text-sm">
            <p>Made with 💕 for couples</p>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    );
}
