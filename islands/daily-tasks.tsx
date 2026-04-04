import { useState, useEffect } from "preact/hooks";

const allTasks = [
  { task: "给对方一个拥抱 10 秒", emoji: "🤗", category: "甜蜜" },
  { task: "说出一件喜欢对方的事", emoji: "💕", category: "表达" },
  { task: "一起看一部电影", emoji: "🎬", category: "约会" },
  { task: "给TA按摩 5 分钟", emoji: "💆", category: "放松" },
  { task: "牵手散步 15 分钟", emoji: "🚶", category: "约会" },
  { task: "一起做一顿饭", emoji: "🍳", category: "生活" },
  { task: "夸赞对方的外貌", emoji: "😍", category: "表达" },
  { task: "帮TA做一件家务", emoji: "🧹", category: "体贴" },
  { task: "一起打游戏", emoji: "🎮", category: "娱乐" },
  { task: "睡前说晚安并亲吻", emoji: "😘", category: "甜蜜" },
  { task: "给对方准备早餐", emoji: "🍳", category: "体贴" },
  { task: "一起看星星/夜景", emoji: "🌟", category: "浪漫" },
  { task: "牵手逛街 30 分钟", emoji: "🛍️", category: "约会" },
  { task: "写一张甜蜜便签给对方", emoji: "💌", category: "浪漫" },
  { task: "一起吃一顿烛光晚餐", emoji: "🕯️", category: "约会" },
  { task: "给对方洗脚/泡脚", emoji: "🦶", category: "体贴" },
  { task: "一起拍一张合照", emoji: "📸", category: "纪念" },
  { task: "帮TA梳头或吹头发", emoji: "💇", category: "甜蜜" },
  { task: "一起吃一根冰淇淋", emoji: "🍦", category: "甜蜜" },
  { task: "说十次我爱你", emoji: "❤️", category: "表达" },
  { task: "一起整理房间", emoji: "🏠", category: "生活" },
  { task: "给TA讲一个笑话", emoji: "😂", category: "娱乐" },
  { task: "一起做运动/瑜伽", emoji: "🧘", category: "健康" },
  { task: "喂对方吃东西", emoji: "🍓", category: "甜蜜" },
  { task: "一起看日出/日落", emoji: "🌅", category: "浪漫" },
  { task: "说一句让对方害羞的情话", emoji: "😊", category: "表达" },
  { task: "一起听一首歌", emoji: "🎵", category: "娱乐" },
  { task: "帮对方剪指甲", emoji: "✂️", category: "体贴" },
  { task: "一起DIY手工", emoji: "🎨", category: "娱乐" },
  { task: "给对方倒杯水", emoji: "💧", category: "体贴" },
];

const categoryColors: Record<string, string> = {
  "甜蜜": "bg-pink-100 text-pink-600",
  "约会": "bg-purple-100 text-purple-600",
  "表达": "bg-blue-100 text-blue-600",
  "体贴": "bg-green-100 text-green-600",
  "浪漫": "bg-red-100 text-red-600",
  "生活": "bg-yellow-100 text-yellow-600",
  "娱乐": "bg-indigo-100 text-indigo-600",
  "纪念": "bg-rose-100 text-rose-600",
  "放松": "bg-cyan-100 text-cyan-600",
  "健康": "bg-emerald-100 text-emerald-600",
};

// 获取今日任务（基于日期种子）
function getDailyTasks() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const tasks: typeof allTasks = [];
  let currentSeed = seed;
  
  while (tasks.length < 3) {
    currentSeed = (currentSeed * 1103515245 + 12345) % (1 << 31);
    const index = currentSeed % allTasks.length;
    const task = allTasks[index];
    if (!tasks.find(t => t.task === task.task)) {
      tasks.push(task);
    }
  }
  return tasks;
}

export default function DailyTasks() {
  const today = new Date();
  const todayStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
  const seed = `daily_${today.getFullYear()}$${today.getMonth()}$${today.getDate()}`;
  const dailyTasks = getDailyTasks();
  
  const [completed, setCompleted] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(seed);
    if (saved) {
      setCompleted(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(seed, JSON.stringify(completed));
  }, [completed]);

  const toggleTask = (taskStr: string) => {
    if (completed.includes(taskStr)) {
      setCompleted(completed.filter(t => t !== taskStr));
    } else {
      const newCompleted = [...completed, taskStr];
      setCompleted(newCompleted);
      if (newCompleted.length === dailyTasks.length) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  };

  const progress = Math.round((completed.length / dailyTasks.length) * 100);

  return (
    <div>
      {/* 庆祝动画 */}
      {showConfetti && (
        <div class="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div class="text-8xl animate-bounce">🎉</div>
        </div>
      )}
      
      {/* 日期 */}
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full">
          <span class="text-white">📅</span>
          <span class="text-white font-medium">{todayStr}</span>
        </div>
      </div>
      
      {/* 进度条 */}
      <div class="bg-white/90 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/50">
        <div class="flex justify-between items-center mb-2">
          <span class="text-emerald-700 font-medium">今日进度</span>
          <span class="text-emerald-700 font-bold">{completed.length}/{dailyTasks.length}</span>
        </div>
        <div class="h-3 bg-white/60 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {completed.length === dailyTasks.length && (
          <div class="text-center mt-3 text-green-600 font-bold">
            ✨ 今日任务全部完成！
          </div>
        )}
      </div>
      
      {/* 任务列表 */}
      <div class="space-y-4">
        {dailyTasks.map((task, index) => {
          const isCompleted = completed.includes(task.task);
          const colorClass = categoryColors[task.category] || "bg-gray-100 text-gray-600";
          
          return (
            <div
              key={index}
              onClick={() => toggleTask(task.task)}
              class={`bg-white/95 backdrop-blur-xl rounded-2xl p-5 border-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                isCompleted 
                  ? 'border-green-400 shadow-lg' 
                  : 'border-white/50 shadow-md hover:shadow-lg'
              }`}
            >
              <div class="flex items-start gap-4">
                <div class={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  isCompleted 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {isCompleted ? '✓' : (index + 1)}
                </div>
                
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-2xl">{task.emoji}</span>
                    <span class={`text-xs px-2 py-0.5 rounded-full ${colorClass}`}>
                      {task.category}
                    </span>
                  </div>
                  <p class={`text-lg font-medium transition-all ${
                    isCompleted ? 'text-gray-400 line-through' : 'text-gray-800'
                  }`}>
                    {task.task}
                  </p>
                </div>
                
                {isCompleted && <div class="text-2xl">💖</div>}
              </div>
            </div>
          );
        })}
      </div>
      
      <div class="text-center mt-6 text-white/70 text-sm">
        <p>💡 明天任务会更新哦，快去完成任务吧！</p>
      </div>
    </div>
  );
}
