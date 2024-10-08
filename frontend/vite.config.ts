import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import PathConstants from './src/routes/pathConstants';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: PathConstants.BASENAME,
  build: {
    outDir: '../docs',  // Outputs the build to the docs folder (necessary for gitbucket pages)
    emptyOutDir: true,  // also necessary
  }
})