declare module 'react-native-config' {
  export interface NativeConfig {
    // [name: string]: any;
    APP_ENV: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
