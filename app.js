import im from './src/assets/image/a.png'
import App1 from './app.1'
export default {
    data(){
        return {
            img:im,
            a:''
        }
    },
    components: { App1 },
    template:`
        <div>
            <h1>我是app</h1>
            <img :src='img'>
            <App1 />
        </div>
        
    `
}