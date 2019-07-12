import Vue from 'vue'
import Elm from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import UploadToAli from '@femessage/upload-to-ali'

Vue.use(Elm)
Vue.component('upload-to-ali', UploadToAli)
