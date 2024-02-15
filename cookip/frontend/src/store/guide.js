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
        const now_recipe_ingredients = ref({});
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
