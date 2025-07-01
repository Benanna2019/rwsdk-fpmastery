import contentCollections from "@content-collections/vite";
import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [redwood(), contentCollections(), tailwindcss()],
});
