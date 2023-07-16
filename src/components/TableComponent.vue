<template>
  <DataTable
    v-model:filters="filters"
    v-model:selection="selectedMessages"
    :value="products"
    tableStyle="min-width: 50rem"
    paginator
    :rows="4"
    dataKey="id"
    filterDisplay="row"
    :rowStyle="rowStyle"
  >
    <template #header>
      <div>
        <ButtonComponent
          type="button"
          icon="pi pi-check-square"
          label="Прочитано"
          outlined
          @click="markAsRead(selectedMessages)"
        />
      </div>
    </template>
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="date" header="Дата"></Column>
    <Column field="priority" header="Важность"></Column>
    <Column field="furniture" header="Оборудование"></Column>
    <Column field="message" header="Сообщение">
      <template #body="{ data }">
        {{ data.message }}
      </template>
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          class="p-column-filter"
          placeholder="Поиск по сообщению"
        />
      </template>
    </Column>
    <Column field="name" header="Ответственный"></Column>
  </DataTable>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { ProductData } from '@/data/data';

const selectedMessages = ref();
const products = ref();
const filters = ref({
  message: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
const rowStyle = (data) => {
  if (!data.isRead) {
    return { fontWeight: 'bold' };
  }
};
const markAsRead = (messages) => {
  messages.forEach((item) => item.isRead = true)
  selectedMessages.value = []
};

onMounted(() => {
  ProductData.getProducts().then((data) => (products.value = data));
});
</script>

<style scoped>
</style>