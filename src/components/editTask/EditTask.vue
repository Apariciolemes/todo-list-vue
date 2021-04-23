<template>
  <Dialog
    :visible.sync="displayModal"
    :style="{ width: '60vw' }"
    header="Editar Task"
    modal
  >
    <div class="todo-list__add row py-5 my-5">
      <div class="item col-3">
        <h5>Tipo</h5>
        <Dropdown
          v-model="formData.type"
          :options="typeTask"
          class="w-100"
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
          data-test="DescriptionEdit"
          class="w-100"
          placeholder="Descrição"
        />
      </div>
      <div class="item col-3">
        <h5>Data</h5>
        <Calendar
          v-model="formData.date"
          class="w-100"
          date-format="dd/mm/yy"
          placeholder="dd/mm/yy"
          :show-icon="true"
        />
      </div>
      <div class="item col-3">
        <h5>Status</h5>
        <Dropdown
          v-model="formData.status"
          :options="status"
          class="w-100"
        >
          <template #option="slotProps">
            {{ slotProps.option }}
          </template>
          <template #value="slotProps">
            <template v-if="status">
              {{ slotProps.value }}
            </template>
            <template v-else>
              Status
            </template>
          </template>
        </Dropdown>
      </div>
    </div>
    <template #footer>
      <Button
        label="Cancelar"
        @click="displayModal = false"
      />
      <Button
        label="Salvar"
        data-test="saveEdit"
        @click="editTask"
      />
    </template>
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { updateTask } from '@/views/todo-list/service/service';

export default Vue.extend({
  props: ['visible', 'data'],
  data() {
    return {
      formData: {
        type: '',
        date: '',
        description: '',
        status: '',
      },
      status: ['Impedimento', 'Desenvolvimento', 'Concluido'] as any,
      typeTask: ['Sustentação', 'Feature'] as any,
    };
  },
  computed: {
    displayModal: {
      get(): boolean {
        return this.visible;
      },
      set(value: boolean) {
        this.$emit('update:visible', value);
      },
    },
  },
  watch: {
    displayModal(newValue: boolean): void {
      if (newValue) {
        this.formData = { ...this.data };
      }
    },
  },
  methods: {
    editTask(): void {
      const id = this.data.id;
      if (this.enabledUpdate()) {
        this.$toast.add({
          severity: 'error',
          detail:
            'É necessário editar uma informação para fazermos a atualização da task!!',
          life: 3000,
        });
      } else {
        updateTask(id, this.parseEdit()).then((resp: any) => {
          this.$toast.add({
            severity: 'success',
            detail: 'Task editada com sucesso!!',
            life: 3000,
          });
          this.$emit('update', resp);
          this.displayModal = false;
        });
      }
    },
    parseEdit(): object {
      const {
        type, date, description, status,
      } = this.formData;
      return {
        type,
        date,
        description,
        status,
      };
    },
    enabledUpdate() {
      const data = this.data;
      const formDate = this.formData;
      const notChangeType = data.type === formDate.type;
      const notChangeDate = data.date === formDate.date;
      const notChangeDescription = data.description === formDate.description;
      const notChangeStatus = data.status === formDate.status;

      if (
        notChangeType
        && notChangeDate
        && notChangeDescription
        && notChangeStatus
      ) {
        return true;
      }
      return false;
    },
  },
});
</script>
