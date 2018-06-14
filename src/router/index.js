import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/ArticleList'
import Show from '@/components/Show'
import Login from  '@/components/Login'
import Join from '@/components/Join'
import Create from '@/components/user/Create'
import Courses from '@/components/Courses'
import CourseContents from '@/components/CourseContents'
import Documents from '@/components/Documents'
import User from './user/'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Index,
      redirect: 'list',
      children: [
        { //默认首页
          path: "/list",
          name: 'index',
          component: List
        },
        { // 文章详情
          path: '/list/:user/:article_flag',
          name: 'article',
          component: Show
        },
      ]
    },
    {// 发帖
      path: '/create',
      name: 'create',
      component: Create,
      meta: {
        requiredAuth: true
      }
    },
    User,
    { // 登录
      path: '/login',
      name: 'login',
      component: Login
    },

    {// 注册
      path: '/join',
      name: 'join',
      component: Join
    },

    {// 教程页面
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {// 教程目录
      path: '/courses/:course_id',
      name: 'course_contents',
      component: CourseContents
    },
    {// 文档页面
      path: '/documents',
      name: 'documents',
      component: Documents
    }
  ]
})
