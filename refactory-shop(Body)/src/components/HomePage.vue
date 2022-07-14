<template>
  <div>
    <HeaderSection />
    <BodySection />
  </div>
</template>

<script>
import BodySection from './BodySection.vue';
import HeaderSection from './HeaderSection.vue';
export default {
  name: 'HomePage',
  data() {},
  methods: {},
  components: {
    HeaderSection,
    BodySection,
  },
};
</script>

<style>
h1 {
  color: rebeccapurple;
}
</style>
