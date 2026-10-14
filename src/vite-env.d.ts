/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_PLAYGROUND?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
