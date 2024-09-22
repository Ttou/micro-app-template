# MicroApp Template

## 简介

MicroApp Template 是一个开源的微前端模版。

## 特性

- **技术栈**：使用 Vue3/Vue2/MicroApp 等前端前沿技术开发
- **TypeScript**：应用程序级 JavaScript 的语言

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/)
- [Vue3](https://v3.cn.vuejs.org/guide/introduction.html)
- [Vue2](https://v2.cn.vuejs.org/v2/guide/)
- [MicroApp](https://micro-zoe.github.io/micro-app/docs.html#/)

## 安装使用

- 获取项目代码

```bash
git clone https://gitee.com/jh_shot/micro-app-template.git
```

- 安装依赖

```bash
pnpm i
```

- 运行

```bash
# 选择 dev
pnpm scripts
```

- 打包

```bash
# 选择 prod
pnpm scripts
```

- 示例

```bash
# 选择 stage
pnpm scripts

# 选择 serve
pnpm scripts
```

## 注意事项

- 装上 volar 插件后更好的支持模板开发
- vite 子应用使用了按需加载，开发时需要使用 `optimizeDeps` 预构建
- 以 `node_modules/` 代替 `~`，否则 rsbuild 编译样式文件时会报过期警告
- `microApp.router.push` 只在目标应用激活时可用
- 不要在主应用使用 `setBaseAppRouter` 下发路由对象来让子应用控制路由，子应用统一使用事件通信跳转路由

## 待解决

- [ ] 使用 `pnpm -r dev` 启动时，`app-vue3` 会被忽略，原因未知'
- [ ] `app-vite-vue2` 编译 `element-ui` 的 scss 样式时报警告
