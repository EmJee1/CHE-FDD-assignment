// https://v3.nuxtjs.org/api/configuration/nuxt.config

const nuxtConfigDefault: ReturnType<typeof defineNuxtConfig> = {
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    baseURL: "/",
    keepalive: true,
  },
  runtimeConfig: { public: { publicDir: "/" } },
};

const nuxtConfigAmazon: ReturnType<typeof defineNuxtConfig> = {
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    baseURL: "/2223/mjroeleveld/",
    keepalive: true,
  },
  runtimeConfig: { public: { publicDir: "/2223/mjroeleveld/" } },
};

const getNuxtConfigForEnvironment = (
  environment: string
): ReturnType<typeof defineNuxtConfig> => {
  switch (environment) {
    case "amazon":
      return nuxtConfigAmazon;
    default:
      return nuxtConfigDefault;
  }
};

export default defineNuxtConfig(
  getNuxtConfigForEnvironment(process.env.DEPLOY_TARGET)
);
