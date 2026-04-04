import { useState } from "preact/hooks";

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

export default function QuizPlay() {
  const [currentQ, setCurrentQ] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [partnerAnswer, setPartnerAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = questions[currentQ];
  const options = quickAnswers[currentQ] || [];

  const handleReveal = () => {
    if (!partnerAnswer) {
      const randomIdx = Math.floor(Math.random() * options.length);
      setPartnerAnswer(options[randomIdx] || "心有灵犀");
    }
    setShowResult(true);
  };

  const checkMatch = () => {
    const isMatch = myAnswer.toLowerCase() === partnerAnswer.toLowerCase() ||
      myAnswer.includes(partnerAnswer) ||
      partnerAnswer.includes(myAnswer);
    if (isMatch) setScore(score + 1);
    return isMatch;
  };

  const nextQuestion = () => {
    if (showResult) checkMatch();
    setShowResult(false);
    setMyAnswer("");
    setPartnerAnswer("");
    setSelectedAnswer(null);
    
    if (round >= 5) {
      setFinished(true);
    } else {
      setCurrentQ((currentQ + 1) % questions.length);
      setRound(round + 1);
    }
  };

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setMyAnswer(answer);
  };

  const restart = () => {
    setCurrentQ(0);
    setRound(1);
    setScore(0);
    setMyAnswer("");
    setPartnerAnswer("");
    setShowResult(false);
    setFinished(false);
    setSelectedAnswer(null);
  };

  // 完成页面
  if (finished) {
    const percentage = Math.round((score / 5) * 100);
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
        <h2 class="text-3xl font-bold text-white mb-4">问答结束！</h2>
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-6 border border-white/50">
          <div class="text-6xl font-bold text-purple-600 mb-2">{percentage}%</div>
          <div class="text-gray-600 mb-4">默契度</div>
          <div class="text-lg text-purple-600 font-bold mb-4">{resultData.text}</div>
          <div class="text-gray-500">答对 {score} / 5 题</div>
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

  // 游戏页面
  return (
    <div>
      {/* 进度条 */}
      <div class="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map(i => (
          <div 
            key={i}
            class={`w-8 h-2 rounded-full transition-all ${i <= round ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
      
      {/* 题目 */}
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-white/50">
        <div class="text-center mb-4">
          <span class="text-sm text-purple-600 font-medium">第 {round} 题</span>
        </div>
        <h2 class="text-xl font-bold text-gray-800 text-center mb-2">{question.q}</h2>
        <p class="text-gray-500 text-sm text-center">💡 {question.hint}</p>
      </div>
      
      {!showResult ? (
        <div>
          {/* 快速选项 */}
          <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-white/50">
            <p class="text-sm text-gray-600 mb-3 text-center">💬 选择或输入答案</p>
            <div class="flex flex-wrap justify-center gap-2">
              {options.map((ans, i) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(ans)}
                  class={`px-3 py-2 rounded-full text-sm transition-all ${
                    selectedAnswer === ans 
                      ? 'bg-purple-500 text-white shadow-lg scale-105' 
                      : 'bg-white text-gray-600 hover:bg-purple-100'
                  }`}
                >
                  {ans}
                </button>
              ))}
            </div>
          </div>
          
          {/* 自定义输入 */}
          <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/50">
            <input
              type="text"
              value={myAnswer}
              onChange={(e) => {
                setMyAnswer((e.target as HTMLInputElement).value);
                setSelectedAnswer(null);
              }}
              placeholder="或者写下你的答案..."
              class="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none text-center text-lg"
            />
          </div>
          
          {/* 揭晓按钮 */}
          <div class="text-center">
            <button
              onClick={handleReveal}
              disabled={!myAnswer}
              class={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full shadow-xl transition-all text-lg ${
                myAnswer 
                  ? 'bg-white text-purple-600 hover:shadow-2xl hover:-translate-y-1' 
                  : 'bg-white/50 text-purple-300 cursor-not-allowed'
              }`}
            >
              <span>🎭</span>
              <span>揭晓答案</span>
            </button>
            <p class="text-white/60 text-sm mt-3">准备好让对方看你的答案了吗？</p>
          </div>
        </div>
      ) : (
        <div>
          {/* 答案对比 */}
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-white/95 backdrop-blur-xl rounded-2xl p-4 text-center border-2 border-purple-300">
              <div class="text-3xl mb-2">😊</div>
              <div class="text-xs text-gray-400 mb-1">你的答案</div>
              <div class="font-bold text-gray-800">{myAnswer}</div>
            </div>
            <div class="bg-white/95 backdrop-blur-xl rounded-2xl p-4 text-center border-2 border-pink-300">
              <div class="text-3xl mb-2">😍</div>
              <div class="text-xs text-gray-400 mb-1">TA的答案</div>
              <div class="font-bold text-gray-800">{partnerAnswer}</div>
            </div>
          </div>
          
          {/* 匹配结果 */}
          <div class={`text-center p-4 rounded-2xl mb-6 ${checkMatch() ? 'bg-green-100' : 'bg-yellow-100'}`}>
            <div class="text-4xl mb-2">{checkMatch() ? '🎉' : '🤔'}</div>
            <div class={`font-bold ${checkMatch() ? 'text-green-600' : 'text-yellow-600'}`}>
              {checkMatch() ? '默契成功！' : '略有差异'}
            </div>
          </div>
          
          {/* 下一题 */}
          <div class="text-center">
            <button
              onClick={nextQuestion}
              class="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg"
            >
              <span>{round >= 5 ? '🏁' : '→'}</span>
              <span>{round >= 5 ? '查看结果' : '下一题'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
