<template>
  <div class="layout-test">
      <div>个人配置的layout</div>
      <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.layout-test {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
}
</style>