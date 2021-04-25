import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  proxy: {
    '/api': {
      'target': 'https://public-api-v1.aspirantzhang.com',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  fastRefresh: {},
});
