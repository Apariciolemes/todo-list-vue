<template>
  <div class="menu">
    <div class="menu__horizontal">
      <ul class="nav">
        <li class="nav-item mx-3">
          <font-awesome-icon
            icon="tasks"
            class="mr-2 icons"
          />
          <router-link to="/">
            Tasks
          </router-link>
        </li>
        <li class="nav-item mx-3">
          <font-awesome-icon
            icon="user-ninja"
            class="mr-2 icons"
          />
          <router-link to="/author">
            Autor
          </router-link>
        </li>
        <li class="nav-item mx-3">
          <font-awesome-icon
            icon="link"
            class="mr-2 icons"
          />
          <a
            :href="linkedin"
            target="_blank"
          > Acessar meu LinkedIn </a>
        </li>
      </ul>
    </div>
    <CustomSideBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomSideBar from '@/components/menu/CustomSideBar.vue';

Vue.component('CustomSideBar', CustomSideBar);

export default Vue.extend({
  data() {
    return {
      linkedin: 'https://www.linkedin.com/in/aparicio-l-b2b67310b/',
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
  .nav-item {
    display: flex;
    align-items: center;
  }

  &__horizontal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    background: rgba(0, 0, 0, 0.87);
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
