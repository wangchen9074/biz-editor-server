# biz-editor-server

B 端和编辑器 server 

## 本地运行

-   安装 `npm i`
-   配置本地数据库，在 `src/config/envs/dev.js`
-   运行 `npm run dev`

## 注意事项

代码开源之后，屏蔽了一些信息（如线上数据库、第三方服务 secret 、服务器等）。所以以下流程无法顺利执行：

-   从 0 到 1 的设计过程，commit 记录
-   pre commit 检查：单元测试、接口测试
-   CI/CD
-   发布到测试机
-   发布上线/回滚
-   运维和监控

