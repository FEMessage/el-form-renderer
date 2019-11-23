import Vue from 'vue'
import axios from 'axios'
import Elm from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSemverInput from '@femessage/el-semver-input'

Vue.use(Elm)
Vue.component('el-semver-input', ElSemverInput)

Vue.prototype.$axios = axios
