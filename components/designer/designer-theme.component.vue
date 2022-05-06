<template>
  <section
    class="designer-theme"
    :class="{ 'designer-theme--menu-opened': menuOpened }"
  >
    <client-only>
      <main class="designer-theme__main-content">
        <character class="designer-theme__character" v-if="!isHandheldDevice" />
        <nuxt class="designer-theme__content scroll--y" />
        <designer-section-list
          class="designer-theme__section-list"
          v-if="!isHandheldDevice"
        />
        <transition name="designer-theme__menu--animated">
          <designer-menu
            class="designer-theme__menu"
            v-show="isHandheldDevice && menuOpened"
            @close="menuOpened = false"
          />
        </transition>
        <span
          class="designer-theme__icon designer-theme__icon--menu adricon"
          v-if="isHandheldDevice"
          @click="menuOpened = true"
          >arrowright</span
        >
      </main>
    </client-only>
    <header class="designer-theme__header">
      <div class="designer-theme__header-content">
        <imagotype class="designer-theme__imagotype" />
      </div>
    </header>
    <footer class="designer-theme__footer">
      <div class="designer-theme__footer-content">
        <span class="designer-theme__text designer-theme__text--copyright"
          >Adrian Arenal © {{ new Date().getFullYear() }}</span
        >
        <social-media-list class="designer-theme__socia-media-list" />
      </div>
    </footer>
  </section>
</template>
<script lang="ts">
import Character from '~/components/designer/character.component.vue'
import DesignerSectionList from '~/components/designer/designer-section-list.vue'
import SocialMediaList from '~/components/social-media-list.component.vue'
import Logo from '~/components/logo.component.vue'
import Imagotype from '~/components/imagotype.component.vue'
import { DeviceEnum } from '~/enums'
import DesignerMenu from '~/components/designer/designer-menu.component.vue'
import { mapGetters } from 'vuex'
import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

export default {
  name: 'designer-theme',
  components: {
    Imagotype,
    Logo,
    Character,
    DesignerSectionList,
    DesignerMenu,
    SocialMediaList
  },
  computed: {
    ...mapGetters({
      autoScrolling: GENERAL_CONSTS.getters.autoScrolling
    }),
    isHandheldDevice(): boolean {
      if (process.client) {
        return this.$device() <= DeviceEnum.TABLET
      }
      return false
    }
  },
  data() {
    return {
      menuOpened: false
    }
  },
  watch: {
    autoScrolling: function() {
      if (!this.autoScrolling && this.menuOpened) {
        setTimeout(() => (this.menuOpened = false), 500)
      }
    }
  }
}
</script>
<style lang="scss">
$header-height: 10vh;
$footer-height: 5vh;

.designer-theme {
  $component-class: &;
  @import 'assets/scss/designer/styles';
  position: relative;
  display: flex;
  flex-direction: column;
  color: $primary-color;
  background-color: $on-primary-color;
  font-family: $font-family--primary;
  font-size: $font-size--extra-small;

  &__header {
    position: absolute;
    order: 1;
    display: flex;
    align-items: center;
    height: $header-height;
    min-height: rem(65px);
    &::after {
      content: '';
      border-bottom: $header-height solid transparent;
      border-left: 100vw solid $color--dark-green;
    }
  }
  &__header-content {
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: rem(10px);
    width: 100%;
    height: 100%;
  }

  &__main-content {
    display: flex;
    max-height: 100%;
    flex-grow: 1;
  }

  &__character {
    flex-basis: 35%;
    flex-shrink: 0;
    padding-top: $header-height;
    padding-bottom: $footer-height;
  }

  &__content-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    .content__section {
      padding-top: $header-height;
      &:last-of-type {
        padding-bottom: $footer-height;
      }
    }
  }

  &__text {
    &--copyright {
      font-size: $font-size--tiny;
    }
  }

  &__section-list {
    flex-basis: 25%;
    flex-shrink: 0;
    align-self: center;
  }

  &__menu {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    padding: $header-height rem(5px) $footer-height rem(5px);
    background-color: rgba(white, 0.6);
    z-index: 1;

    &--animated {
      &-enter-active,
      &-leave-active {
        transition: transform $transitions-duration;
      }

      &-enter,
      &-leave-active {
        transform: translate3d(100%, 0, 0);
      }
    }
  }

  &__icon {
    &--menu {
      position: absolute;
      right: 0;
      top: 50%;
      font-size: $font-size--large;
      transform: translate(0, -50%) rotate(180deg);
    }
  }

  &__footer {
    position: absolute;
    bottom: 0;
    display: flex;
    height: $footer-height;
    min-height: rem(35px);
    &::after {
      content: '';
      border-top: $footer-height solid transparent;
      border-right: 100vw solid $color--dark-grey-blue;
    }
  }
  &__footer-content {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    color: white;
    padding: rem(2.5px);
    & > *:not(:first-child) {
      margin-left: rem(5px);
    }
  }
  &--menu-opened {
    #{ $component-class }__header,
    #{ $component-class }__main-content > *:not(#{ $component-class }__menu),
    #{ $component-class }__footer {
      filter: blur(rem(8px));
    }
  }

  @media only screen and (max-width: $breakpoint__small-desktop--max) {
    &__header {
      align-items: normal;
    }

    &__header-content {
      height: auto;
      padding-top: rem(2.5px);
    }
  }
}
</style>
