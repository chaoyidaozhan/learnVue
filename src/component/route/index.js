import App from '../../app.vue'

export default [{
    path:'/',
    component:App,
    children: [{
        path: "login", //登录
        component: resolve => require(['../login.vue'], resolve),
    },{
        path: "markList", //登录
        component: resolve => require(['../list/markList/markList.vue'], resolve),
    },{
        path: "pictureList", //登录
        component: resolve => require(['../list/pictureList/pictureList.vue'], resolve),
    },{
        path: "wordList", //登录
        component: resolve => require(['../list/wordList/wordList.vue'], resolve),
    },{
        path: "wordDateList", //登录
        component: resolve => require(['../list/wordDateList/wordDateList.vue'], resolve),
    },{
        path: "dotCircle", //登录
        component: resolve => require(['../circle/dotCircle/dotCircle.vue'], resolve),
    },
    ]
}]