<template>
  <Header></Header>
  <router-view/>
</template>

<script lang="ts">
import Header from '@/components/header/Header.vue';

export default {
  components: {
    Header,
  },
}
</script>


<style lang="scss">
@import './style/color.scss';
@import './style/main.scss';

</style>
