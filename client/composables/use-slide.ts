import { ref, computed } from "#imports";

interface Slide {
  name: string;
  path: `/${string}`;
}

const slides: Slide[] = [
  { name: "Homepage", path: "/" },
  { name: "Interaction Design", path: "/interaction-design" },
  { name: "Doelgroep", path: "/target-audience" },
  {
    name: "Paper Prototype, Sitemap & Moodboard",
    path: "/paper-prototype-sitemap-and-moodboard",
  },
  { name: "Wireframe & Testrapport", path: "/wireframe-testreport" },
  { name: "Design", path: "/design" },
  { name: "Accessibility", path: "/accessibility" },
  { name: "Deployment", path: "/deployment" },
  { name: "Contact", path: "/contact" },
];

const selectedSlideIndex = ref(0);
const selectedSlide = computed(() => slides[selectedSlideIndex.value]);

const useSlide = () => {
  const isLastSlide = computed(() => {
    return slides.at(-1)?.path === selectedSlide.value.path;
  });

  const isFirstSlide = computed(() => {
    return slides.at(0)?.path === selectedSlide.value.path;
  });

  /**
   * @summary navigates to the slide that matches the supplied path
   * @param path the path the slide belongs to
   * @throws {Error} if the path does not belong to any slide
   */
  const navigateToSlide = (path: Slide["path"]) => {
    if (path === selectedSlide.value.path) {
      return;
    }

    if (path.endsWith("/")) {
      //  Most browsers add a trailing slash, remove this because we check for exact equality of the path
      navigateToSlide(path.slice(0, -1) as `/${string}`);
      return;
    }

    const slideIndex = slides.findIndex((s) => s.path === path);
    if (!slides[slideIndex]) {
      throw new Error("Current URL path is not associated with a slide");
    }

    selectedSlideIndex.value = slideIndex;
  };

  /**
   * @summary navigates respective from the current slide
   * @param indexModifier a positive or negative number that is added to the current slide-index
   * @throws {Error} if the calculated slide-id does not exist
   * @example
   * navigateRespective(1) // navigates to the next slide
   * navigateRespective(-3) // navigates 3 slides back
   * navigateRespective(0) // stays on the same slide
   */
  const navigateRespective = (indexModifier: number) => {
    const slideIndex = selectedSlideIndex.value + indexModifier;
    if (!slides[slideIndex]) {
      throw new Error("Requested slide does not exist");
    }

    selectedSlideIndex.value = slideIndex;
  };

  return {
    navigateToSlide,
    navigateRespective,
    selectedSlideIndex,
    selectedSlide,
    slides,
    isFirstSlide,
    isLastSlide,
  };
};

export default useSlide;
