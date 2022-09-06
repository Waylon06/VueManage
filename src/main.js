import Vue from 'vue'
import App from './App.vue'

import router from '../router'
import store from './store'
import http from 'axios'
import '../api/mock.js'

import { Button, Container, Aside, Header, Main, Menu, Submenu, MenuItemGroup, MenuItem, Dropdown, DropdownMenu, DropdownItem, Row, Card, Col, Table, TableColumn} from 'element-ui';

import './assets/less/index.less'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)


Vue.prototype.$http = http
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
