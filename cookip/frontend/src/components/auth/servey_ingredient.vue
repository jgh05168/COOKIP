<template>
  <div class="survey-container">
    <h1 class="survey-title">선호하는 재료를 여러개 선택해주세요.</h1>
    

    <!-- 6개씩 5줄로 알러지 정보 표시 -->
    <div v-for="(row, rowIndex) in allergRows" :key="rowIndex" class="survey-row">
      <div v-for="(item, colIndex) in row" :key="colIndex" class="survey-item">
        <button
          :class="{ 'active': selectedItems[rowIndex * 6 + colIndex] }"
          @click="toggleCheckbox(rowIndex * 6 + colIndex)"
        >
          {{ item }}
        </button>
      </div>
    </div>
    
    <!-- 검색창 추가 -->
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="재료를 검색하세요..." class="search-input">
      <button @click="addSelectedIngredient" class="add-button" v-show="searchQuery">Add</button>
    </div>

    <!-- RouterLink를 버튼으로 스타일링 -->
    <router-link :to="{ name: 'mobile-home' }">
      <button @click="submitSurvey" class="submit-button">Continue</button>
    </router-link>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRecipeStore } from "@/store/recipe";

const recipeStore = useRecipeStore();
//console.log("asdasdsaddasd",recipeStore.filteredFavorites(5));


const allergens = [
  "애호박", "대파", "청양고추", "고추기름", "고춧가루", "국간장", "순두부", "표고버섯", "양파", "다시마 물",
  "소금", "맛술", "다진 마늘", "후춧가루", "들기름", "우유", "마늘", "생강", "월계수잎", "통후추",
  "통삼겹살", "차돌박이", "두부", "무", "다시마 멸치 육수", "다진마늘", "된장", "스파게티 면", "치킨스톡",
  "베이컨", "파슬리", "달걀", "꽃소금", "그라나파다노 치즈", "올리브유", "한우 불고기 용", "알배추", "깻잎",
  "청경채", "팽이버섯", "물", "멸치", "다시마", "간장", "식초", "올리고당", "설탕", "다진양파", "고추"
];

const allergRows = ref(Array.from({ length: 5 }, (_, i) => allergens.slice(i * 6, (i + 1) * 6)));
const selectedItems = ref(Array(allergens.length).fill(false));
const searchQuery = ref('');
const selectedChoices = ref([]);

const toggleCheckbox = (index) => {
  selectedItems.value[index] = !selectedItems.value[index];
};

const addSelectedIngredient = () => {
  if (searchQuery.value.trim() !== '') {
    // 검색한 값이 ingredient_servey에 있는지 확인
    const ingredientExists = recipeStore.ingredient_servey.some(item => item.ingredient_name === searchQuery.value.trim());
    if (ingredientExists) {
      selectedChoices.value.push(searchQuery.value.trim());
    } else {
      console.log('검색한 재료가 존재하지 않습니다.');
      // 혹은 사용자에게 알림을 표시할 수 있습니다.
    }
    searchQuery.value = '';
  }
};

const submitSurvey = () => {
  // 검색창으로 추가한 재료와 버튼으로 추가한 재료를 모두 선택된 재료 목록에 포함시킴
  const allSelectedIngredients = [...selectedChoices.value, ...allergens.filter((item, index) => selectedItems.value[index])];
  

  const selectedIngredientIds = allSelectedIngredients.map(choice => {
    const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
    return ingredient ? ingredient.ingredient_id : null;
  });

  // 이미 선택된 항목인지 확인
  const existingFavoriteIngredients = recipeStore.Favorite_ingredient.filter(favoriteIngredient => {
    return selectedIngredientIds.includes(favoriteIngredient.ingredient_id);
  });

  // 이미 선택된 항목 제거
  const newSelectedIngredientIds = selectedIngredientIds.filter(ingredientId => {
    return !existingFavoriteIngredients.some(favoriteIngredient => favoriteIngredient.ingredient_id === ingredientId);
  });

  axios.post('http://localhost:5000/user/ingredientFollow', {
      ingredient_id: newSelectedIngredientIds
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

<style scoped>
/* 기존 스타일 유지 */
body {
  margin: 0;
  padding: 0; /* 기본 padding도 제거합니다. */
  font-family: Arial, sans-serif;
}

.survey-container {
  width: 25%; 
  height: 100vh; /* 화면의 높이를 100%로 설정합니다. */
  display: flex;
  flex-direction: column; /* 내부 컨텐츠를 세로로 정렬합니다. */
  align-items: center; /* 가운데 정렬합니다. */
  justify-content: center; /* 가운데 정렬합니다. */
  text-align: center;
  padding: 2rm;
  border-radius: 10px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  background-color: #D7CCC8;
  border: 0;
}
  
  .survey-title {
    color: #040404;
    font-size: 0.7rem; 
    margin-bottom: 0.5px; 
  }
  
  /* 알러지 정보를 나타내는 행 */
  .survey-row {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  
  /* 각 알러지 정보 아이템 */
  .survey-item {
    margin-right: 10px;
  }
  
  button {
    width: 250px; 
    padding: 15px; 
    font-size: 1.5rem;
    background-color: #EFEBE9;
    color: #1f1d1d;
    border: 2px solid #1f1d1d;
    border-radius: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  button.active {
    background-color: #795548;
    color: #fff;
    border-color: #795548;
  }
  
  .submit-button {
    width: 400px;
    padding: 20px;
    font-size: 50px;
    background-color: #3E2723;
    color: #fff;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    align-items: center; /* 세로 가운데 정렬 */
    justify-content: center; /* 가로 가운데 정렬 */
}
  
  .submit-button:hover {
    background-color: #3E2723;
  }
.search-container {
  margin-bottom: 20px;
  background-color: #8D6E63;
  border-radius: 14px;
  border: 1px solid #ccc;
}

.search-input {
  width: 300px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 14px;
}
.add-button{
  background-color: #4E342E;
  border-radius: 14px;
  color: white;
}

</style>
