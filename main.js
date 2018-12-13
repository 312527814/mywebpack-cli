import Vue from 'vue'
import App from './app'
import App1 from './app.1'
import './src/assets/content/common.css'
import './src/assets/content/common.1.css'
import MyApp from "./MyApp";

// new Vue({
//     el: '#app',
//     components:{App},
//     template:'<App></App>'

// })

new Vue({
    el: '#app',
    components: { App ,MyApp},
    template: '<div><App/><br />大大大<MyApp /></div>',
    created() {

    }
})