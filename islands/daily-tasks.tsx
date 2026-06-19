import { useEffect, useState } from "preact/hooks";
import { launchConfetti, vibrate } from "../lib/effects.ts";

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
  "自定义": "bg-teal-100 text-teal-600",
};

interface TaskItem {
  task: string;
  emoji: string;
  category: string;
}

const STREAK_KEY = "daily_streak";

function ymd(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

// 获取今日任务（基于日期种子，保证一天内稳定）
function getDailyTasks(): TaskItem[] {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const tasks: TaskItem[] = [];
  let currentSeed = seed;
  while (tasks.length < 3) {
    currentSeed = (currentSeed * 1103515245 + 12345) % (1 << 31);
    const index = currentSeed % allTasks.length;
    const task = allTasks[index];
    if (!tasks.find((t) => t.task === task.task)) tasks.push(task);
  }
  return tasks;
}

export default function DailyTasks() {
  const today = new Date();
  const todayStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
  const seed = `daily_${today.getFullYear()}$${today.getMonth()}$${today.getDate()}`;
  const customKey = `${seed}_custom`;
  const dailyTasks = getDailyTasks();

  const [completed, setCompleted] = useState<string[]>([]);
  const [customTasks, setCustomTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState("");
  const [streak, setStreak] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  // 全部条目（每日 + 自定义）
  const items: TaskItem[] = [...dailyTasks, ...customTasks];
  const total = items.length;
  const doneCount = completed.filter((t) => items.some((it) => it.task === t)).length;
  const allDone = total > 0 && doneCount === total;

  useEffect(() => {
    try {
      const savedDone = localStorage.getItem(seed);
      if (savedDone) setCompleted(JSON.parse(savedDone));
      const savedCustom = localStorage.getItem(customKey);
      if (savedCustom) setCustomTasks(JSON.parse(savedCustom));
      const savedStreak = localStorage.getItem(STREAK_KEY);
      if (savedStreak) {
        const data = JSON.parse(savedStreak) as { date: string; streak: number };
        setStreak(data.streak || 0);
      }
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(seed, JSON.stringify(completed));
    } catch { /* ignore */ }
  }, [completed, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(customKey, JSON.stringify(customTasks));
    } catch { /* ignore */ }
  }, [customTasks, hydrated]);

  // 连续打卡：当天首次全部完成时累加
  function bumpStreak() {
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      const todayKey = ymd(today);
      const yesterday = new Date(today.getTime() - 86400000);
      const yKey = ymd(yesterday);
      let data: { date: string; streak: number } = raw ? JSON.parse(raw) : { date: "", streak: 0 };
      if (data.date === todayKey) {
        setStreak(data.streak);
        return; // 今日已计入
      }
      const next = data.date === yKey ? data.streak + 1 : 1;
      data = { date: todayKey, streak: next };
      localStorage.setItem(STREAK_KEY, JSON.stringify(data));
      setStreak(next);
    } catch { /* ignore */ }
  }

  const toggleTask = (taskStr: string) => {
    vibrate(10);
    if (completed.includes(taskStr)) {
      setCompleted(completed.filter((t) => t !== taskStr));
    } else {
      const next = [...completed, taskStr];
      setCompleted(next);
      const willAllDone = items.every((it) => next.includes(it.task));
      if (willAllDone) {
        vibrate([30, 50, 30]);
        launchConfetti(110);
        bumpStreak();
      }
    }
  };

  const addCustomTask = () => {
    const v = newTask.trim();
    if (!v) return;
    if (customTasks.some((t) => t.task === v) || dailyTasks.some((t) => t.task === v)) {
      setNewTask("");
      return;
    }
    setCustomTasks([...customTasks, { task: v, emoji: "✍️", category: "自定义" }]);
    setNewTask("");
    vibrate(12);
  };

  const removeCustomTask = (taskStr: string) => {
    setCustomTasks(customTasks.filter((t) => t.task !== taskStr));
    setCompleted(completed.filter((t) => t !== taskStr));
  };

  const progress = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  return (
    <div>
      {/* 日期 + 连续打卡 */}
      <div class="flex items-center justify-center gap-3 mb-6 flex-wrap">
        <div class="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <span>📅</span>
          <span class="text-emerald-700 font-medium">{todayStr}</span>
        </div>
        <div class="inline-flex items-center gap-2 bg-orange-400/90 px-4 py-2 rounded-full shadow">
          <span>🔥</span>
          <span class="text-white font-bold">连续 {streak} 天</span>
        </div>
      </div>

      {/* 进度条 */}
      <div class="bg-white/90 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/50">
        <div class="flex justify-between items-center mb-2">
          <span class="text-emerald-700 font-medium">今日进度</span>
          <span class="text-emerald-700 font-bold">{doneCount}/{total}</span>
        </div>
        <div class="h-3 bg-white/60 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {allDone && (
          <div class="text-center mt-3 text-green-600 font-bold">
            ✨ 今日任务全部完成！明天继续保持哦
          </div>
        )}
      </div>

      {/* 任务列表 */}
      <div class="space-y-4">
        {items.map((task, index) => {
          const isCompleted = completed.includes(task.task);
          const colorClass = categoryColors[task.category] || "bg-gray-100 text-gray-600";
          const isCustom = task.category === "自定义";
          return (
            <div
              key={task.task}
              onClick={() => toggleTask(task.task)}
              class={`bg-white/95 backdrop-blur-xl rounded-2xl p-5 border-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${isCompleted ? "border-green-400 shadow-lg" : "border-white/50 shadow-md hover:shadow-lg"}`}
            >
              <div class="flex items-start gap-4">
                <div class={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isCompleted ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-600"}`}>
                  {isCompleted ? "✓" : index + 1}
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-2xl">{task.emoji}</span>
                    <span class={`text-xs px-2 py-0.5 rounded-full ${colorClass}`}>{task.category}</span>
                  </div>
                  <p class={`text-lg font-medium transition-all ${isCompleted ? "text-gray-400 line-through" : "text-gray-800"}`}>
                    {task.task}
                  </p>
                </div>
                {isCustom
                  ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCustomTask(task.task);
                      }}
                      class="text-gray-300 hover:text-red-400 text-xl px-1"
                      title="删除"
                    >
                      ×
                    </button>
                  )
                  : (isCompleted && <div class="text-2xl">💖</div>)}
              </div>
            </div>
          );
        })}
      </div>

      {/* 添加自定义任务 */}
      <div class="bg-white/90 backdrop-blur-lg rounded-2xl p-4 mt-5 border border-white/50">
        <div class="text-sm text-emerald-700 font-medium mb-2 text-center">✍️ 添加你们专属的小任务</div>
        <div class="flex gap-2">
          <input
            type="text"
            value={newTask}
            maxLength={30}
            onInput={(e) => setNewTask((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addCustomTask();
            }}
            placeholder="例如：一起看一集喜欢的剧"
            class="flex-1 px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none text-gray-700"
          />
          <button
            onClick={addCustomTask}
            class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 rounded-xl transition-all active:scale-95"
          >
            添加
          </button>
        </div>
      </div>

      <div class="text-center mt-6 text-emerald-700/70 text-sm">
        <p>💡 每日任务次日自动更新，坚持打卡让感情升温！</p>
      </div>
    </div>
  );
}
