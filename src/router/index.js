import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "@/components/MainPage";
import AddTrainingPage from "@/components/AddTrainingPage";

Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', component:  MainPage},
        { path: '/mainPage', component:MainPage},
        { path: '/addTrainingPage', component: AddTrainingPage}
    ],
    mode: "history"
})