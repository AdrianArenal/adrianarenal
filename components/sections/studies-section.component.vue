<template>
  <section class="studies-section">
    <h2>Studies and Certificates</h2>

    <card-info
      class="studies-section__card-info"
      title="Degree in Computer Software Engineering"
      date="2012 - 2017"
      author="Universidad de Oviedo"
      :imageSrc="require('../../assets/media/images/uniovi.jpeg')"
    >
      <p>
        Final Project:
        <a href="https://doi.org/10.1016/j.future.2018.01.011" target="_blank">
          Pereira, A. A., Espada, J. P., Crespo, R. G., & Aguilar, S. R. (2019).
          Platform for controlling and getting data from network connected
          drones in indoor environments. Future Generation Computer Systems, 92,
          656–662.
        </a>
      </p>
    </card-info>

    <card-info
      class="studies-section__card-info"
      title="Master in Web Engineering"
      date="2017 - 2019"
      author="Universidad de Oviedo"
      :imageSrc="require('../../assets/media/images/uniovi.jpeg')"
    />

    <card-info
      class="studies-section__card-info"
      title="FCE (First Certificate in English)"
      date="2018"
      author="Cambridge Assessment"
      :imageSrc="require('../../assets/media/images/cambridge.png')"
    />

    <card-info
      class="studies-section__card-info"
      title="Vue.js 3 Deep Dive Workshop"
      date="2020"
      author="Frontend Love"
      :imageSrc="require('../../assets/media/images/frontend-love.png')"
    />
    <card-info
      class="studies-section__card-info"
      title="Professional Scrum Master I"
      date="2021"
      author="Scrum.org"
      :imageSrc="require('../../assets/media/images/badge-psmi.svg')"
    />
  </section>
</template>

<script lang="ts">
import CardInfo from '~/components/card-info.component.vue'

export default {
  name: 'studies-section',
  components: {
    CardInfo
  }
}
</script>

<style lang="scss" scoped>
.studies-section {
  &__card-info {
    margin-bottom: rem(30px);
  }
}
</style>
