import { Head } from "$fresh/runtime.ts";
import Footer from '../components/Footer.tsx'
import DailyTasks from '../islands/daily-tasks.tsx'

export default function Daily() {
  return (
    <>
      <Head>
        <title>每日任务 - 情侣飞行棋</title>
      </Head>
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #a8edea 100%)">
        {/* 装饰元素 */}
        <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/3 right-20 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div class="absolute bottom-40 left-1/4 w-28 h-28 bg-green-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div class="max-w-lg mx-auto px-4 py-8 relative z-10">
          {/* 顶部导航 */}
          <div class="flex items-center justify-center mb-4">
            <a href="/" class="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-all">
              <span class="text-white">←</span>
              <img src="/kiss-banana.png" class="w-8 h-8 rounded-full" />
              <span class="text-white font-medium">首页</span>
            </a>
          </div>

          {/* 标题 */}
          <div class="text-center mb-6">
            <div class="text-5xl mb-3">📋</div>
            <h1 class="text-2xl font-bold text-white">每日甜蜜任务</h1>
            <p class="text-white/70 text-sm mt-1">每天三个小任务，让感情升温</p>
          </div>

          {/* 任务内容 */}
          <DailyTasks />
        </div>
        
        <Footer />
      </div>
    </>
  )
}
