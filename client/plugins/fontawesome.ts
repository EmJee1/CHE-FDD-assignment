// For Nuxt 3
import { defineNuxtPlugin } from "#app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faClose,
  faTriangleExclamation,
  faCircleNotch,
  faEnvelope,
  faLightbulb,
  faCircleCheck,
  faSitemap,
  faNoteSticky,
  faBug,
  faWindowMaximize,
  faUserShield,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faBars,
  faChevronLeft,
  faChevronRight,
  faClose,
  faTriangleExclamation,
  faCircleNotch,
  faGithub,
  faLinkedinIn,
  faEnvelope,
  faLightbulb,
  faCircleCheck,
  faSitemap,
  faNoteSticky,
  faBug,
  faWindowMaximize,
  faUserShield,
  faMagnifyingGlassChart
);

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-expect-error copied directly from fontawesome docs
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon, {});
});
