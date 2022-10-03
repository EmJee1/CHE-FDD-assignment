<script lang="ts" setup>
import { linkedinUrl, githubUrl, emailUrl } from "~/utils/social-media";
</script>

<template>
  <div class="social-icons">
    <IconButton
      :to="githubUrl"
      icon="fa-brands fa-github"
      aria-label="github"
      outlined
    />
    <IconButton
      :to="linkedinUrl"
      icon="fa-brands fa-linkedin-in"
      aria-label="linkedin"
      outlined
    />
    <IconButton
      :to="emailUrl"
      icon="fa-solid fa-envelope"
      aria-label="email"
      outlined
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/spacing";

.social-icons {
  display: flex;
  justify-content: flex-start;
  @include spacing.content-block-item-margin(gap);

  @include breakpoints.md {
    justify-content: center;
  }
}
</style>
