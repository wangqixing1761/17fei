import { useEffect, useState } from "preact/hooks";
import { launchConfetti, vibrate } from "../lib/effects.ts";

const questions = [
  { q: "对方最常说的一句话是什么？", hint: "想想TA常挂嘴边的口头禅" },
  { q: "TA最喜欢的约会方式是？", hint: "烛光晚餐？户外散步？还是宅家看电影？" },
  { q: "第一次约会时TA穿什么颜色的衣服？", hint: "那天天气如何？TA打扮得怎样？" },
  { q: "对方生气时你通常怎么哄TA？", hint: "送礼物？道歉？还是给TA空间？" },
  { q: "TA最喜欢你哪个优点？", hint: "温柔？幽默？还是细心？" },
  { q: "你们吵架通常因为什么？", hint: "小事情积累还是大问题的分歧？" },
  { q: "对方做什么事最让你感动？", hint: "某个特别的瞬间？" },
  { q: "TA最不喜欢你做什么事？", hint: "日常生活中的小习惯？" },
  { q: "你们最难忘的一次旅行目的地是？", hint: "那次旅行发生了什么？" },
  { q: "TA的梦想是什么？", hint: "未来的目标和愿望" },
  { q: "对方最怕什么？", hint: "蟑螂？打雷？还是..." },
  { q: "如果可以最想和TA去哪个国家？", hint: "浪漫的土耳其？还是东京和巴黎？" },
  { q: "TA的口头禅是什么？", hint: "每次说话都会带上的词" },
  { q: "对方最舍不得扔掉的东西是什么？", hint: "有纪念意义的物品？" },
  { q: "你们通常谁先道歉？", hint: "还是从来不道歉？" },
  { q: "TA最喜欢的电影类型？", hint: "动作片？爱情片？喜剧？" },
  { q: "对方做过的最让你开心的事？", hint: "那个让你笑出声的瞬间" },
  { q: "TA最喜欢吃什么菜？", hint: "川菜？粤菜？还是西餐？" },
  { q: "你们认识多久了？", hint: "按天算还是按月算？" },
  { q: "TA最想去的地方是哪里？", hint: "梦想中的旅行目的地" },
  { q: "对方睡觉前有什么习惯？", hint: "玩手机？看书？还是要抱抱？" },
  { q: "你最想和TA一起做的第一件事是什么？", hint: "一起生活的憧憬" },
  { q: "TA最讨厌的食物是什么？", hint: "挑食的TA不吃什么？" },
  { q: "对方最喜欢听什么类型的音乐？", hint: "流行？摇滚？还是古典？" },
  { q: "你们第一次牵手是谁先伸出的手？", hint: "那个心跳加速的瞬间" },
];

const quickAnswers = [
  ["随便吧", "我爱你", "早点睡", "好吧", "哈哈哈", "讨厌"],
  ["烛光晚餐", "宅家看电影", "户外散步", "逛街购物", "一起做饭", "打游戏"],
  ["白色", "黑色", "粉色", "蓝色", "红色", "黄色"],
  ["抱一抱", "送礼物", "道歉认错", "买好吃的", "给TA空间", "撒娇"],
  ["温柔体贴", "幽默风趣", "细心照顾", "帅气/漂亮", "上进努力", "专一"],
  ["生活习惯", "家务分配", "花钱方式", "沟通问题", "工作太忙", "小误会"],
  ["偷偷准备惊喜", "在我难过时陪伴", "记得重要日子", "生病时照顾", "浪漫表白", "一起做家务"],
  ["乱丢东西", "熬夜打游戏", "不回消息", "说话太直接", "拖延症", "不浪漫"],
  ["海边城市", "山里小镇", "国外海岛", "古镇古乡", "繁华都市", "异国风情"],
  ["环游世界", "有自己的房子", "财务自由", "开小店", "写本书", "幸福就好"],
  ["蟑螂", "打雷", "恐怖片", "鬼", "蜘蛛", "高"],
  ["日本", "法国", "马尔代夫", "冰岛", "新西兰", "土耳其"],
  ["随便", "好吧", "嗯嗯", "真的吗", "你猜", "哈哈"],
  ["旧照片", "第一封情书", "纪念品", "TA送的礼物", "电影票", "收藏品"],
  ["我先", "TA先", "从来不吵", "轮流", "看情况", "不记得"],
  ["爱情片", "喜剧片", "动作片", "科幻片", "恐怖片", "动画片"],
  ["偷偷约会", "送花", "说情话", "做早餐", "给惊喜", "按摩"],
  ["火锅", "川菜", "粤菜", "日料", "烧烤", "家常菜"],
  ["100天", "半年", "一年", "两年", "三年", "更久"],
  ["巴黎", "马尔代夫", "冰岛", "日本", "新西兰", "大理"],
  ["玩手机", "看书", "敷面膜", "听音乐", "聊天", "要抱抱"],
  ["一起旅行", "同居", "养宠物", "结婚", "创业", "看极光"],
  ["香菜", "苦瓜", "榴莲", "肥肉", "内脏", "海鲜"],
  ["流行音乐", "摇滚", "R&B", "民谣", "古典", "轻音乐"],
  ["我先", "TA先", "同时", "不记得了", "好像是我", "忘了"],
];

const TOTAL = 5;
const BEST_KEY = "quiz_best";

// 随机抽取不重复题目下标
function pickQuestions(): number[] {
  const idx = Array.from({ length: questions.length }, (_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, TOTAL);
}

function isMatch(a: string, b: string): boolean {
  const x = a.trim().toLowerCase();
  const y = b.trim().toLowerCase();
  if (!x || !y) return false;
  return x === y || x.includes(y) || y.includes(x);
}

type Phase = "a" | "b" | "result";

export default function QuizPlay() {
  const [picks, setPicks] = useState<number[]>(() => pickQuestions());
  const [round, setRound] = useState(0); // 0-based index into picks
  const [phase, setPhase] = useState<Phase>("a");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState(0);

  useEffect(() => {
    try {
      const b = localStorage.getItem(BEST_KEY);
      if (b) setBest(parseInt(b, 10) || 0);
    } catch { /* ignore */ }
  }, []);

  const qIndex = picks[round];
  const question = questions[qIndex];
  const options = quickAnswers[qIndex] || [];
  const matched = phase === "result" && isMatch(answerA, answerB);

  const toPlayerB = () => {
    if (!answerA.trim()) return;
    vibrate(12);
    setPhase("b");
  };

  const reveal = () => {
    if (!answerB.trim()) return;
    const ok = isMatch(answerA, answerB);
    if (ok) {
      setScore((s) => s + 1);
      vibrate([20, 40, 20]);
      launchConfetti(50);
    } else {
      vibrate(20);
    }
    setPhase("result");
  };

  const next = () => {
    if (round + 1 >= TOTAL) {
      const finalScore = score; // score 已在 reveal 中累加
      try {
        if (finalScore > best) {
          localStorage.setItem(BEST_KEY, String(finalScore));
          setBest(finalScore);
        }
      } catch { /* ignore */ }
      if (finalScore >= 4) launchConfetti(120);
      setFinished(true);
      return;
    }
    setRound((r) => r + 1);
    setAnswerA("");
    setAnswerB("");
    setPhase("a");
  };

  const restart = () => {
    setPicks(pickQuestions());
    setRound(0);
    setPhase("a");
    setAnswerA("");
    setAnswerB("");
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / TOTAL) * 100);
    const resultData = percentage >= 80
      ? { emoji: "🏆", text: "灵魂伴侣！默契满分！" }
      : percentage >= 60
      ? { emoji: "🌟", text: "心有灵犀一点通！" }
      : percentage >= 40
      ? { emoji: "💫", text: "还需要更多了解彼此~" }
      : { emoji: "🌱", text: "多陪陪TA，增进感情吧~" };

    return (
      <div class="text-center">
        <div class="text-8xl mb-6">{resultData.emoji}</div>
        <h2 class="text-3xl font-bold text-purple-800 mb-4">问答结束！</h2>
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-6 border border-white/50">
          <div class="text-6xl font-bold text-purple-600 mb-2">{percentage}%</div>
          <div class="text-gray-600 mb-4">默契度</div>
          <div class="text-lg text-purple-600 font-bold mb-4">{resultData.text}</div>
          <div class="text-gray-500">答对 {score} / {TOTAL} 题</div>
          <div class="mt-4 inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-1.5 rounded-full text-sm font-bold">
            🏅 历史最佳 {Math.max(best, score)} / {TOTAL}
          </div>
        </div>
        <button
          onClick={restart}
          class="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
        >
          <span>🔄</span>
          <span>再来一轮</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* 进度条 */}
      <div class="flex justify-center gap-2 mb-6">
        {Array.from({ length: TOTAL }, (_, i) => (
          <div
            key={i}
            class={`h-2 rounded-full transition-all ${i === round ? "w-10 bg-purple-500" : i < round ? "w-8 bg-purple-400/80" : "w-8 bg-white/60"}`}
          />
        ))}
      </div>

      {/* 题目 */}
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-5 border border-white/50">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-purple-600 font-medium">第 {round + 1} / {TOTAL} 题</span>
          <span class="text-xs text-gray-400">已答对 {score}</span>
        </div>
        <h2 class="text-xl font-bold text-gray-800 text-center mb-2">{question.q}</h2>
        <p class="text-gray-500 text-sm text-center">💡 {question.hint}</p>
      </div>

      {phase !== "result"
        ? (
          <div>
            {/* 当前作答方 */}
            <div class={`text-center mb-4 rounded-2xl py-3 px-4 font-bold ${phase === "a" ? "bg-purple-500/90 text-white" : "bg-pink-500/90 text-white"}`}>
              {phase === "a" ? "🙋 玩家 A 作答（请 B 暂时回避）" : "🙋‍♀️ 玩家 B 作答（猜 A 的答案）"}
            </div>

            {/* 快速选项 */}
            <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-white/50">
              <p class="text-sm text-gray-600 mb-3 text-center">💬 选择或输入答案</p>
              <div class="flex flex-wrap justify-center gap-2">
                {options.map((ans, i) => {
                  const cur = phase === "a" ? answerA : answerB;
                  const set = phase === "a" ? setAnswerA : setAnswerB;
                  return (
                    <button
                      key={i}
                      onClick={() => set(ans)}
                      class={`px-3 py-2 rounded-full text-sm transition-all ${cur === ans ? "bg-purple-500 text-white shadow-lg scale-105" : "bg-white text-gray-600 hover:bg-purple-100"}`}
                    >
                      {ans}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 自定义输入 */}
            <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/50">
              <input
                type="text"
                value={phase === "a" ? answerA : answerB}
                onInput={(e) => {
                  const v = (e.target as HTMLInputElement).value;
                  if (phase === "a") setAnswerA(v);
                  else setAnswerB(v);
                }}
                placeholder="或者写下你的答案..."
                class="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none text-center text-lg"
              />
            </div>

            {/* 操作按钮 */}
            <div class="text-center">
              {phase === "a"
                ? (
                  <button
                    onClick={toPlayerB}
                    disabled={!answerA.trim()}
                    class={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full shadow-xl transition-all text-lg ${answerA.trim() ? "bg-white text-purple-600 hover:shadow-2xl hover:-translate-y-1" : "bg-white/50 text-purple-300 cursor-not-allowed"}`}
                  >
                    <span>🤫</span>
                    <span>换 B 作答</span>
                  </button>
                )
                : (
                  <button
                    onClick={reveal}
                    disabled={!answerB.trim()}
                    class={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full shadow-xl transition-all text-lg ${answerB.trim() ? "bg-white text-pink-600 hover:shadow-2xl hover:-translate-y-1" : "bg-white/50 text-pink-300 cursor-not-allowed"}`}
                  >
                    <span>🎭</span>
                    <span>揭晓答案</span>
                  </button>
                )}
              <p class="text-purple-700/60 text-sm mt-3">
                {phase === "a" ? "选好后把手机交给 B" : "看看你们是否心有灵犀"}
              </p>
            </div>
          </div>
        )
        : (
          <div>
            {/* 答案对比 */}
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/95 backdrop-blur-xl rounded-2xl p-4 text-center border-2 border-purple-300">
                <div class="text-3xl mb-2">😊</div>
                <div class="text-xs text-gray-400 mb-1">A 的答案</div>
                <div class="font-bold text-gray-800 break-all">{answerA}</div>
              </div>
              <div class="bg-white/95 backdrop-blur-xl rounded-2xl p-4 text-center border-2 border-pink-300">
                <div class="text-3xl mb-2">😍</div>
                <div class="text-xs text-gray-400 mb-1">B 的答案</div>
                <div class="font-bold text-gray-800 break-all">{answerB}</div>
              </div>
            </div>

            {/* 匹配结果 */}
            <div class={`text-center p-4 rounded-2xl mb-6 ${matched ? "bg-green-100" : "bg-yellow-100"}`}>
              <div class="text-4xl mb-2">{matched ? "🎉" : "🤔"}</div>
              <div class={`font-bold ${matched ? "text-green-600" : "text-yellow-600"}`}>
                {matched ? "默契成功！+1 分" : "略有差异，下次努力"}
              </div>
            </div>

            <div class="text-center">
              <button
                onClick={next}
                class="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg"
              >
                <span>{round + 1 >= TOTAL ? "🏁" : "→"}</span>
                <span>{round + 1 >= TOTAL ? "查看结果" : "下一题"}</span>
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
