<template>
  <div class="create-task">
    <panel>
      <template #header>
        <h2>Criar Task</h2>
      </template>
      <div class="row py-2 d-flex align-items-end">
        <div class="item col-2">
          <h5>Tipo</h5>
          <Dropdown
            v-model="formData.type"
            :options="type"
            class="w-100"
            data-test="type"
          >
            <template #option="slotProps">
              {{ slotProps.option }}
            </template>
            <template #value="slotProps">
              <template v-if="formData.type">
                {{ slotProps.value }}
              </template>
              <template v-else>
                Tipo
              </template>
            </template>
          </Dropdown>
        </div>
        <div class="item col-3">
          <h5>Descrição</h5>
          <InputText
            v-model="formData.description"
            data-test="description"
            class="w-100"
            placeholder="Descrição"
          />
        </div>
        <div class="item col-3">
          <h5>Data Conclusão</h5>
          <Calendar
            v-model="formData.date"
            data-test="date"
            class="w-100"
            date-format="dd/mm/yy"
            placeholder="dd/mm/yy"
            :show-icon="true"
          />
        </div>
        <div class="item col-2">
          <h5>Status</h5>
          <Dropdown
            v-model="formData.status"
            data-test="status"
            :options="status"
            class="w-100"
          >
            <template #option="slotProps">
              {{ slotProps.option }}
            </template>
            <template #value="slotProps">
              <template v-if="formData.status">
                {{ slotProps.option }}
              </template>
              <template v-else>
                Status
              </template>
            </template>
          </Dropdown>
        </div>
        <div class="col-2">
          <Button
            data-test="createTask"
            label="Criar"
            :disabled="enabledcreateTask"
            @click="createTask"
          />
        </div>
      </div>
    </panel>
  </div>
</template>
<script lang="ts">

interface Task {
  type: string;
  date: string;
  description: string;
  status: string;
}
/* eslint-disable */
import Vue from 'vue';
import { addTask } from '@/views/todo-list/service/service';
import { format } from 'date-fns';
export default Vue.extend({
  props: ['dataTable'],
  data() {
    return {
      status: [
      'Impedimento',
      'Desenvolvimento',
      'Concluido'
      ],
      type: [
      'Sustentação',
      'Feature'
      ],
      formData: {
        type: '',
        date: '',
        description: '',
        status: '',
      } as Task,
    };
  },
  computed: {
    enabledcreateTask(): boolean {
      const { type, description, date, status } = this.formData;
      if (date && type && description && status) {
        return false;
      }
      return true;
    },
  },
  methods: {
    createTask(): void {
      addTask(this.parseTask()).then((resp: object) => {
        this.dataTable.push(resp);
        this.$toast.add({
          severity: 'success',
          detail: 'Task adicionado com sucesso!!',
          life: 3000,
        });
        this.clear();
      });
    },
    clear() {
      this.formData =  {
        type: '',
        date: '',
        description: '',
        status: '',
      };
    },
    parseTask(): object {
      const { type, description, date, status } = this.formData;
      return {
        type: type,
        description: description,
        date: this.formatDate(date),
        status: status,
      };
    },
    formatDate(date: any): string {
      const newDate = new Date(date);
      return format(newDate, 'dd/MM/yyyy');
    },
  },
});
</script>
<style lang="scss">
.create-task {
  display: flex;
  align-items: flex-end;

  .item {
    h5 {
      font-size: 15px;
      font-family: "SF Pro Display Medium";
    }
  }
}
</style>