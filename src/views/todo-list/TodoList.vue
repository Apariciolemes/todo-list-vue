<template>
  <div class="todo-list">
    <CreateTask :data-table.sync="dataTable" />
    <div class="todo-list__table pb-2">
      <CustomTable
        :columns-data="columnData"
        :title="titleTableTodo"
        :empty="dataTableTodo.length > 0"
      >
        <template slot="content-filter">
          <div class="d-flex align-items-center py-4 px-2">
            <div
              v-for="item in contentFilter"
              :key="`${item}-key`"
            >
              <RadioButton
                :id="item.id"
                v-model="checkSelected"
                class="ml-2"
                :value="item.id"
              />
              <label
                class="ml-1 mb-0"
                :for="item.id"
              >
                {{ `${item.value}(s)` }}
              </label>
            </div>
          </div>
        </template>

        <template slot="body">
          <tr
            v-for="(item, index) in dataTableTodo"
            :key="`${index} - ${item}`"
          >
            <td class="position-relative">
              <span
                class="position-absolute"
                :class="returnColorStatus(item)"
              />
              {{ item.status }}
            </td>
            <td>
              {{ item.type }}
            </td>
            <td>
              {{ item.description }}
            </td>
            <td>
              {{ item.date }}
            </td>
            <td>
              <div class="d-flex align-items-center justify-content-center">
                <div
                  v-if="item.status !== 'Concluido'"
                  v-tooltip.top="'Marcar como concluído'"
                  class="action"
                  :class="{ markConclued: index === 0 }"
                  @click="markConclued(item)"
                >
                  <font-awesome-icon
                    icon="check-square"
                    class="mx-2 check-done"
                  />
                </div>
                <div
                  v-tooltip.top="'Remover Task'"
                  :class="{ removeTask: index === 0 }"
                  class="action"
                  @click="removeTask(item)"
                >
                  <font-awesome-icon
                    icon="trash-alt"
                    class="mx-2 trash"
                  />
                </div>
                <div
                  v-if="item.status !== 'Concluido'"
                  v-tooltip.top="'Editar Task'"
                  :class="{ editTask: index === 0 }"
                  class="action"
                  @click="editDocument(item)"
                >
                  <font-awesome-icon
                    icon="edit"
                    class="mx-2"
                  />
                </div>
              </div>
            </td>
          </tr>
        </template>
      </CustomTable>
    </div>
    <div class="todo-list__table pb-2">
      <CustomTable
        :columns-data="columnData"
        :title="titleTableConclued"
        :show-filter="false"
        :empty="dataTableConclued.length > 0"
      >
        <template slot="body">
          <tr
            v-for="(item, index) in dataTableConclued"
            :key="`${index} - ${item}`"
          >
            <td class="position-relative">
              <span
                class="position-absolute"
                :class="returnColorStatus(item)"
              />
              {{ item.status }}
            </td>
            <td>
              {{ item.type }}
            </td>
            <td>
              {{ item.description }}
            </td>
            <td>
              {{ item.date }}
            </td>
            <td>
              <div
                v-tooltip.top="'Remover Task'"
                class="action"
                @click="removeTask(item)"
              >
                <font-awesome-icon
                  icon="trash-alt"
                  class="mx-2 trash"
                />
              </div>
            </td>
          </tr>
        </template>
      </CustomTable>
    </div>
    <div class="todo-list__buttons pb-5">
      <hr>
      <Button
        label="Limpar task(s)"
        class="remove removeAllTask"
        @click="removeAll"
      />
    </div>
    <EditTask
      :visible.sync="visible"
      :data="itemEdit"
      @update="updateDataTable"
    />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { format } from "date-fns";
import CustomTable from "@/components/custom-table/CustomTable.vue";
import { getTask, deleteTask, editStatus } from "@/views/todo-list/service/service";
//@ts-ignore
import CreateTask from "@/components/createTask/CreateTask.vue";
import EditTask from "@/components/editTask/EditTask.vue";

export default Vue.extend({
  components: { CustomTable, EditTask, CreateTask },
  data() {
    return {
      dataTable: [] as Array<any>,
      contentFilter: [
        {
          id: "credit",
          value: "Pendente",
        },
        {
          id: "pending",
          value: "Impedimento",
        },
        {
          id: "progress",
          value: "Desenvolvimento",
        },
      ],
      titleTableTodo: "Task(s) - a fazer",
      titleTableConclued: "Task(s) - concluida",
      checkSelected: "",
      itemEdit: [],
      visible: false,
      columnData: {
        columnsToShow: ["Status", "Tipo", "Descrição", "Data", ""],
      },
    };
  },
  computed: {
    dataTableTodo(): any {
      if (this.checkSelected) {
        const resultFilter = this.dataTable.filter(
          (item: any) => this.checkSelected === item.status
        );
        return resultFilter;
      }
      return this.dataTable.filter((item: any) => item.status !== "Concluido");
    },
    dataTableConclued(): any {
      return this.dataTable.filter((item: any) => item.status === "Concluido");
    },
  },
  watch: {
    checkSelected(value: string) {
      const status: any = {
        impedimento: "Tasks em Impedimento",
        desenvolvimento: " Tasks em Desenvolvimento",
        "": "Task(s) - a fazer",
      };
      this.titleTableTodo = status[value.toLowerCase()];
    },
  },
  mounted() {
    getTask().then((resp: any) => {
      this.dataTable = resp.map((item: any) => item);
    });
  },
  methods: {
    updateDataTable(item: any) {
      const indexTask: any = this.dataTable.findIndex(
        (task: any) => task.id === item.id
      );
      this.dataTable.splice(indexTask, 1, item);
    },
    removeAll() {
      this.dataTable.forEach((item: any) => {
        deleteTask(item.id);
      });
      this.dataTable = [];
      if (this.dataTable.length < 1) {
        this.$toast.add({
          severity: "success",
          detail: "Todas as task(s) concluidas foram removidas!!",
          life: 3000,
        });
      }
    },
    editDocument(task: any): void {
      this.visible = true;
      this.itemEdit = task;
    },
    markConclued(task: any): void {
      const indexTask = this.dataTable.findIndex(
        (item: any) => item.id === task.id
      );
      editStatus(task.id, { status: "Concluido" }).then(() => {
        this.dataTable[indexTask].status = "Concluido";
        this.$toast.add({
          severity: "success",
          detail: "Task movida para concluído!!",
          life: 3000,
        });
      });
    },
    returnColorStatus(item: any) {
      const status = item.status.toLowerCase();
      const colorsStatus: any = {
        impedimento: "status-error span-status",
        desenvolvimento: " status-processing span-status",
        concluido: "status-done span-status",
      };
      return colorsStatus[status];
    },
    formatDate(date: string | Date) {
      return format(new Date(date), "dd/MM/yyyy");
    },
    removeTask(task: any): void {
      const indexTask: number = this.dataTable.findIndex(
        (item: any) => item.id === task.id
      );
      deleteTask(task.id).then(() => {
        this.dataTable.splice(indexTask, 1);
        this.$toast.add({
          severity: "success",
          detail: "Task removida com sucesso!!",
          life: 3000,
        });
      });
    },
  },
});
</script>

<style lang="scss">
.todo-list {
  h2 {
    font-family: "SF Pro Display Bold";
  }
  &__table {
    .check-done {
      color: #25a57d;
    }
    .trash {
      color: #d54545;
    }
    .span-status {
      height: 30px;
      width: 4px;
      left: 0;
      border-radius: 0px 5px 5px 0px;
      top: 11px;
    }
    .status-done {
      background: #25a57d;
    }
    .status-error {
      background: #d54545;
    }
    .status-processing {
      background: #2196f3;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    .remove {
      background: #d54545;
    }
  }
}
</style>