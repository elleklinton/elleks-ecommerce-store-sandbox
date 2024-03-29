import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://glamazonwebservices.com',
  base: '/',
  server: {
    port: 8000
  },
  output: "static"
});
