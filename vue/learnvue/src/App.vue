<template>
  <div id="app">
<navbar/>
 <router-view class="text-center"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: 'app',
  components:{
      navbar:Navbar
    }
}
</script>

<style>

</style>
