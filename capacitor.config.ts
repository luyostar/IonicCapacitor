import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.luyoo.myionic',
  appName: '天涯电影',
  webDir: 'www',
  bundledWebRuntime: false,
  server:{
    'cleartext':true,
    'allowNavigation':['*','https://movie.douban.com/'],
    'hostname':'127.0.0.1'
  },
  // appendUserAgent:'Mozilla/5.0 Google'
  
  // overrideUserAgent:'./proxy.config.json',
  // android:{
  //   appendUserAgent:'Mozilla/5.0 Google'
  // }
};

export default config;
