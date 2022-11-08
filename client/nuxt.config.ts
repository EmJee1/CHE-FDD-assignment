// https://v3.nuxtjs.org/api/configuration/nuxt.config

const getBaseUrl = () => {
  const environment = process.env.DEPLOY_TARGET;

  switch (environment) {
    case "amazon":
      return "/2223/mjroeleveld/";
    default:
      return "/";
  }
};

export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    keepalive: true,
    baseURL: getBaseUrl(),
  },
});
