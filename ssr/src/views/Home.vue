<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    // setTimeout(() => {
    //   this.$router.push('/about');
    //   this.$router.onReady(() => {
    //     console.log(this.$router.getMatchedComponents()[0]);
    //   })
    // }, 1000);
  }
}
</script>
