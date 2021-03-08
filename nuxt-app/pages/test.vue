<template>
  <div class="test">
    <nuxt-link to="/">to index page</nuxt-link>
    <div>{{ asyncData }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'test',
  asyncData({ params }) {
    console.log(params);
    return {
      asyncData: 'asyncData'
    }
  }
}
</script>

<style>
.test {
    background: #eee;
}
</style>