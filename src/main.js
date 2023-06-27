import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
//import VueSweetAlert from "vue-sweetalert2";
//import "sweetalert2/dist/sweetalert2.min.css";
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)

  //.use(VueSweetAlert)
  .mount("#app");
