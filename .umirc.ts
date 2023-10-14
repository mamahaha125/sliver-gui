import { defineConfig } from 'dumi';

const repo = 'sliver-gui'; // 项目名(也就是你的仓库名)

export default defineConfig({
  title: 'dumi-book-test',
  mode: 'site',
  base: '/sliver-gui',
  publicPath: 'sliver-gui',
  devServer: {
    port: 1998 // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  
  // 更多配置项config: https://d.umijs.org/config  
});
