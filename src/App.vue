<template>
  <div class="container">
    <TabView>
      <TabPanel>
        <template #header>
          <i class="pi pi-list table-icon"></i>
          <span>Таблица</span>
        </template>
        <Table></Table>
      </TabPanel>
      <TabPanel>
        <template #header>
          <i class="pi pi-th-large table-icon "></i>
          <span>Карточки</span>
        </template>
        <div>Cards</div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import Table from './components/TableComponent.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100wh;
}

:deep(.p-tabview .p-tabview-panels) {
  padding: 0;
}

.table-icon {
  margin-right: 1rem;
}
</style>
