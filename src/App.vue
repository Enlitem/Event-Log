<template>
  <div class="container">
    <TabView>
      <TabPanel header="Таблица">
        <Table></Table>
      </TabPanel>
      <TabPanel header="Карточки">
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

:deep(.p-tabview .p-tabview-panels){
  padding: 0;
}

</style>
