<template>
  <div class="imagotype">
    <logo class="imagotype__logo" animated />
    <span class="imagotype__text imagotype__text--name">Adrian Arenal</span>
    <span class="imagotype__text imagotype__text--jobtitle"
      >frontend engineer</span
    >
  </div>
</template>

<script lang="ts">
import Logo from './logo.component.vue'

export default {
  name: 'imagotype',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
$logo-size: rem(40px);
$logo-size--handheld: rem(30px);
.imagotype {
  display: grid;
  grid-template-areas: 'logo name' 'logo jobtitle';
  grid-template-columns: $logo-size auto;
  grid-template-rows: auto auto;
  grid-column-gap: rem(10px);
  &__logo {
    grid-area: logo;
    width: $logo-size;
  }

  &__text {
    font-family: 'Major Mono Display', monospace;
    color: #f7f7f7;
    &--name {
      grid-area: name;
      align-self: end;
      text-transform: uppercase;
      font-size: rem(28px);
    }

    &--jobtitle {
      grid-area: jobtitle;
      font-size: rem(12px);
    }
  }
  @media only screen and (max-width: $breakpoint__small-desktop--max) {
    grid-template-columns: $logo-size--handheld auto;
    grid-column-gap: rem(5px);

    &__logo {
      width: $logo-size--handheld; // Safari
    }

    &__text {
      &--name {
        font-size: rem(18px);
      }
    }
  }

  @media only screen and (max-width: $breakpoint__small-tablet--max) {
    &__text {
      &--name {
        font-size: rem(16px);
      }

      &--jobtitle {
        font-size: rem(10px);
      }
    }
  }
}
</style>
