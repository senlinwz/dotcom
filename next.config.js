/** @type {import('next').NextConfig} */

const { codeInspectorPlugin } = require("code-inspector-plugin");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(codeInspectorPlugin({ bundler: "webpack" }));
    return config;
  },
  distDir: 'dist',  // 设置输出目录为 dist
  // 删除所有注释和未使用的配置
};

module.exports = nextConfig;
