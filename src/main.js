import { createApp } from 'vue'
import { ElButton, ElTableColumn, ElTable, ElPagination } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
const app = createApp(App)
app.use(ElButton)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElPagination)
app.mount('#root')
