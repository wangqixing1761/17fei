import { Head } from "$fresh/runtime.ts";

import Footer from '../components/Footer.tsx'

export default function Card() {
  return (
    <>
      <Head>
        <link href="/card.css" rel="stylesheet"></link>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/howler.min.js"></script>
        <script src="/tasks.js"></script>
        <script src="/card.js"></script>
        <title>情趣任务卡牌游戏</title>
      </Head>
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%)">
        {/* 装饰元素 */}
        <div class="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 left-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.6s'}}></div>
        
        <div class="max-w-lg mx-auto relative z-10">
          {/* 顶部导航 */}
          <div class="flex items-center justify-between p-4">
            <a href="/" class="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-2 rounded-full transition-all">
              <span class="text-white">←</span>
              <img src="/kiss-banana.png" class="w-8 h-8 rounded-full" />
            </a>
            <div class="text-white font-bold text-lg drop-shadow">
              <span id="title">恋爱版</span>任务卡牌
            </div>
            <a href="/card_version" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm px-4 py-2 rounded-full transition-all font-medium">
              切换版本
            </a>
          </div>

          {/* 卡牌区域 */}
          <div class="flex flex-col items-center py-8">
            <div class="relative">
              {/* 卡牌光晕 */}
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-3xl blur-xl transform scale-110"></div>
              
              <input type="checkbox" id="card" checked class="hidden" />
              <label for="card" class="cursor-pointer block">
                <div class="cardWrapper relative">
                  <div class="cardRandom h-full flex flex-col items-center justify-center">
                    <div id="content" style="writing-mode: vertical-rl" class="p-6 font-bold text-2xl text-pink-600 select-none">
                      点击翻转抽卡
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* 提示信息 */}
            <div class="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
              <p class="text-white font-medium">🎯 点击卡牌抽取任务</p>
              <p class="text-white/70 text-sm mt-1">轮流完成任务，无法完成认输</p>
            </div>

            {/* 版本选择提示 */}
            <div class="mt-4 flex flex-wrap justify-center gap-2">
              <span class="bg-white/10 text-white text-xs px-3 py-1 rounded-full">💕 恋爱版</span>
              <span class="bg-white/10 text-white text-xs px-3 py-1 rounded-full">🔥 热恋版</span>
              <span class="bg-white/10 text-white text-xs px-3 py-1 rounded-full">💑 同居版</span>
              <span class="bg-white/10 text-white text-xs px-3 py-1 rounded-full">🌙 更多版本</span>
            </div>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    </>
  )
}
