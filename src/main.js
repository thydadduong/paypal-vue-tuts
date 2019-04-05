import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

///---------------------------------------------------
///A business testing account
///pp.merch01-facilitator@example.com
///---------------------------------------------------

///---------------------------------------------------
///A business testing account
///personal testing account.
///pp.merch01-buyer@example.com.
///---------------------------------------------------

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
