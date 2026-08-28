# 17fei - Fresh + Deno 生产镜像
FROM denoland/deno:1.42.4

WORKDIR /app

# 先拷贝依赖清单，利用 Docker 缓存层
COPY deno.json ./
RUN deno cache main.ts

# 拷贝源码
COPY . .

# 构建生产静态资源
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
