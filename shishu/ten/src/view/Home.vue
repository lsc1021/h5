<template>
  <div class="home">
  <swiper/>
  </div>
</template>

<script>
 import Vue from 'vue'
 import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import Swiper from "@/components/Swiper"
export default {
  name: 'home',
  components:{
      swiper:Swiper
    }
}
</script>


