<template>
  <div>
    <HeaderSection />
    <BodySection />
    <FooterSection />
  </div>
</template>

<script>
import BodySection from "./BodySection.vue";
import HeaderSection from "./HeaderSection.vue";
import FooterSection from "./FooterSection.vue";
export default {
  name: "HomePage",
  data() {},
  methods: {},
  components: {
    HeaderSection,
    BodySection,
    FooterSection,
  },
};
</script>

<style>
h1 {
  color: rebeccapurple;
}
</style>
