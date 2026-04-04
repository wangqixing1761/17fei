import { Head } from "$fresh/runtime.ts";

import Footer from "../components/Footer.tsx";
import PositionList from "../islands/position-list.tsx";
import { positions } from "../lib/positions.ts";

export default function Positions() {
    return (
        <>
            <Head>
                <script src="/js/jquery.min.js"></script>
                <title>情趣姿势大全</title>
            </Head>
            
            <div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%)">
                {/* 装饰元素 */}
                <div class="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-40 right-10 w-40 h-40 bg-yellow-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* 顶部导航 */}
                <div class="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg">
                    <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                        <a href="/" class="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 px-3 py-2 rounded-full transition-all">
                            <span class="text-purple-600">←</span>
                            <img src="/kiss-banana.png" class="w-6 h-6 rounded-full" />
                        </a>
                        <h1 class="text-xl font-bold text-purple-600 flex items-center gap-2">
                            <span>💑</span>
                            <span>姿势大全</span>
                        </h1>
                        <div class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                            🌟 免费
                        </div>
                    </div>
                </div>

                {/* 内容区域 */}
                <div class="max-w-4xl mx-auto px-4 py-6 relative z-10">
                    {/* 标题区域 */}
                    <div class="text-center mb-6">
                        <h2 class="text-3xl font-bold text-white mb-2 drop-shadow-lg">全部解锁</h2>
                        <p class="text-white/70">共 {positions.length} 个姿势 · 完全免费浏览</p>
                    </div>

                    {/* 姿势网格 */}
                    <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 border border-white/50">
                        <PositionList positions={positions}></PositionList>
                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        </>
    );
}
