
import { Head } from "$fresh/runtime.ts";
import Footer from '../components/Footer.tsx'

export default function Card_version() {
	return (
		<>
			<Head>
				<link href="/card.css" rel="stylesheet"></link>
				<script src="/js/jquery.min.js"></script>
				<script src="/card_version.js"></script>
			</Head>

			<div class="min-h-screen w-full relative overflow-hidden" style="background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%)">
				{/* 装饰元素 */}
				<div class="absolute top-20 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
				<div class="absolute bottom-40 left-10 w-40 h-40 bg-yellow-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>

				<div class="max-w-lg mx-auto relative z-10">
					{/* 顶部导航 */}
					<div class="flex items-center justify-center p-4">
						<a href="/" class="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-2 rounded-full transition-all">
							<span class="text-white">←</span>
							<img src="/kiss-banana.png" class="w-8 h-8 rounded-full" />
						</a>
					</div>

					{/* 标题 */}
					<div class="text-center mb-6">
						<h1 class="text-2xl font-bold text-white mb-2">🃏 选择任务卡版本</h1>
						<p class="text-white/70 text-sm">选择一个适合你们的版本开始游戏</p>
					</div>

					{/* 版本列表 */}
					<div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-5 border border-white/50 mb-6">
						{/* 甜蜜系列 */}
						<div class="mb-6">
							<div class="flex items-center gap-2 mb-3">
								<span class="text-pink-400">💕</span>
								<span class="font-bold text-gray-700">甜蜜系列</span>
								<span class="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">新手推荐</span>
							</div>
							<div class="space-y-2">
								<div onClick="changeVersion('lover0')" class="p-4 cursor-pointer bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">💕 恋爱版</div>
										<div class="text-xs text-gray-500 mt-1">适合刚开始交往的情侣</div>
									</div>
									<span class="text-pink-400 group-hover:text-pink-600 transition-colors">→</span>
								</div>
								<div onClick="changeVersion('lover1')" class="p-4 cursor-pointer bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">🔥 热恋版</div>
										<div class="text-xs text-gray-500 mt-1">适合感情升温的情侣</div>
									</div>
									<span class="text-pink-400 group-hover:text-pink-600 transition-colors">→</span>
								</div>
							</div>
						</div>

						{/* 进阶系列 */}
						<div class="mb-6">
							<div class="flex items-center gap-2 mb-3">
								<span class="text-purple-400">✨</span>
								<span class="font-bold text-gray-700">进阶系列</span>
								<span class="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">进阶</span>
							</div>
							<div class="space-y-2">
								<div onClick="changeVersion('sex0')" class="p-4 cursor-pointer bg-gradient-to-r from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">💑 同居版</div>
										<div class="text-xs text-gray-500 mt-1">适合同居情侣</div>
									</div>
									<span class="text-purple-400 group-hover:text-purple-600 transition-colors">→</span>
								</div>
								<div onClick="changeVersion('sex1')" class="p-4 cursor-pointer bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">🌙 进阶版</div>
										<div class="text-xs text-gray-500 mt-1">适合经验丰富的情侣</div>
									</div>
									<span class="text-violet-400 group-hover:text-violet-600 transition-colors">→</span>
								</div>
								<div onClick="changeVersion('sex2')" class="p-4 cursor-pointer bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">🌟 私密版</div>
										<div class="text-xs text-gray-500 mt-1">适合老夫老妻</div>
									</div>
									<span class="text-indigo-400 group-hover:text-indigo-600 transition-colors">→</span>
								</div>
							</div>
						</div>

						{/* 特殊系列 */}
						<div>
							<div class="flex items-center gap-2 mb-3">
								<span class="text-orange-400">⚡</span>
								<span class="font-bold text-gray-700">特殊系列</span>
							</div>
							<div class="space-y-2">
								<div onClick="changeVersion('sm')" class="p-4 cursor-pointer bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">🎭 SM版</div>
										<div class="text-xs text-gray-500 mt-1">特殊玩法</div>
									</div>
									<span class="text-orange-400 group-hover:text-orange-600 transition-colors">→</span>
								</div>
								<div onClick="changeVersion('huwai')" class="p-4 cursor-pointer bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">🌿 户外版</div>
										<div class="text-xs text-gray-500 mt-1">户外探险</div>
									</div>
									<span class="text-green-400 group-hover:text-green-600 transition-colors">→</span>
								</div>
								<div onClick="changeVersion('nanpu')" class="p-4 cursor-pointer bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">👑 男仆版</div>
										<div class="text-xs text-gray-500 mt-1">角色扮演</div>
									</div>
									<span class="text-blue-400 group-hover:text-blue-600 transition-colors">→</span>
								</div>
								<div onClick="changeVersion('nvpu')" class="p-4 cursor-pointer bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 rounded-2xl transition-all flex items-center justify-between group">
									<div>
										<div class="font-bold text-gray-800">💋 女仆版</div>
										<div class="text-xs text-gray-500 mt-1">角色扮演</div>
									</div>
									<span class="text-pink-400 group-hover:text-pink-600 transition-colors">→</span>
								</div>
							</div>
						</div>
					</div>

					{/* 提示 */}
					<div class="text-center text-pink-100 text-sm">
						<p>💡 点击任意版本即可切换</p>
					</div>
				</div>

				<Footer></Footer>
			</div>

		</>
	)
}
