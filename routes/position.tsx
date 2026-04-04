import { Head } from "$fresh/runtime.ts";

import Footer from '../components/Footer.tsx'

export default function Card() {
  return (
    <>
      <Head>
        <link href="/card.css" rel="stylesheet"></link>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/howler.min.js"></script>
        <script src="/positions.js"></script>
        <title>情趣姿势卡牌游戏</title>
      </Head>
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%)">
        {/* 装饰元素 */}
        <div class="absolute top-20 left-10 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute bottom-40 right-20 w-32 h-32 bg-yellow-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        <div class="max-w-lg mx-auto relative z-10">
          {/* 顶部导航 */}
          <div class="flex items-center justify-center p-4">
            <a href="/" class="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-2 rounded-full transition-all">
              <span class="text-white">←</span>
              <img src="/kiss-banana.png" class="w-8 h-8 rounded-full" />
            </a>
          </div>

          {/* 标题 */}
          <div class="text-center mb-4">
            <h1 class="text-2xl font-bold text-white drop-shadow-lg">💑 姿势卡牌</h1>
            <p class="text-white/70 text-sm mt-1">共 <span id="position-count" class="font-bold">100</span> 个姿势</p>
          </div>

          {/* 卡牌区域 */}
          <div class="flex flex-col items-center py-4">
            <div class="relative">
              {/* 卡牌光晕 */}
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-3xl blur-xl transform scale-110"></div>
              
              <input type="checkbox" id="card" checked class="hidden" />
              <label for="card" class="cursor-pointer block">
                <div class="cardWrapper relative">
                  <div class="cardRandom h-full flex flex-col items-center justify-center">
                    <div class="relative p-4 w-full h-full flex items-center justify-center">
                      <img src="" class="w-full rounded-lg shadow-lg" id="position" alt="姿势图片" />
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* 提示信息 */}
            <div class="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
              <p class="text-white font-medium">✨ 点击卡牌抽取姿势</p>
              <p class="text-white/70 text-sm mt-1">完全免费 · 随机抽取</p>
            </div>

            {/* 姿势数量提示 */}
            <div class="mt-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span class="text-yellow-300">🌟</span>
              <span class="text-white text-sm">100个姿势全部解锁</span>
            </div>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    </>
  )
}
