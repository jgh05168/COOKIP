<template>
    <div class="survey-container">
      <h1 class="survey-title">보유한 알러지를 모두 선택 및 입력해주세요.</h1>
      

      <div v-for="(item, index) in items" :key="index" class="survey-item">
        <button
          :class="{ 'active': selectedItems[index] }"
          @click="toggleCheckbox(index)"
        >
          {{ item }}
        </button>
      </div>

      <!-- 검색창 -->
      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="재료를 검색하세요..." class="search-input">
        <button @click="addSelectedIngredient" class="add-button" v-show="searchQuery">Add</button>
      </div>

      <!-- RouterLink를 버튼으로 스타일링 -->
      <router-link :to="{ name: 'servey_ingredient' }">
        <button @click="submitSurvey" class="submit-button">Coutinue</button>
      </router-link>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'; // Axios 라이브러리 가져오기
  import { ref } from 'vue';
  import { useRecipeStore } from "@/store/recipe";

  const recipeStore = useRecipeStore();
  const searchQuery = ref('');
  const selectedChoices = ref([]);

  //console.log("설문조사창22",recipeStore.ingredient_servey);
  
  const items = ['땅콩', '호두', '복숭아', '새우', '연어', '우유'];
  const selectedItems = ref(Array(items.length).fill(false));
  
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
//console.log("4444444444444444",selectedItems);

const submitSurvey = () => {
    // 선택된 설문 항목 (재료 이름)
    const selectedIngredients = items.filter((item, index) => selectedItems.value[index]);

    // 선택된 설문 항목 내용을 SQL 재료 테이블의 재료 이름과 매치시켜서 id를 반환하는 함수
    const selectedCategoryIds = selectedIngredients.map(choice => {
        const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
        return ingredient ? ingredient.ingredient_id : null;
    });

    // 이미 선택된 항목인지 확인
    const existingAllergies = recipeStore.Allergy.filter(allergy => {
        return selectedCategoryIds.includes(allergy.ingredient_id);
    });

    // 이미 선택된 항목 제거
    const newCategoryIds = selectedCategoryIds.filter(id => {
        return !existingAllergies.some(allergy => allergy.ingredient_id === id);
    });

    // Axios를 사용하여 POST 요청 보내기
    axios.post('http://localhost:5000/user/allergy', {
        ingredients: newCategoryIds.map(ingredient_id => ({
            ingredient_id,
            allergy_name: selectedIngredients.find((choice) => {
                const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
                return ingredient && ingredient.ingredient_id === ingredient_id;
            }) || null // 선택된 재료 이름
        }))
    })
    .then(response => {
        console.log('서버 응답:', response.data);
        // alert("선호도 조사 완료");
        // POST 요청 성공 시 수행할 작업 추가
    })
    .catch(error => {
        console.error('POST 요청 오류:', error);
        // POST 요청 실패 시 수행할 작업 추가
    });
};










  </script>
  
  <style scoped>
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
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  background-color: #D7CCC8;
  border: 0;
}
  
  .survey-title {
    color: #040404;
    font-size: 0.7rem; 
    margin-bottom: 0.5px; 
    /* padding-bottom: 100px; */
  }
  
  .survey-item {
    margin-bottom: 15px;
  }
  
  button {
    width: 250px; 
    padding: 20px; 
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
  