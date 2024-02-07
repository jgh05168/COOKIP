import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import axios from 'axios'

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref([]); // 모든 레시피 데이터
  const ingredients = ref([])
  const user_ingredients = ref([])



  // 추천 카테고리
  const recommend_category = ref([
    {id:1, title:"냉장고에 있는 재료로 만들기", img:"refrigerator.png"}, // 지금 냉장고에 있는 재료로
    {id:2, title:"실시간 인기 음식" , img:"popularity.png"}, // 실시간 인기 음식(좋아요 순)
    {id:3, title:"사용자 맞춤" , img:"profile.png"}, // 유통기한 적게 남은 순
    {id:4, title:"오늘의 추천" , img:"today.png"}, // 
    {id:5, title:"조리시간 별 추천" , img:"refrigerator.png"}, // 
  ])

  // 카텍고리 별로 레시피 리스트 만들기
  const category_1 = computed(() => {
    return  Array.from({ length: Math.ceil(recipes.value.length / 5) }, (value, index) =>
    recipes.value.slice(index * 5, index * 5 + 5)
  );
  })

  const category_2 = computed(() => {
    return  Array.from({ length: Math.ceil(recipes.value.length / 5) }, (value, index) =>
    recipes.value.slice(index * 5, index * 5 + 5)
  );
  })

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

  const category_5 = computed(() => {
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
    {category : 5, recipe_list: category_5},
  ])

  const selected_category = ref(0)


  const currentRowSlide = ref(0)
  
    return { recipes, ingredients, user_ingredients,recommend_category, recommend_list, 
    selected_category, currentRowSlide }
  }, { persist: true })
  