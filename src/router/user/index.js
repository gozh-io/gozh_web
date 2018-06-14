import UserCenter from  '@/components/user/Index'
import MyPublish from  '@/components/user/MyPublish'
import Profile from  '@/components/user/Profile'
import ModifyAvatar from  '@/components/user/ModifyAvatar'
import ChangePassword from '@/components/user/ChangePassword'

export default { // 用户中心
      path: '/user',
      component: UserCenter,
      children:[
        { // 默认用户中心页面
          path: '/user/:user_id',
          name: 'user',
          component: MyPublish,
          meta: {
            requiredAuth: true
          }
        },
        { // 用户修改个人资料
          path: 'profile/:user_id',
          name: 'user_profile',
          component: Profile,
          meta: {
            requiredAuth: true
          }
        },
        { // 用户修改个人资料
          path: 'change_password/:user_id',
          name: 'change_password',
          component: ChangePassword,
          meta: {
            requiredAuth: true
          }
        },
        { // 用户修改头像
          path: 'edit_avatar/:user_id',
          name: 'user_profile',
          component: ModifyAvatar,
          meta: {
            requiredAuth: true
          }
        },
        { // 我的文章
          path: 'my_article/:user_id',
          name: 'user_article',
          meta: {
            requiredAuth: true
          }
        }
      ]
    }