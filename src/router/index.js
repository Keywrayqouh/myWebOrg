import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import IfExample from '../views/IfExample.vue'
import ForExample from '../views/ForExample.vue'
import BtnExample from '../views/BtnExample.vue'
import BtnWithMethodExample from '../views/BtnWithMethodExample.vue'
import ComponentExample from '../views/ComponentExample.vue'
import RouterExample from '../views/RouterExample.vue'
import RequestExample from '../views/RequestExample.vue'
import TPPage from '../views/TPPage.vue'
import Exercise from '../views/Exercise.vue'
import Exercise2 from '../views/Exercise2.vue'

import TestPage from '../views/test-view-router/TestPage.vue'
import ArticlePage from '../views/test-view-router/ArticlePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/btn-example',
    name: 'btnExample',
    component: BtnExample
  },
  {
    path: '/if-example',
    name: 'ifExample',
    component: IfExample
  },
  {
    path: '/for-example',
    name: 'forExample',
    component: ForExample
  },
  {
    path: '/btn-example-with-methods',
    name: 'btnWithMethodExample',
    component: BtnWithMethodExample
  },
  {
    path: '/component-example',
    name: 'componentExample',
    component: ComponentExample
  },
  {
    path: '/router-example',
    name: 'router',
    component: RouterExample
  },
  {
    path: '/request-example',
    name: 'requestExample',
    component: RequestExample
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/articles/:paramsId',
    name: 'article',
    component: ArticlePage
  },
  {
    path: '/tp',
    name: 'TP',
    component: TPPage
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise
  },
  {
    path: '/exercise2',
    name: 'Exercise2',
    component: Exercise2
  }
]

const router = new VueRouter({
  routes
})

export default router
