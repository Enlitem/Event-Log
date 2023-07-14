import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import SelectButton from 'primevue/selectbutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/tailwind-light/theme.css'

const app = createApp(App);

app.component('SelectButton', SelectButton)
app.component('DataTable', DataTable)
app.component('InputText', InputText)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Column', Column)

app.use(PrimeVue);

app.mount('#app');
