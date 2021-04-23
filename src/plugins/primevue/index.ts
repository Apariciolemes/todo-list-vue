import Vue from 'vue';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

Vue.component('Dropdown', Dropdown);
Vue.component('Dialog', Dialog);
Vue.component('Sidebar', Sidebar);
Vue.component('InputText', InputText);
Vue.component('Panel', Panel);
Vue.component('Calendar', Calendar);
Vue.component('Button', Button);
Vue.component('RadioButton', RadioButton);
Vue.component('Toast', Toast);
Vue.directive('tooltip', Tooltip);

Vue.use(ToastService);
