// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      { families: { Roboto: { wght: [400, 500, 600, 700] } } },
    ],
  ],
  css: ["~/assets/css/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/css/colors" as *;
            @use "~/assets/css/mixins/fonts" as *;
            @use "~/assets/css/mixins/misc" as *;
            @use "~/assets/css/breakpoints" as *;
         `,
        },
      },
    },
  },
  components: [
    {
      path: "widgets",
      extensions: [".vue"],
      prefix: "Widget",
    },
    {
      path: "base",
      extensions: [".vue"],
      prefix: "Base",
    },
    {
      path: "ui",
      extensions: [".vue"],
      prefix: "UI",
    },
  ],
});
