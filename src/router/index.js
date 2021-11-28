import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import HomeNew from '@/components/HomeNew'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Meetups from '@/components/Meetup/Meetups'
import Meetup from '@/components/Meetup/Meetup'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Profile from '@/components/User/Profile'
import Products from '@/components/Products'
// import AuthGuard from "./auth-guard"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "HomeNew",
            component: HomeNew

        },
        {
            path: "/meetups",
            name: "Meetups",
            component: Meetups

        },
        {
            path: "/meetup/new",
            name: "CreateMeetup",
            component: CreateMeetup,
            // beforeEnter: AuthGuard

        },
        {
            path: "/meetups/:id",
            name: "Meetup",
            props: true,
            component: Meetup

        }, {
            path: "/signup",
            name: "Signup",
            component: Signup

        }, {
            path: "/signin",
            name: "Signin",
            component: Signin

        }, {
            path: "/profile",
            name: "Profile",
            component: Profile,
            // beforeEnter: AuthGuard

        }, {
            path: "/products",
            name: "Products",
            component: Products,


        }
    ],
    mode: 'history'
})