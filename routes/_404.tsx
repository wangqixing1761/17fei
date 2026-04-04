import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - 页面不存在</title>
      </Head>
      <div class="min-h-screen w-full flex items-center justify-center" style="background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%)">
        <div class="text-center">
          <div class="text-8xl mb-6">🔍</div>
          <h1 class="text-4xl font-bold text-white mb-4">404</h1>
          <p class="text-white/80 text-lg mb-8">抱歉，页面不存在</p>
          <a 
            href="/" 
            class="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <span>←</span>
            <span>返回首页</span>
          </a>
        </div>
      </div>
    </>
  );
}
