# @rw/ui

现代化的 React UI 组件库，基于 TypeScript 构建，支持 Tailwind CSS。

## 🚀 特性

* 💪 **TypeScript** - 完整的类型支持
* 🎨 **Tailwind CSS** - 现代化的样式系统
* 📦 **Tree Shaking** - 按需加载，优化包体积
* 🔧 **易于定制** - 支持自定义样式和主题
* ⚡ **轻量级** - 小巧精简，性能优越

## 📦 安装

```bash
# npm
npm install @rowan287630/ui

# yarn
yarn add @rowan287630/ui

# pnpm
pnpm add @rowan287630/ui
```

## 🔧 使用

### 基本用法

```tsx
import React from 'react'
import { Button } from '@rw/ui'

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Hello!')}>
        点击我
      </Button>
    </div>
  )
}
```

### Button 组件

```tsx
import { Button } from '@rw/ui'

// 基本按钮
<Button>默认按钮</Button>

// 不同类型
<Button type="primary">主按钮</Button>
<Button type="secondary">次要按钮</Button>
<Button type="outline">轮廓按钮</Button>

// 不同尺寸
<Button size="small">小按钮</Button>
<Button size="medium">中等按钮</Button>
<Button size="large">大按钮</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>

// 自定义样式
<Button className="bg-red-500 hover:bg-red-600">
  自定义按钮
</Button>
```

## 📋 API 文档

### Button


| 属性      | 类型                                                   | 默认值      | 说明             |
| --------- | ------------------------------------------------------ | ----------- | ---------------- |
| type      | `'primary'                                             | 'secondary' | 'outline'`       |
| size      | `'small'                                               | 'medium'    | 'large'`         |
| disabled  | `boolean`                                              | `false`     | 是否禁用         |
| onClick   | `(event: React.MouseEvent<HTMLButtonElement>) => void` | -           | 点击事件处理函数 |
| className | `string`                                               | -           | 自定义 CSS 类名  |
| children  | `React.ReactNode`                                      | -           | 按钮内容         |

## 🎨 样式依赖

本组件库基于 Tailwind CSS 构建。如果你的项目中还没有 Tailwind CSS，请先安装：

```bash
npm install tailwindcss
```

或者你可以通过 CDN 引入基础样式：

```html
<link href="https://cdn.tailwindcss.com" rel="stylesheet">
```

## 📦 开发

```bash
# 克隆项目
git clone https://github.com/你的用户名/rw-ui.git

# 安装依赖
pnpm install

# 构建组件库
pnpm build

# 开发模式
pnpm dev
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](https://claude.ai/chat/LICENSE) 文件

## 🔗 相关链接

* [GitHub](https://github.com/%E4%BD%A0%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D/rw-ui)
* [npm](https://www.npmjs.com/package/@rw/ui)
* [文档](https://github.com/%E4%BD%A0%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D/rw-ui#readme)

## 更新日志

### 0.1.0

* ✨ 新增 Button 组件
* 🎨 支持多种样式和尺寸
* 📦 初始版本发布
