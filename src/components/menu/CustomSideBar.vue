<template>
  <div class="custom-side-bar">
    <Button
      icon="pi pi-arrow-right"
      class="open-menu"
      @click="visible = true"
    />
    <Sidebar :visible.sync="visible">
      <h3>Menu</h3>
      <div class="d-flex align-items-center">
        <font-awesome-icon
          icon="tasks"
          class="mr-2 icons icon-aside"
        />
        <router-link to="/">
          <li>Tasks</li>
        </router-link>
      </div>
      <div class="d-flex align-items-center">
        <font-awesome-icon
          icon="tasks"
          class="mr-2 icons icon-aside"
        />
        <router-link to="/author">
          <li>Autor</li>
        </router-link>
      </div>
      <div class="d-flex align-items-center">
        <font-awesome-icon
          icon="link"
          class="mr-2 icons icon-aside"
        />
        <li>
          <a
            href="https://www.linkedin.com/in/aparicio-l-b2b67310b/"
            target="_blank"
          >
            Acessar meu LinkedIn
          </a>
        </li>
      </div>
    </Sidebar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
});
</script>

<style lang="scss">

</style>
