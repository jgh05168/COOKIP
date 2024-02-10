import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import axios from 'axios'

export const useRecipeStore = defineStore('recipe', () => {
  const user_ingredients = ref([]); // 모든 식자재
  const user_ingredient_availble = ref([]);
  const recipes = ref([]); // 모든 레시피 데이터
  const user_category = ref([]); //카테고리 테이블 모든 데이터
  const ingredients = ref([]);
  const useIngredient_recipe = ref([]) ;
  const score = ref([]); // 평점
  const Allergy = ref([]); // 알러지
  const Follow = ref([]); // 쉐프팔로우
  const Favorite_category = ref([]);
  const Favorite_ingredient = ref([]);
  const favorite_recipe = ref([]);
  //const expiration = ref([]); // 유통기한

  //servey에 필요한 재료목록 정의
  // 선호재료
  const ingredient_servey = computed(() => {
    return user_ingredients.value.map(item => ({
      ingredient_id: item.ingredient_id,
      ingredient_name: item.ingredient_name
    }));
  });
  console.log("카테고리",user_ingredient_availble.value);
  const ingredientIds = computed(() => {
    return user_ingredient_availble.value.map(item => ({ingredient_id:item.ingredient_id}));
  });
  console.log("ingredientIds",ingredientIds);

  // 추천 카테고리
  const recommend_category = ref([
    {id:1, title:"냉장고에 있는 재료로 만들기", img:"refrigerator.png"}, // 지금 냉장고에 있는 재료로
    {id:2, title:"실시간 인기 음식" , img:"popularity.png"}, // 실시간 인기 음식(좋아요 순)
    {id:3, title:"사용자 맞춤" , img:"profile.png"}, // 선호설문결과로  
    {id:4, title:"오늘의 추천" , img:"today.png"}, // 랜덤
  ])

  //favorite_recipe userid로 가져오기
  const filteredFavorites = (userId) => computed(() => {
    return favorite_recipe.value.filter(item => item.user_id === userId);
  });


  //무작위 오늘의 추천
  const category_1 = computed(() => {
    // 데이터를 복사하여 변경사항이 원본 데이터에 영향을 미치지 않음.
    const shuffledRecipes = [...recipes.value].sort(() => Math.random() - 0.5);
    // 무작위로 섞인 데이터를 5개씩 묶어 배열을 만듬.
    return Array.from({ length: Math.ceil(shuffledRecipes.length / 5) }, (value, index) =>
        shuffledRecipes.slice(index * 5, index * 5 + 5)
    );
  });
  console.log("무작위 추천",category_1);


  //실시간 인기 음식(평점 (좋아요) 순)
  const category_2 = computed(() => {
    // 데이터를 복사하여 변경사항이 원본 데이터에 영향을 미치지 않도록 합니다.
    const sortedRecipes = [...recipes.value].sort((a, b) => b.recipe_score - a.recipe_score);

    // 내림차순으로 정렬된 데이터를 5개씩 묶어 배열을 만듭니다.
    return Array.from({ length: Math.ceil(sortedRecipes.length / 5) }, (value, index) =>
        sortedRecipes.slice(index * 5, index * 5 + 5)
    );
  });
  console.log("무작위 추천2",category_2);


  const category_3 = computed(() => {
    return  Array.from({ length: Math.ceil(recipes.value.length / 5) }, (value, index) =>
    recipes.value.slice(index * 5, index * 5 + 5)
  );
  })

  const category_4 = computed(() => {
    return  Array.from({ length: Math.ceil(recipes.value.length / 5) }, (value, index) =>
    recipes.value.slice(index * 5, index * 5 + 5)
  );
  })

 
  // 추천 카테고리 별로 데이터 쪼개기
  const recommend_list = ref([
    {category : 1, recipe_list: category_1 },
    {category : 2, recipe_list: category_2},
    {category : 3, recipe_list: category_3},
    {category : 4, recipe_list: category_4},
  ])


  //console.log("보내지는창",ingredient_servey, category_servey);
  const selected_category = ref(0)
  
  return { recipes, ingredients, user_ingredients,useIngredient_recipe,score,Allergy,Follow,Favorite_category,Favorite_ingredient,recommend_category, recommend_list, 
    selected_category,ingredient_servey,user_category,filteredFavorites }
  }, { persist: true })
  