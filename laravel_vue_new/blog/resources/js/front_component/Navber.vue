<template lang="">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <router-link class="navbar-brand" to="/">Home</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
    <router-link  class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>

</template>
<script>
export default {

}
</script>
<style lang="">

</style>
