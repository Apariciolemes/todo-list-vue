<template>
  <div>
    <div class="panel-table mt-3">
      <h2 class="panel-table__title">{{ title }}</h2>
      <div
        class="panel-table__filter"
        @click="openSearch = !openSearch"
        v-if="showFilter"
      >
        <h3 class="panel-table__filter__title mb-1">Filtro</h3>
        <span class="pi pi-chevron-down ml-2" :class="{ rotate: openSearch }" />
      </div>
    </div>
    <transition name="fade">
      <div class="open-filter" v-if="openSearch">
        <slot name="content-filter" />
      </div>
    </transition>
    <div class="custom-table w-100" :class="{ 'mt-3': openSearch }">
      <table class="w-100">
        <thead class="custom-table__heading">
          <tr class="custom-table__heading__row">
            <template v-for="(column, index) in columnsData.columnsToShow">
              <slot name="heading" :column="column">
                <th :key="`${column}-${index}`">
                  {{ column }}
                </th>
              </slot>
            </template>
          </tr>
        </thead>
        <tbody class="custom-table__body">
          <template v-if="empty">
            <slot name="body" />
          </template>
          <template v-else>
            <tr class="custom-table__body__empty">
              <td colspan="6">
                <div class="message">
                  <font-awesome-icon
                    icon="tasks"
                    class="mr-2 icons icon-aside"
                  />
                  <h4>Não há task(s)</h4>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    columnsData: {
      type: Object as any,
      default: {},
    },
    title: {
      type: String,
      default: "",
    },
    showFilter: {
      type: Boolean,
      default: true,
    },
    empty: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      openSearch: false as boolean,
    };
  },
});
</script>
<style lang="scss">
.panel-table {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    color: rgba(0, 0, 0, 0.87);
  }
  &__filter {
    display: flex;
    align-items: center;
    &__title {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
    }
    .rotate {
      transform: rotate(180deg);
    }
    .pi {
      cursor: pointer;
    }
  }
}
.open-filter {
  border: 1px solid #dcdcdc;
}
.custom-table {
  width: 100%;
  width: fit-content;
  border: 1px solid #dcdcdc;
  &__heading {
    border: 1px solid #dcdcdc;
    border-radius: 12px;
    &__row {
      min-width: 100%;
    }
    th {
      padding: 10px 15px;
    }
    th:last-child {
      width: 40px;
    }
  }
  &__body {
    border-radius: 12px;
    td {
      padding: 10px 15px;
      border-bottom: 1px solid #cccccc;
      border-left: 1px solid #cccccc;
    }
    td:first-child {
      border-left: 0;
    }
    &__empty {
      height: 200px;
      width: 100%;
      .message {
        display: block;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        margin: 0 auto;
        text-align: center;
        .svg-inline--fa {
          height: 3rem;
          width: 3rem;
          cursor: default;
          color: #dcdcdc;
        }
        h4{
            color: #dcdcdc;
        }
      }
    }
  }
}
</style>
