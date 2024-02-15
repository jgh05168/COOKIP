<template>
    <div class="frame">
      <div class="div-wrapper">
        <div class="icon">
          <v-img
            @click="goback()"
            class="color"
            alt="Color"
            src="../../assets/login_icon/Start Button.png"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
          />
        </div>
      </div>
      <div class="div-wrapper">
        <div class="frame-wrapper">
          <div class="div">
            <div class="div-2">
              <div class="div-3">
                <v-icon>mdi-food-steak-off</v-icon>
                <div class="basic-details">Allergy</div>
              </div>
              <div class="to-sign-up-you-need">
                Choose your Allergy ingredient
              </div>
            </div>
            <div class="search-container">
      <input style="width: 250px;" type="text" v-model="searchQuery" placeholder="알러지가 있는 재료를 검색하세요..." class="search-input">
      <v-btn color="#A1887F" @click="addSelectedIngredient" class="add-button">추가</v-btn>
    </div>
    <v-btn
                  @click="goLogin"
                  class="continue"
                  color="#007aff"
                  dark
                  elevation="2"
                  >Make Profile</v-btn
                >
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import router from "@/router";
  import { ref, onMounted, defineProps } from "vue";
  import { useRecipeStore } from "@/store/recipe";
  import axios from 'axios'; // Axios 라이브러리 가져오기
  const recipeStore = useRecipeStore();


  const props = defineProps({
    showBack: Function,
  });
  

  
  const goLogin = () => {
    submitSurvey()
    router.push({name:'my-profile'})
  }

  const colorElement = ref(null);
  const handleMouseOver = () => {
    // 이미지에 마우스 호버 시 크기를 확대
    document.querySelector(".color").style.transform = "scale(2)";
  };
  
  const handleMouseLeave = () => {
    // 마우스를 뗄 때 이미지 크기를 원래 크기로 되돌림
    document.querySelector(".color").style.transform = "scale(1)";
  };
  
  onMounted(() => {
    colorElement.value = document.querySelector(".color");
  });
  
  const goback = function(){
    props.showBack()
  }

  const searchQuery = ref('');
  const selectedChoices = ref([]);
  
  const addSelectedIngredient = () => {
  if (searchQuery.value.trim() !== '') {
    // 검색한 값이 ingredient_servey에 있는지 확인
    const ingredientExists = recipeStore.ingredient_servey.some(item => item.ingredient_name === searchQuery.value.trim());
    if (ingredientExists) {
      selectedChoices.value.push(searchQuery.value.trim());
      console.log(searchQuery.value);
    } else {
      console.log('검색한 재료가 존재하지 않습니다.');
      // 혹은 사용자에게 알림을 표시할 수 있습니다.
    }
    searchQuery.value = '';
  }
};
  


  const user_id = 1;
  const user_profile = 1;
  
  //post함수
  const submitSurvey = () => {
    const extractIngredientIds = () => {
  // 선택된 카테고리들의 카테고리 ID와 이름을 저장할 배열
  const ingredients = [];

  // 선택된 카테고리들을 순회하면서 검사
  selectedChoices.value.forEach(choice => {
    // 선택된 카테고리가 recipeStore.ingredient_servey에 있는지 확인
    const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
    
    // 선택된 카테고리가 존재하면 카테고리 ID와 이름을 객체로 만들어 배열에 추가
    if (ingredient) {
      ingredients.push({
        ingredient_id: ingredient.ingredient_id,
        ingredient_name: ingredient.ingredient_name
      });
    }
  });

  return ingredients;
};

const selectedIngredientIds = extractIngredientIds();
//console.log("selectedCategoryIds",selectedCategoryIds);

// 이미 선택된 항목인지 확인
const existingFavorites = recipeStore.Allergy.filter(favorite => {
    return (
        favorite.user_id === user_id &&
        favorite.profile_id === user_profile &&
      
        selectedIngredientIds.map(ingredient => ingredient.ingredient_id).includes(favorite.ingredient_id)
    );
});

if (existingFavorites.length > 0) {
    // 이미 선택된 항목 중 하나라도 존재하면 해당 항목만 추가
    console.log("이미 선택된 항목이 있습니다.");
    const existingCategoryIds = existingFavorites.map(favorite => favorite.ingredient_id);
    const newCategoryIds = selectedIngredientIds.map(ingredient => ingredient.ingredient_id).filter(id => !existingCategoryIds.includes(id));
    if (newCategoryIds.length === 0) {
        // 이미 존재하는 항목만 선택한 경우
        console.log("이미 존재하는 항목만 선택되었습니다.");
        return;
    }
    // 이미 존재하는 항목 외의 항목을 추가
    selectedIngredientIds.length = 0;
    selectedIngredientIds.push(...newCategoryIds);
  }

    axios.post('http://localhost:3002/user/allergy', {
        user_id: user_id,
        profile_id: user_profile,
        ingredients: selectedIngredientIds
    })
    .then(response => {
        console.log('서버 응답:', response.data);
        alert("선호도 조사 완료");
    })
    .catch(error => {
        console.error('POST 요청 오류:', error);
    });
};
  </script>
  
  <style>
  .frame {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }
  
  .frame .div-wrapper {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
    width: 360px;
  }
  
  .frame .start-button {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 12px;
    position: relative;
  }
  
  .frame .icon {
    height: 50px;
    position: relative;
    width: 50px;
  }
  
  .frame .color {
    height: 100%;
    left: 4px;
    top: 4px;
    width: 50px;
  }
  
  .color {
    transition: transform 0.3s ease-in-out; /* 부드러운 전환을 위한 CSS 속성 */
  }
  
  .frame .frame-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    padding: 0px 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .div {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  
  .frame .div-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    position: relative;
  }
  
  .frame .img {
    height: 40px;
    position: relative;
    width: 40px;
  }
  
  .frame .basic-details {
    color: #1a1c29;
    font-family: "Roboto-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .frame .to-sign-up-you-need {
    align-self: stretch;
    color: #797979;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    position: relative;
  }
  
  .frame .div-4 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 100%;
  }
  
  .frame .frame-wrapper-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-5 {
    align-items: center;
    align-self: stretch;
    background-color: #f3f3f3;
    border: 2px solid;
    border-color: #007aff;
    border-radius: 14px;
    display: flex;
    gap: 10px;
    height: 54px;
    padding: 0px 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .text-wrapper {
    color: #797979;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .frame .rectangle {
    background-color: #007aff;
    height: 24px;
    left: 16px;
    position: absolute;
    top: 15px;
    width: 2px;
  }
  
  .frame .frame-wrapper-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .last-name-wrapper {
    align-items: center;
    align-self: stretch;
    background-color: #f3f3f3;
    border-radius: 14px;
    display: flex;
    gap: 10px;
    height: 54px;
    padding: 0px 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-wrapper-2 {
    align-items: center;
    align-self: stretch;
    background-color: #007aff;
    border-radius: 14px;
    display: flex;
    gap: 10px;
    height: 54px;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  
  .frame .text-wrapper-2 {
    color: #ffffff;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .frame .div-6 {
    align-self: stretch;
    flex: 0 0 auto;
    position: relative;
    width: 100%;
  }
  
  .continue {
    height: 50px;
    border-radius: 14px;
    color: #007aff;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: 100%;
  }
  </style>
  