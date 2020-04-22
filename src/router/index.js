import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import classification from '@/view/classification'
import hot from '@/view/hot'
import msgBoard from '@/view/msgBoard'
import login from '@/view/login'
import myself from '@/view/myself'
import articleDesc from '@/view/articleDesc'
import famousPeople from '@/view/famousPeople'
import article from '@/view/article'
import msg from '@/view/msg'
import addArticle from '@/view/addArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    },
    {
      path: '/msgBoard',
      name: 'msgBoard',
      component: msgBoard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    },
    {
      path: '/articleDesc',
      name: 'articleDesc',
      component: articleDesc
    },
    {
      path: '/famousPeople',
      name: 'famousPeople',
      component: famousPeople
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/addArticle',
      name: 'addArticle',
      component: addArticle
    }
  ]
})
