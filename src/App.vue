<template>
  <div class="container">
    <SelectButton v-model="selected" :options="['Таблица', 'Карточки']" aria-labelledby="basic" />
    <Table v-if="selected === 'Таблица'"></Table>
    <div v-else>Cards</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Table from './components/TableComponent.vue';

const selected = ref('Таблица');
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100wh;
}
</style>
