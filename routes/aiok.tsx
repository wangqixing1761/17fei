import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function AIOK() {
  return (
    <>
      <Head>
        <title>订阅成功 - 情侣飞行棋</title>
      </Head>
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)">
        <div class="max-w-lg mx-auto px-4 py-8 relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div class="text-center">
            <div class="text-8xl mb-6">✅</div>
            <h1 class="text-3xl font-bold text-white mb-4">订阅成功！</h1>
            <p class="text-white/80 text-lg mb-8">感谢您的订阅，功能上线后会收到邮件通知</p>
            <a 
              href="/" 
              class="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <span>←</span>
              <span>返回首页</span>
            </a>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
