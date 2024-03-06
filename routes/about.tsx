export default function About() {
    return (
        <div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <div class="p-2 flex items-center w-full">
                    <a class="flex-1" href="/">
                        <img src="/kiss-banana.png" class="w-12 h-12" />
                    </a>
                </div>
                <div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
                    <div class="text-lg text-gray-500">关于本站</div>
                    <div>情侣互动，增进感情的情趣小游戏（不是情侣也可以玩哦）</div>
                    <div class="my-4">网站目前只有客服人工收款</div>
                    <div>
                        <span class="line-through">10</span>6.9元解锁全部玩法
                    </div>
                    <div>添加微信客服[ little-star176 ] 后支付</div>
                    <div class="mt-4">
                        如需其他定制开发， 欢迎联系合作。
                        {/* <a href="/custom" class="underline">如何制作一个相同的网站赚钱</a> */}
                    </div>
                </div>
                <div>
                    <img src="/qrcode.JPG" class="max-w-xs rounded-lg my-4" />
                </div>
            </div>
        </div>
    );
}
