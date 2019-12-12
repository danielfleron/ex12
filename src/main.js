import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component("a-test",{
  data:function(){
    return{
      test:"okayyyy"
    }
  },
  template:"<h1>{{test}}</h1>"
})
new Vue({
  render: h => h(App),
}).$mount('#app')
