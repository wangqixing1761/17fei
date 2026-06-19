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
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(160deg, #FCE3EF 0%, #F4DCF7 50%, #E6DCFB 100%)">
        {/* 装饰元素 */}
        <div class="absolute top-10 right-10 w-20 h-20 bg-pink-200/40 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 left-10 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.6s'}}></div>
        
        <div class="max-w-lg mx-auto relative z-10">
          {/* 顶部导航 */}
          <div class="flex items-center justify-between p-4">
            <a href="/" class="flex items-center gap-2 bg-white/70 backdrop-blur-sm hover:bg-white/90 px-3 py-2 rounded-full transition-all shadow-sm">
              <span class="text-purple-600">←</span>
              <img src="/kiss-banana.png" class="w-8 h-8 rounded-full" />
            </a>
            <div class="text-purple-800 font-bold text-lg">
              <span id="title">恋爱版</span>任务卡牌
            </div>
            <a href="/card_version" class="bg-white/70 backdrop-blur-sm hover:bg-white/90 text-purple-700 text-sm px-4 py-2 rounded-full transition-all font-medium shadow-sm">
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
            <div class="mt-6 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 text-center shadow-sm">
              <p class="text-purple-700 font-medium">🎯 点击卡牌抽取任务</p>
              <p class="text-purple-600/70 text-sm mt-1">轮流完成任务，无法完成认输</p>
            </div>

            {/* 版本选择提示 */}
            <div class="mt-4 flex flex-wrap justify-center gap-2">
              <span class="bg-white/60 text-purple-700 text-xs px-3 py-1 rounded-full shadow-sm">💕 恋爱版</span>
              <span class="bg-white/60 text-purple-700 text-xs px-3 py-1 rounded-full shadow-sm">🔥 热恋版</span>
              <span class="bg-white/60 text-purple-700 text-xs px-3 py-1 rounded-full shadow-sm">💑 同居版</span>
              <span class="bg-white/60 text-purple-700 text-xs px-3 py-1 rounded-full shadow-sm">🌙 更多版本</span>
            </div>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    </>
  )
}
