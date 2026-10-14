import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const onVercel = Boolean(process.env.VERCEL);
  // En Vercel ocultar Playground a menos que se fuerce VITE_SHOW_PLAYGROUND=true
  const showPlayground =
    env.VITE_SHOW_PLAYGROUND ??
    process.env.VITE_SHOW_PLAYGROUND ??
    (onVercel ? "false" : "true");

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_SHOW_PLAYGROUND": JSON.stringify(showPlayground),
    },
  };
});
