/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL?: string; // Add custom environment variables here
    // Add other variables if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  