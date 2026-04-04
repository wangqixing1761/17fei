import { Head } from "$fresh/runtime.ts";
import Footer from '../components/Footer.tsx'
import QuizPlay from '../islands/quiz-play.tsx'

export default function Quiz() {
  return (
    <>
      <Head>
        <title>默契问答 - 情侣飞行棋</title>
      </Head>
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)">
        {/* 装饰元素 */}
        <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/3 right-20 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div class="absolute bottom-40 left-1/4 w-28 h-28 bg-pink-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
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
            <div class="text-5xl mb-3">💕</div>
            <h1 class="text-2xl font-bold text-white">默契问答</h1>
            <p class="text-white/80 text-sm mt-1">回答同样的问题，看看你们的默契程度</p>
          </div>

          {/* 游戏说明 */}
          <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 mb-6 border border-white/50">
            <div class="text-center text-purple-600 font-medium mb-3">📖 游戏规则</div>
            <div class="text-sm text-gray-600 space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">1</span>
                <span>两人各自写下自己的答案</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">2</span>
                <span>点击"揭晓答案"同时展示</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">3</span>
                <span>答案一致即为默契成功</span>
              </div>
            </div>
          </div>

          {/* 游戏内容 */}
          <QuizPlay />
        </div>
        
        <Footer />
      </div>
    </>
  )
}
