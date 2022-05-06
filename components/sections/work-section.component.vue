<template>
  <section class="work-section">
    <h2>Work experience</h2>
    <card-info
      class="work-section__card-info"
      title="Web programmer"
      date="2015 - 2016"
      author="Capgemini España"
      :imageSrc="require('../../assets/media/images/capgemini.jpeg')"
    >
      <p>Developing and maintaining a SPA application (mainly backend).</p>
      <p>Technologies involved</p>
      <ul>
        <li>SPA: Java + Spring boot, SQL, Javascript, CSS, HTML</li>
      </ul>
    </card-info>

    <card-info
      class="work-section__card-info"
      title="Frontend Engineer"
      date="2018-2021"
      author="Empathy.co"
      :imageSrc="require('../../assets/media/images/empathy.jpeg')"
    >
      <p>
        Starting as an internship, I developed the
        <a href="https://www.empathy.co/" target="_blank"
          >corporative website.</a
        >
        After that, I joined the honorable 'Play' team.
      </p>
      <p>Technologies involved</p>
      <ul>
        <li>
          SPAs: VueJS, Typescript + ES6, Webpack, SASS, HTML, NODE
        </li>
        <li>
          Static website: Jekyll, NuxtJS, NetlifyCMS
        </li>
        <li>
          Visualisations: D3.js + Typescript
        </li>
      </ul>
    </card-info>

    <card-info
      class="work-section__card-info"
      title="Frontend Engineer"
      date="2021-2022"
      author="Motive.co"
      :imageSrc="require('../../assets/media/images/motive.png')"
    >
      <p>
        When joining motive, my first concern was to create the basic
        architecture of their
        <a href="https://www.motive.co/" target="_blank"
          >corporative website.</a
        >
      </p>
      <p>
        After that, I worked with wonderful teammates on the Motive Playboard,
        where I could share knowledge from my previous work and learn a lot from
        great professionals.
      </p>
      <p>Technologies involved</p>
      <ul>
        <li>
          SPAs: VueJS, Typescript + ES6, Webpack, SASS, HTML, NODE
        </li>
        <li>
          Static website: NuxtJS, NetlifyCMS
        </li>
        <li>
          Another technologies/stuff: Storybook, Crowdin, e2e testing, unit
          testing
        </li>
      </ul>
    </card-info>

    <card-info
      class="work-section__card-info"
      title="Engineering Manager"
      date="2022++"
      author="Motive.co"
      :imageSrc="require('../../assets/media/images/motive.png')"
    >
      <p>
        At some point, the team was growing so fast, so due to that, we did some
        organization adjustments, and a team had to have a "Manager" figure to
        take care not only on technical but also on human concerns within the
        team.
      </p>
      <p>
        I was so glad on being selected for this position 🥳. Since that day, my
        main goal is to maintain a healthy environment working, guide my
        teammates to grow as professionals, and of course, enjoy this experience
        and give my best everyday!
      </p>
    </card-info>
  </section>
</template>

<script lang="ts">
import CardInfo from '~/components/card-info.component.vue'

export default {
  name: 'work-section',
  components: {
    CardInfo
  }
}
</script>

<style lang="scss" scoped>
.work-section {
  &__card-info {
    margin-bottom: rem(30px);
  }
}
</style>
