# Vue3 + Decap CMS 项目

这是一个基于 Vue3 和 Decap CMS 构建的现代化内容管理系统。

## 功能特性

- 📝 **内容管理**: 支持 Markdown 编辑，实时预览
- 🖼️ **媒体管理**: 图片上传和管理功能
- ⚡ **快速部署**: 基于 Git 的版本控制
- 🎨 **现代化 UI**: 响应式设计，美观的界面

## 技术栈

- **前端框架**: Vue 3
- **路由**: Vue Router 4
- **内容管理**: Decap CMS
- **构建工具**: Vite

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
├── src/
│   ├── views/
│   │   ├── Home.vue          # 首页组件
│   │   └── CMS.vue           # CMS管理页面
│   ├── router/
│   │   └── index.js          # 路由配置
│   ├── App.vue               # 主应用组件
│   └── main.js               # 应用入口
├── content/
│   ├── posts/                # 博客文章
│   └── pages/                # 页面内容
├── public/
│   └── images/               # 媒体文件
└── static/
    └── admin/
        └── config.yml        # CMS配置文件
```

## 使用说明

1. **访问首页**: 打开 `http://localhost:5173/`
2. **访问管理后台**: 打开 `http://localhost:5173/admin`

## CMS 功能

### 博客文章管理

- 创建、编辑、删除文章
- 支持 Markdown 编辑
- 图片上传功能
- 标签管理

### 页面管理

- 创建静态页面
- 内容编辑

### 网站配置

- 网站标题、描述
- 作者信息

## 部署说明

### 本地开发

1. 启动开发服务器: `npm run dev`
2. 访问 CMS: `http://localhost:5173/admin`

### 生产部署

1. 构建项目: `npm run build`
2. 部署到 GitHub Pages 或 Netlify
3. 配置 Git Gateway 后端

## 配置说明

### Decap CMS 配置

配置文件位于 `static/admin/config.yml`，包含：

- 后端配置（Git Gateway）
- 媒体文件夹设置
- 内容集合定义

### 路由配置

- `/`: 首页
- `/admin`: CMS 管理后台

## 开发指南

### 添加新的内容类型

1. 在 `static/admin/config.yml` 中添加新的集合配置
2. 创建对应的内容文件夹
3. 在 CMS 中测试新功能

### 自定义预览模板

在 `src/views/CMS.vue` 中注册自定义预览组件。

## 许可证

MIT License
