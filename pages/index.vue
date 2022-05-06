<template>
  <div class="content">
    <intersect-element
      v-for="section in sections"
      :key="section"
      :ref="section"
      class="content__intersect-element"
      :options="{ threshold: [0.25] }"
      @intersect="!autoScrolling && setSection(section)"
    >
      <component :is="getSectionComponent(section)" class="content__section" />
    </intersect-element>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { SectionEnum, ThemeEnum } from '~/enums'

import {
  HobbiesSection,
  IntroSection,
  StudiesSection,
  WorkSection,
  IntersectElement
} from '~/components'
import { scrollToElm } from '~/utils/scroll.utils'

export default {
  components: {
    IntersectElement
  },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme,
      section: GENERAL_CONSTS.getters.section,
      autoScrolling: GENERAL_CONSTS.getters.autoScrolling
    }),
    sections(): SectionEnum[] {
      return this.theme === ThemeEnum
        ? [this.section]
        : Object.values(SectionEnum)
    },
    selectedSectionElement(): HTMLElement {
      return this.$refs[this.section][0].$el
    }
  },
  methods: {
    ...mapMutations({
      setSection: GENERAL_CONSTS.mutations.setSection,
      setAutoScrolling: GENERAL_CONSTS.mutations.setAutoScrolling
    }),
    getSectionComponent(section: SectionEnum) {
      return {
        [SectionEnum.INTRO]: () => IntroSection,
        [SectionEnum.WORK]: () => WorkSection,
        [SectionEnum.STUDIES]: () => StudiesSection,
        [SectionEnum.HOBBIES]: () => HobbiesSection
      }[section]()
    }
  },
  mounted(): void {
    this.$el.scrollTop = this.selectedSectionElement.offsetTop
    this.setAutoScrolling(false)
  },
  watch: {
    section: function(): void {
      if (this.autoScrolling) {
        scrollToElm(this.$el, this.selectedSectionElement, 2, () =>
          this.setAutoScrolling(false)
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;

  &__intersect-element {
    min-height: 100%;
    flex-shrink: 0;
  }

  &__section {
    display: flex;
    flex-direction: column;
    padding-left: rem(20px);
    padding-right: rem(20px);
    max-width: rem(660px);
    min-height: 100%;
  }
}
</style>
