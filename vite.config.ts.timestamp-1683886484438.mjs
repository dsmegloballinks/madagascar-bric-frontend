// vite.config.ts
import { ViteWebfontDownload } from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { chunkSplitPlugin } from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/vite-plugin-chunk-split/dist/index.js";
import { defineConfig } from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/vite/dist/node/index.js";
import preload from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/vite-plugin-preload/dist/index.mjs";
import react from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///C:/Users/Zunaira/Documents/DSME%20Projects/BirthCertificate/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: "/src/components"
      },
      {
        find: "@assets",
        replacement: "/src/assets"
      },
      {
        find: "@router",
        replacement: "/src/router"
      }
    ]
  },
  plugins: [
    preload(),
    chunkSplitPlugin(),
    ViteWebfontDownload(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 30
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      webp: {
        quality: 70
      },
      svgo: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "minifyStyles"
          },
          {
            name: "removeMetadata"
          },
          {
            name: "removeUselessStrokeAndFill"
          },
          {
            name: "reusePaths"
          },
          {
            name: "removeEmptyAttrs",
            active: true
          }
        ]
      }
    }),
    react()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxadW5haXJhXFxcXERvY3VtZW50c1xcXFxEU01FIFByb2plY3RzXFxcXEJpcnRoQ2VydGlmaWNhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFp1bmFpcmFcXFxcRG9jdW1lbnRzXFxcXERTTUUgUHJvamVjdHNcXFxcQmlydGhDZXJ0aWZpY2F0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWnVuYWlyYS9Eb2N1bWVudHMvRFNNRSUyMFByb2plY3RzL0JpcnRoQ2VydGlmaWNhdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBWaXRlV2ViZm9udERvd25sb2FkIH0gZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcclxuaW1wb3J0IHsgY2h1bmtTcGxpdFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jaHVuay1zcGxpdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcHJlbG9hZCBmcm9tIFwidml0ZS1wbHVnaW4tcHJlbG9hZFwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcIkBjb21wb25lbnRzXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IFwiL3NyYy9jb21wb25lbnRzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcIkBhc3NldHNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogXCIvc3JjL2Fzc2V0c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJAcm91dGVyXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IFwiL3NyYy9yb3V0ZXJcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBwcmVsb2FkKCksXHJcbiAgICBjaHVua1NwbGl0UGx1Z2luKCksXHJcbiAgICBWaXRlV2ViZm9udERvd25sb2FkKCksXHJcbiAgICB2aXRlQ29tcHJlc3Npb24oe1xyXG4gICAgICBhbGdvcml0aG06IFwiYnJvdGxpQ29tcHJlc3NcIixcclxuICAgICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgICB9KSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIGdpZnNpY2xlOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlwbmc6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgfSxcclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgIHF1YWxpdHk6IFswLjcsIDAuOF0sXHJcbiAgICAgICAgc3BlZWQ6IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdlYnA6IHtcclxuICAgICAgICBxdWFsaXR5OiA3MCxcclxuICAgICAgfSxcclxuICAgICAgc3Znbzoge1xyXG4gICAgICAgIG11bHRpcGFzczogdHJ1ZSxcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlVmlld0JveFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJtaW5pZnlTdHlsZXNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlTWV0YWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlVXNlbGVzc1N0cm9rZUFuZEZpbGxcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmV1c2VQYXRoc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVFbXB0eUF0dHJzXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgcmVhY3QoKSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVyxTQUFTLDJCQUEyQjtBQUMvWSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsaUJBQWlCO0FBQUEsSUFDakIsb0JBQW9CO0FBQUEsSUFDcEIsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDUixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixTQUFTLENBQUMsS0FBSyxHQUFHO0FBQUEsUUFDbEIsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
