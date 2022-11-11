// https://v3.nuxtjs.org/api/configuration/nuxt.config

const getNuxtEnvironmentConfig = () => {
  const environment = process.env.DEPLOY_TARGET;

  switch (environment) {
    case "amazon":
      return {
        app: { baseURL: "/2223/mjroeleveld/" },
        runtimeConfig: { public: { publicDir: "/2223/mjroeleveld/" } },
      };
    default:
      return {
        app: { baseURL: "/" },
        runtimeConfig: { public: { publicDir: "/" } },
      };
  }
};

export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    keepalive: true,
  },
  head: {
    htmlAttrs: {
      lang: "nl",
    },
  },
  ...getNuxtEnvironmentConfig(),
});
