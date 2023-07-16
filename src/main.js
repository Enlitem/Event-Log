import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import SelectButton from 'primevue/selectbutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primeicons/primeicons.css';

const app = createApp(App);

app.component('SelectButton', SelectButton)
app.component('DataTable', DataTable)
app.component('InputText', InputText)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Column', Column)
app.component('ButtonComponent', Button)

app.use(PrimeVue);

app.mount('#app');
