<script setup>

import Navber from "./front_component/Navber.vue"
import Header from "./front_component/Header.vue"
</script>
<template lang="">

<Header/>

<Navber/>
<router-view></router-view>

<div class="jumbotron text-center" style="margin-bottom:0">
  <p>Footer</p>
</div>


</template>
<script>


export default {

}
</script>
<style lang="">

</style>
