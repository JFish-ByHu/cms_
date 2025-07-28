<template>
  <div class="cms-container">
    <div id="nc-root"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import CMS from "decap-cms-app";

/**
 * Decap CMS 初始化配置
 */
const initCMS = () => {
  // 初始化CMS
  CMS.init({
    config: {
      // 后端配置 - 使用Git Gateway
      backend: {
        name: "git-gateway",
        branch: "main",
      },

      // 媒体文件夹配置
      media_folder: "public/images",
      public_folder: "/images",

      // 本地后端配置（开发环境）
      local_backend: true,

      // 集合配置
      collections: [
        {
          name: "posts",
          label: "博客文章",
          folder: "content/posts",
          create: true,
          slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
          editor: {
            preview: true,
          },
          fields: [
            {
              label: "标题",
              name: "title",
              widget: "string",
              required: true,
            },
            {
              label: "发布日期",
              name: "date",
              widget: "datetime",
              required: true,
            },
            {
              label: "描述",
              name: "description",
              widget: "text",
              required: false,
            },
            {
              label: "标签",
              name: "tags",
              widget: "list",
              required: false,
            },
            {
              label: "特色图片",
              name: "featured_image",
              widget: "image",
              required: false,
            },
            {
              label: "内容",
              name: "body",
              widget: "markdown",
              required: true,
            },
          ],
        },
        {
          name: "pages",
          label: "页面",
          folder: "content/pages",
          create: true,
          slug: "{{slug}}",
          editor: {
            preview: true,
          },
          fields: [
            {
              label: "标题",
              name: "title",
              widget: "string",
              required: true,
            },
            {
              label: "内容",
              name: "body",
              widget: "markdown",
              required: true,
            },
          ],
        },
        {
          name: "config",
          label: "配置",
          editor: {
            preview: false,
          },
          files: [
            {
              label: "网站设置",
              name: "site",
              file: "src/config/site.json",
              fields: [
                {
                  label: "网站标题",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "网站描述",
                  name: "description",
                  widget: "text",
                },
                {
                  label: "作者",
                  name: "author",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  });

  // 注册预览模板
  CMS.registerPreviewTemplate("posts", PostPreview);
  CMS.registerPreviewTemplate("pages", PagePreview);
};

/**
 * 博客文章预览组件
 */
const PostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"]);
  const description = entry.getIn(["data", "description"]);
  const body = widgetFor("body");
  const featuredImage = entry.getIn(["data", "featured_image"]);
  const tags = entry.getIn(["data", "tags"]);

  return `
    <div class="post-preview">
      <h1>${title}</h1>
      ${featuredImage ? `<img src="${featuredImage}" alt="${title}" />` : ""}
      ${description ? `<p class="description">${description}</p>` : ""}
      ${
        tags
          ? `<div class="tags">${tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}</div>`
          : ""
      }
      <div class="content">${body}</div>
    </div>
  `;
};

/**
 * 页面预览组件
 */
const PagePreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"]);
  const body = widgetFor("body");

  return `
    <div class="page-preview">
      <h1>${title}</h1>
      <div class="content">${body}</div>
    </div>
  `;
};

onMounted(() => {
  initCMS();
});
</script>

<style scoped>
.cms-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#nc-root {
  width: 100%;
  height: 100%;
}

/* 预览样式 */
.post-preview,
.page-preview {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.post-preview h1,
.page-preview h1 {
  color: #333;
  margin-bottom: 20px;
}

.post-preview .description {
  color: #666;
  font-size: 16px;
  margin-bottom: 15px;
}

.post-preview .tags {
  margin-bottom: 20px;
}

.post-preview .tag {
  display: inline-block;
  background: #007acc;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 12px;
}

.post-preview img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

.post-preview .content,
.page-preview .content {
  line-height: 1.6;
  color: #333;
}
</style>
