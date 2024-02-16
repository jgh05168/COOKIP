import { defineStore } from "pinia";
import { ref } from "vue";

export const useGuideStore = defineStore(
    "guiderecipe",
    () => {
        const now_recipe_id = ref(28);
        const now_recipe_info = ref({
            id: 28,
            name: "이태리 정통 까르보나라",
            image: "@/assets/image/recipe/2/carbonara.jpg",
            description: "이탈리아의 대표적인 파스타 요리인 까르보나라는 크림소스를 사용하지 않고 계란과 파마산 치즈로 진한 크림같은 맛을 낸다. 이탈리아의 정통 까르보나라를 집에서 만들어보자.",
            time: 30,
            level: "easy",
        })
        // 레시피 스텝 정보
        const now_recipe_step = ref([]);
        // 레스피 스텝의 스텝들 정보
        const now_recipe_stepofstep = ref([]);
        // 현재 레시피 전체 저장소, 객체로 재료 id 값으로 찾으면 됨
        const now_recipe_ingredients = ref({
            "9": {
              "id": 9,
              "name": "양파",
              "unit": "g",
              "quantity": 30,
              "image": "/image/guide/ingredient/item_onion.jpg"
            },
            "18": {
              "id": 18,
              "name": "마늘",
              "unit": "개",
              "quantity": 1,
              "image": "/image/guide/ingredient/item_garlic.jpg"
            },
            "21": {
              "id": 21,
              "name": "통후추",
              "unit": "약간",
              "quantity": 0,
              "image": "/image/guide/ingredient/item_blackpepper.jpg"
            },
            "29": {
              "id": 29,
              "name": "스파게티면",
              "unit": "g",
              "quantity": 100,
              "image": "/image/guide/ingredient/item_spaghetti.jpg"
            },
            "30": {
              "id": 30,
              "name": "치킨스톡",
              "unit": "ml",
              "quantity": 200,
              "image": "/image/guide/ingredient/item_chickenstock.jpg"
            },
            "31": {
              "id": 31,
              "name": "베이컨",
              "unit": "g",
              "quantity": 70,
              "image": "/image/guide/ingredient/item_bacon.jpg"
            },
            "32": {
              "id": 32,
              "name": "파슬리",
              "unit": "약간",
              "quantity": 0,
              "image": "/image/guide/ingredient/item_parsley.jpg"
            },
            "33": {
              "id": 33,
              "name": "달걀",
              "unit": "개",
              "quantity": 2,
              "image": "/image/guide/ingredient/item_egg.jpg"
            },
            "35": {
              "id": 35,
              "name": "파르미지아노 레지아노 치즈",
              "unit": "약간",
              "quantity": 0,
              "image": "/image/guide/ingredient/item_granapadanocheese.jpg"
            },
            "36": {
              "id": 36,
              "name": "올리브유",
              "unit": "큰술",
              "quantity": 1,
              "image": "/image/guide/ingredient/item_oliveoil.jpg"
            }
          });
        // 현재 레시피 전체 도구 정보, 객체로 바로 찾으면 됨
        const now_recipe_utencils = ref({});

        return {
            now_recipe_id,
            now_recipe_info,
            now_recipe_step,
            now_recipe_ingredients,
            now_recipe_stepofstep,
            now_recipe_utencils,
        };
    },
    { persist: true }
);
