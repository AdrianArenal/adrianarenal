<template>
  <nav class="social-media-list">
    <a
      class="social-media-list__link social-media-list__link--social-media"
      v-for="socialMedia in Object.values(SocialMediaEnum)"
      :href="getSocialMediaUrl(socialMedia)"
      target="_blank"
    >
      <span
        class="social-media-list__icon social-media-list__icon--social-media adricon"
      >
        {{ getSocialMediaIcon(socialMedia) }}
      </span>
    </a>
  </nav>
</template>

<script lang="ts">
import { SocialMediaEnum } from '../enums'

export default {
  name: 'social-media-list',
  data: function() {
    return {
      SocialMediaEnum
    }
  },
  methods: {
    getSocialMediaUrl(socialMedia: SocialMediaEnum): string {
      return {
        [SocialMediaEnum.GITHUB]: 'https://github.com/AdrianArenal',
        [SocialMediaEnum.INSTAGRAM]: 'https://www.instagram.com/adrian_arenal/',
        [SocialMediaEnum.LINKEDIN]: 'https://www.linkedin.com/in/adrian-arenal',
        [SocialMediaEnum.FACEBOOK]: 'https://www.facebook.com/adrian.arenal.9/'
      }[socialMedia]
    },
    getSocialMediaIcon(socialMedia: SocialMediaEnum): string {
      return {
        [SocialMediaEnum.GITHUB]: 'github',
        [SocialMediaEnum.INSTAGRAM]: 'instagram',
        [SocialMediaEnum.LINKEDIN]: 'linkedin',
        [SocialMediaEnum.FACEBOOK]: 'facebook'
      }[socialMedia]
    }
  }
}
</script>

<style lang="scss" scoped>
.social-media-list {
  display: flex;
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    &:not(:first-child) {
      margin-left: rem(5px);
    }

    &:visited {
      color: white;
    }
  }
}
</style>
