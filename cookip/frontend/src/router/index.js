// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import MainView from "@/views/MainView.vue";
import MemberView from "@/views/MemberView.vue";
import MyProfileView from "@/views/MyProfileView.vue";
import RecipeDetailView from "@/views/RecipeDetailView.vue";
import RecipeView from "@/views/RecipeView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import MyFavoriteView from "@/views/MyFavoriteView.vue";
import SearchView from "@/views/SearchView.vue";


// Mobile views
import GetstartView from "@/views/mobile/GetStartView.vue"
import CreateMemberView from "@/views/mobile/CreateMemberView.vue";
import EditProfileView from "@/views/mobile/EditProfileView.vue";
import LoginView from "@/views/mobile/LoginView.vue";
import MemberViewMobile from "@/views/mobile/MemberView.vue";
import SignUpView from "@/views/mobile/SignUpView.vue";
import MemberDetailView from "@/views/mobile/MemberDetailView";
import MobileHomeView from "@/views/mobile/MobileHomeView"

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/member",
    name: "member",
    component: MemberView,
  },
  {
    path: "/myprofile",
    name: "my-profile",
    component: MyProfileView,
  },
  {
    path: '/recipe/detail/:recipeid', // Example of dynamic route parameter
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
    path: "/mobile/createmember",
    name: "create-member",
    component: CreateMemberView,
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

export default router;
