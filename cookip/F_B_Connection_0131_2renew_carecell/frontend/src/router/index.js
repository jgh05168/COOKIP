// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import MainView from '@/views/MainView.vue';
import CardBackView from '@/views/CardBack.vue';
import CardFrontView from '@/views/CardFront.vue';
import MemberView from '@/views/MemberView.vue';
import MyProfileView from '@/views/MyProfileView.vue';
import RecipeDetailView from '@/views/RecipeDetailView.vue';
import subTitleView from '@/views/subTitle.vue';
import SearchView from '@/views/SearchView.vue';
import UserProfileView from '@/views/UserProfileView.vue';

// Mobile views
import CreateMember from '@/views/mobile/CreateMember.vue';
import EditProfileView from '@/views/mobile/EditProfileView.vue';
import LoginView from '@/views/mobile/LoginView.vue';
import MemberViewMobile from '@/views/mobile/MemberView.vue';
import SignUpView from '@/views/mobile/SignUpView.vue';
import MemberDetailView from '@/views/mobile/MemberDetailView'

const routes = [
  {
    path: '/',
    name : 'main',
    component: MainView,
  },
  {
    path: '/home',
    name : 'home',
    component: HomeView,
  },
  {
    path: '/CardBack',
    name : 'CardBack',
    component: CardBackView,
  },
  {
    path: '/CardFront',
    name : 'CardFront',
    component: CardFrontView,
  },
  {
    path: '/member',
    name : 'member',
    component: MemberView,
  },
  {
    path: '/myprofile',
    name : 'my-profile',
    component: MyProfileView,
  },
  {
    path: '/recipe', // Example of dynamic route parameter
    name : 'recipe',
    component: RecipeDetailView,
  },
  {
    path: '/subTitle', // Example of dynamic route parameter
    name : 'subTitle',
    component: subTitleView,
  },
  {
    path: '/search',
    name : 'search',
    component: SearchView,
  },
  {
    path: '/userprofile/:userid', // Example of dynamic route parameter
    name : 'user-profile',
    component: UserProfileView,
  },
  // Mobile views
  {
    path: '/mobile/createmember',
    name : 'create-member',
    component: CreateMember,
  },
  {
    path: '/mobile/member/:id/editprofile',
    name : 'edit-profile',
    component: EditProfileView,
  },
  {
    path: '/mobile/login',
    name : 'login',
    component: LoginView,
  },
  {
    path: '/mobile/member',
    name : 'member',
    component: MemberViewMobile,
  },
  {
    path: '/mobile/signup',
    name : 'signup',
    component: SignUpView,
  },
  {
    path: '/mobile/member/:id',
    name : 'member-detail',
    component: MemberDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
