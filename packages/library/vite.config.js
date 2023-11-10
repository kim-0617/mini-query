// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  build: {
    lib: {
      // 여러 진입점은 객체 또는 배열로 지정할 수 있습니다.
      entry: resolve(__dirname, "src/main.ts"),
      name: "MiniQuery",
      // 적절한 확장자가 추가됩니다.
      fileName: "mini-query",
    },
    // rollupOptions: {
    //   // 라이브러리에 포함하지 않을
    //   // 디펜던시를 명시해주세요
    //   external: ["vue"],
    //   output: {
    //     // 라이브러리 외부에 존재하는 디펜던시를 위해
    //     // UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.
    //     globals: {
    //       vue: "Vue",
    //     },
    //   },
    // },
  },
});
