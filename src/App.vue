<template>
  <div id="app">
    <toast
      position="top-center"
      :base-z-index="10000"
    />
    <Menu />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <transition name="slide" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Menu from "@/components/menu/Menu.vue";
export default Vue.extend({
  components: { Menu },
});
</script>
