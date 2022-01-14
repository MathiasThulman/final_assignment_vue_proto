import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import CreateAccountPage from "@/components/CreateAccountPage";
import MainPage from "@/components/MainPage";
import AddTrainingPage from "@/components/AddTrainingPage";

Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', component:  HomePage},
        { path: '/createAccountPage', component:CreateAccountPage},
        { path: '/mainPage', component:MainPage},
        { path: '/addTrainingPage', component: AddTrainingPage}
    ],
    mode: "history"
})