在前端的这个专业，有个名词是运行时。注意这个不等价于前端，也不等价于JavaScript 。也不等价于 Node.js
在 GitHub 搜索 https://github.com/search?q=runtime+&type=repositories&s=stars&o=desc

其中比较流行的是 Node.js Deno Bun 还有一个 WinterJS

当然还有很多。

或者你可以在：bestofjs 中查询 https://bestofjs.org/projects?page=1&limit=30&tags=runtime&sort=total

或者你好奇心重，可以看下

- https://bestofjs.org/projects?tags=runtime
- https://wintercg.org/
- https://wasmer.io/posts/winterjs-v1
- https://runtime-keys.proposal.wintercg.org/
- https://runtime-compat.unjs.io/

不过AI 时代，都不重要。

## Bun

bun是一个工具包，toolkit 。其核心是 Bun 运行时，一个快速的 JavaScript 运行时，旨在作为 Node.js 的替代品。它用 Zig 编写，底层由 JavaScriptCore 提供支持，显著缩短了启动时间和减少了内存使用。

bun 命令行工具还实现了测试运行器、脚本运行器和兼容 Node.js 的包管理器

## 引擎

目前最流行的两个引擎是 V8（由 Google 开发）和 JavaScriptCore（由 Apple 开发）。两者都是开源的。

JavaScript 引擎是一个解释 JavaScript 代码的计算机程序。该引擎负责执行代码

- 谷歌
  - 谷歌浏览器 Chrome
  - V8 (developed by Google) -- Node.js
- JavaScriptCore (developed by Apple) -- Bun 为 Safari 浏览器提供支持
- 由 Mozilla 为 Firefox 开发的 SpiderMonkey WinterJS
