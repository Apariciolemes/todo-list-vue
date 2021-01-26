<template>
  <div class="menu">
    <div class="menu__horizontal">
      <ul class="nav">
        <li class="nav-item mx-3 d-flex align-items-center">
          <font-awesome-icon icon="tasks" class="mr-2 icons" />
          <router-link to="/"> Tasks </router-link>
        </li>
        <li class="nav-item mx-3 d-flex align-items-center">
          <font-awesome-icon icon="user-ninja" class="mr-2 icons" />
          <router-link to="/author"> Autor </router-link>
        </li>
        <li class="nav-item mx-3 d-flex align-items-center">
          <font-awesome-icon icon="link" class="mr-2 icons" />
          <a
            href="https://www.linkedin.com/in/aparicio-l-b2b67310b/"
            target="_blank"
          >
            Acessar meu LinkedIn
          </a>
        </li>
      </ul>
    </div>
    <Button
      icon="pi pi-arrow-right"
      class="open-menu"
      @click="visible = true"
    />
    <Sidebar :visible.sync="visible">
      <h3>Menu</h3>
      <div class="d-flex align-items-center">
        <font-awesome-icon icon="tasks" class="mr-2 icons icon-aside" />
        <router-link to="/">
          <li @click="visible = false">Tasks</li></router-link
        >
      </div>
      <div class="d-flex align-items-center">
        <font-awesome-icon icon="tasks" class="mr-2 icons icon-aside" />
        <router-link to="/author">
          <li @click="visible = false">Autor</li></router-link
        >
      </div>
      <div class="d-flex align-items-center">
        <font-awesome-icon icon="link" class="mr-2 icons icon-aside" />
        <li>
          <a
            href="https://www.linkedin.com/in/aparicio-l-b2b67310b/"
            target="_blank"
            @click="visible = false"
          >
            Acessar meu LinkedIn
          </a>
        </li>
      </div>
    </Sidebar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      visible: false as boolean,
    };
  },
});
</script>
<style lang="scss">
.menu {
  padding-bottom: 100px;
  .icons {
    color: #e2b874;
  }
  .open-menu {
    position: fixed;
    top: 60px;
    z-index: 5;
  }
  &__horizontal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    background: black;
    position: fixed;
    z-index: 5;
    li {
      font-size: 16px;
      color: #ffff;
      font-family: "SF Pro Display SemiBold";
      a {
        color: #ffff;
      }
    }
  }
}
</style>