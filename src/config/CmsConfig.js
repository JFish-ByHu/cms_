export const cmsConfig = {
  // 后端配置
  backend: {
    name: "github",
    repo: "JFish-ByHu/cms_",
    branch: "main",
  },

  // 本地后端配置（开发环境）
  local_backend: true,

  // 媒体文件夹配置
  media_folder: "public/images",
  public_folder: "/images",

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
          required: true 
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
          required: false 
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
          required: true 
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
          required: true 
        },
        {
          label: "描述",
          name: "description",
          widget: "text",
          required: false,
        },
        { 
          label: "内容", 
          name: "body", 
          widget: "markdown", 
          required: true 
        },
      ],
    },
  ],
};
