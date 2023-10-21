/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COIN_API_KEY: string,
  readonly VITE_NEWS_API_KEY: string,
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}