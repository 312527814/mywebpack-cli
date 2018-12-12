import Vue from 'vue/dist/vue'
import App from './app'
import App1 from './app.1'
import './src/assets/content/common.css'
import './src/assets/content/common.1.css'

// new Vue({
//     el: '#app',
//     components:{App},
//     template:'<App></App>'

// })

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    created() {

    }
})