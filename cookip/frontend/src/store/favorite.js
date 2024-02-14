import { defineStore } from 'pinia';
import { ref, computed} from 'vue';
import { useAuthStore } from './auth';

export const useFavoriteStore = defineStore('favorite', () => {
    const recipes = ref([]);
    const Favorite_recipe = ref([]);
    const authStore = useAuthStore()
    //console.log("Favorite_recipe",Favorite_recipe,recipes);
    // 멤버 별 즐겨찾기 목록
    const member_list = ref(authStore.memberList)
    const member_favorite = ref([
      {favorite_list:[1,2,3]},
      {favorite_list:[1,2,3,4,5,6]},
      {favorite_list:[1,2,3,4,]},
      {favorite_list:[1,2,3,4,]},
    ])

    const user_id =2;
    const profile_id =1;

    const favorite_recipe_list = (user_id, profile_id) => computed(() => {
      // Allergy 데이터에서 userId와 user_pw에 해당하는 ingredient_id 추출
      const FavoriteRecipeIds = Favorite_recipe.value.filter(item => item.user_id === user_id && item.profile_id === profile_id)
          .map(item => item.recipe_id);
  
      // Allergy에 해당하는 recipe_id를 제외한 레시피 필터링
      const FilterdRecipes = recipes.value.filter(recipe => FavoriteRecipeIds.includes(recipe.recipe_id));
  
      // 랜덤으로 정렬된 레시피를 5개씩 묶어서 반환
      return Array.from({ length: Math.ceil(FilterdRecipes.length / 5) }, (_, index) =>
        FilterdRecipes.slice(index * 5, index * 5 + 5)
      );
    });

    console.log("favorite_recipe_list",favorite_recipe_list(user_id,profile_id));



    // user_id 로 즐겨찾기 목록 받아오기
    // 받아온 즐겨찾기 목록 돌면서 멤버별로 분리하기



  return {
  member_list,
    member_favorite,
    recipes,
    Favorite_recipe,
    favorite_recipe_list
  };
}, { persist: true });
