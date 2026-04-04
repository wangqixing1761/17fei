import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export const handler = {
  async GET(_req, ctx) {
    return await ctx.render();
  },
  async POST(req: Request, ctx) {
    const form = await req.formData();
    const email = form.get("email")?.toString() || "";
    const aisex = form.get("aisex")?.toString() || "1";
    
    // 保存订阅信息
    const kv = await Deno.openKv();
    await kv.set(["subusers", email], aisex);
    
    return new Response(null, {
      status: 302,
      headers: { Location: "/aiok" },
    });
  },
};

export default function AI() {
  return (
    <>
      <Head>
        <title>AI伴侣订阅 - 情侣飞行棋</title>
      </Head>
      
      <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)">
        {/* 装饰元素 */}
        <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-40 right-20 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div class="max-w-lg mx-auto px-4 py-8 relative z-10">
          {/* 顶部导航 */}
          <div class="flex items-center justify-center mb-8">
            <a href="/" class="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-all">
              <span class="text-white">←</span>
              <img src="/kiss-banana.png" class="w-8 h-8 rounded-full" />
              <span class="text-white font-medium">首页</span>
            </a>
          </div>

          {/* 标题 */}
          <div class="text-center mb-8">
            <div class="text-6xl mb-4">🤖</div>
            <h1 class="text-3xl font-bold text-white mb-2">AI情侣伴侣</h1>
            <p class="text-white/80">懂你，可撩，满足各种需求</p>
          </div>

          {/* 订阅表单 */}
          <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-white/50">
            <h2 class="text-xl font-bold text-purple-600 mb-4 text-center">订阅通知</h2>
            <form method="POST" class="space-y-4">
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">邮箱地址</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="请输入您的邮箱"
                  class="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">希望获得</label>
                <select 
                  name="aisex" 
                  class="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none text-gray-700"
                >
                  <option value="1">女伴侣</option>
                  <option value="2">男伴侣</option>
                </select>
              </div>
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                订阅通知
              </button>
            </form>
          </div>

          {/* 提示 */}
          <div class="text-center text-white/70 text-sm">
            <p>功能上线后会收到邮件通知</p>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
