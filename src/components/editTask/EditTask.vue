<template>
  <Dialog
    :visible.sync="displayModal"
    :style="{ width: '80vw' }"
    header="Editar Task"
    modal
  >
    <div class="todo-list__add row pb-5">
      <div class="item col-3">
        <h5>Tipo</h5>
        <Dropdown :options="type" class="w-100" v-model="selectedType">
          <template #option="slotProps">
            {{ slotProps.option }}
          </template>
          <template #value="slotProps">
            <template v-if="selectedType">
              {{ slotProps.value }}
            </template>
            <template v-else> Tipo </template>
          </template>
        </Dropdown>
      </div>
      <div class="item col-3">
        <h5>Descrição</h5>
        <InputText
          class="w-100"
          v-model="selectedDescription"
          placeholder="Descrição"
          data-test="selectedDescriptionEdit"
        />
      </div>
      <div class="item col-3">
        <h5>Data</h5>
        <Calendar
          v-model="selectedDate"
          class="w-100"
          date-format="dd/mm/yy"
          placeholder="dd/mm/yy"
          :show-icon="true"
        />
      </div>
      <div class="item col-3">
        <h5>Status</h5>
        <Dropdown :options="status" class="w-100" v-model="selectedStatus">
          <template #option="slotProps">
            {{ slotProps.option }}
          </template>
          <template #value="slotProps">
            <template v-if="selectedStatus">
              {{ slotProps.value }}
            </template>
            <template v-else> Status </template>
          </template>
        </Dropdown>
      </div>
    </div>
    <template #footer>
      <Button label="Cancelar" class="danger" @click="displayModal = false" />
      <Button label="Salvar" class="success" @click="editTask" data-test="saveEdit" />
    </template>
  </Dialog>
</template>

<script lang="ts">
import Vue from "vue";
import moment from 'moment';
import { updateTask } from "@/views/todo-list/service/service";

export default Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: [] as any,
    }
  },
  data() {
    return {
      selectedType: "" as string,
      selectedDate: "" as string,
      selectedDescription: "" as string,
      selectedStatus: "" as string,
      status: ["Impedimento", "Desenvolvimento", "Concluido"] as any,
      type: ["Sustentação", "Feature"] as any,
    };
  },
  methods: {
    editTask(): void {
      if (this.enabledUpdate()) {
        this.$toast.add({
          severity: "error",
          detail:
            "É necessário editar uma informação para fazermos a atualização da task!!",
          life: 3000,
        });
      } else {
        updateTask(this.data.id, this.parseEdit())
          .then((resp: any) => {
            this.$toast.add({
              severity: "success",
              detail: "Task editada com sucesso!!",
              life: 3000,
            });
            this.$emit("update", resp);
            this.displayModal = false;
          })
          .catch(() => {
            this.$toast.add({
              severity: "error",
              detail: "Erro ao editar task!!",
              life: 3000,
            });
          });
      }
    },
    formatDate(date: string): string {
      return moment(date).format("DD/MM/YYYY");
    },
    parseEdit(): object {
      return {
        type: this.selectedType,
        date:  this.data.date !== this.selectedDate ? this.formatDate(this.selectedDate): this.selectedDate,
        description: this.selectedDescription,
        status: this.selectedStatus,
      };
    },
    enabledUpdate() {
      const notChangeType = this.data.type === this.selectedType;
      const notChangeDate = this.data.date === this.selectedDate;
      const notChangeDescription =
        this.data.description === this.selectedDescription;
      const notChangeStatus = this.data.status === this.selectedStatus;

      if (
        notChangeType &&
        notChangeDate &&
        notChangeDescription &&
        notChangeStatus
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    displayModal(newValue: boolean): void {
      if (newValue) {
        this.selectedType = this.data.type;
        this.selectedDate = this.data.date;
        this.selectedDescription = this.data.description;
        this.selectedStatus = this.data.status;
      }
    },
  },
  computed: {
    displayModal: {
      get(): boolean {
        return this.visible;
      },
      set(value: boolean) {
        this.$emit("update:visible", value);
      },
    },
  },
});
</script>
