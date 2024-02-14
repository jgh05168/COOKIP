// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CreateProfileView from "@/views/CreateProfileView.vue";
import MainView from "@/views/MainView.vue";
import MemberView from "@/views/MemberView.vue";
import RecipeDetailView from "@/views/RecipeDetailView.vue";
import RecipeView from "@/views/RecipeView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import MyFavoriteView from "@/views/MyFavoriteView.vue";
import SearchView from "@/views/SearchView.vue";


// Mobile views
import MakeProfileView from "@/views/mobile/MakeProfileView.vue"
import MyProfileView from "@/views/mobile/MyProfileView.vue";
import GetstartView from "@/views/mobile/GetStartView.vue"
import CreateMemberView from "@/views/mobile/CreateMemberView.vue";
import servey_allergView from "@/components/create/servey_allerg.vue";
import servey_ingredientView from "@/components/create/servey_ingredient.vue";
import EditProfileView from "@/views/mobile/EditProfileView.vue";
import LoginView from "@/views/mobile/LoginView.vue";
import MemberViewMobile from "@/views/mobile/MemberView.vue";
import SignUpView from "@/views/mobile/SignUpView.vue";
import MemberDetailView from "@/views/mobile/MemberDetailView";
import MobileHomeView from "@/views/mobile/MobileHomeView"

const routes = [
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/createprofile",
    name: "create-profile",
    component: CreateProfileView,
  },
  {
    path: "/member",
    name: "member",
    component: MemberView,
  },
  {
    path: '/recipe/detail', // Example of dynamic route parameter
    name : 'recipe-detail',
    component: RecipeDetailView,
  },
  {
    path: "/recipe",
    name: "recipe",
    component: RecipeView,
  },
  {
    path: "/userprofile/:userid", // Example of dynamic route parameter
    name: "user-profile",
    component: UserProfileView,
  },
  {
    path: "/favorite", // Example of dynamic route parameter
    name: "my-favorite",
    component: MyFavoriteView,
  },
  {
    path: "/search", // Example of dynamic route parameter
    name: "search",
    component: SearchView,
  },
  
  
  
  // Mobile views
  {
    path: "/mobile/makeprofile",
    name: "mobile-make-profile",
    component: MakeProfileView,
  },
  {
    path: "/mobile/home",
    name: "mobile-home",
    component: MobileHomeView,
  },
  {
    path: "/mobile/start",
    name: "get-start",
    component: GetstartView,
  },
  {
    path: "/mobile/myprofile",
    name: "my-profile",
    component: MyProfileView,
  },
  {
    path: "/mobile/createmember",
    name: "create-member",
    component: CreateMemberView,
  },
  {
    path: "/mobile/servey_allerg",
    name: "servey_allerg",
    component: servey_allergView,
  },
  {
    path: "/mobile/servey_ingredient",
    name: "servey_ingredient",
    component: servey_ingredientView,
  },
  {
    path: "/mobile/member/:id/editprofile",
    name: "edit-profile",
    component: EditProfileView,
  },
  {
    path: "/mobile/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/mobile/member",
    name: "mobile-member",
    component: MemberViewMobile,
  },
  {
    path: "/mobile/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/mobile/member/:id",
    name: "member-detail",
    component: MemberDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('Islogin');


//   const publicRoutes = ['/mobile/login', '/mobile/signup', '/mobile/home', '/', '/mobile/start'];
//   const restrictedRoutes = ['/mobile/login', '/mobile/signup'];


//   if (!isLogin || (isLogin === '0' && !publicRoutes.includes(to.path))) {
//     alert('로그인이 필요합니다.');
//     next('/mobile/login');
//   } else if (isLogin === '1' && restrictedRoutes.includes(to.path)) {
//     next(from.path)
//   } else {
//     next(); 
//   }
// });


export default router;

