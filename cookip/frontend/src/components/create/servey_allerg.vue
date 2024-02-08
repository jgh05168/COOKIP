<template>
    <div class="survey-container">
      <h1 class="survey-title">알러지 정보 조사</h1>
      <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="재료를 검색하세요..." class="search-input">
      <button @click="addSelectedIngredient" class="add-button" v-show="searchQuery">Add</button>
      </div>

      <div v-for="(item, index) in items" :key="index" class="survey-item">
        <button
          :class="{ 'active': selectedItems[index] }"
          @click="toggleCheckbox(index)"
        >
          {{ item }}
        </button>
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
    // 설문 선택된 항목(재료이름)
    //const selectedChoices = items.filter((item, index) => selectedItems.value[index]);
    const allSelectedIngredients = [...selectedChoices.value, ...items.filter((item, index) => selectedItems.value[index])];

    // 선택된 설문 항목내용을 sql재료 테이블의 재료 이름과 매치시켜서 id를 반환하는 함수
    const selectedCategoryIds = allSelectedIngredients.map(choice => {
    const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
    if (ingredient) {
      return ingredient.ingredient_id;
    } else {
      // 재료를 찾지 못한 경우에 대한 처리
      // 여기서는 빈 배열을 반환하지 않고, 아무 것도 반환하지 않도록 처리합니다.
    }
    });

    console.log("sssssssssssssssss",selectedChoices,selectedCategoryIds.length);
    // Axios를 사용하여 POST 요청 보내기
    axios.post('http://localhost:5000/user/allergy', {
        // user_id:user_id,
        // profile_id:profile_id,
        ingredients: selectedCategoryIds.map((ingredient_id, index) => ({
            ingredient_id,
            allergy_name: selectedChoices[index] // 선택된 재료 이름
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

// const submitSurvey = () => {
//     // 설문 선택된 항목(재료이름)
//     const selectedChoices = items.filter((item, index) => selectedItems.value[index]);

//     // 선택된 설문 항목내용을 sql재료 테이블의 재료 이름과 매치시켜서 id를 반환하는 함수
//     const selectedCategoryIds = selectedChoices.map(choice => {
//         const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
//         return ingredient ? ingredient.ingredient_id : null;
//     });

//     // Axios를 사용하여 POST 요청 보내기
//     axios.post('http://localhost:5000/user/allergy', {
//         ingredients: selectedCategoryIds.map(ingredient_id => ({
//             ingredient_id,
//             allergy_name: selectedChoices.find(choice => {
//                 const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
//                 return ingredient && ingredient.ingredient_id === ingredient_id;
//             })
//         }))
//     })
//     .then(response => {
//         console.log('서버 응답:', response.data);
//         // alert("선호도 조사 완료");
//         // POST 요청 성공 시 수행할 작업 추가
//     })
//     .catch(error => {
//         console.error('POST 요청 오류:', error);
//         // POST 요청 실패 시 수행할 작업 추가
//     });
// };



// const submitSurvey = async () => {
//     try {
//         const selectedChoices = items.filter((item, index) => selectedItems.value[index]);

//         const selectedIngredientIds = selectedChoices.map(choice => {
//             const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
//             return ingredient ? ingredient.ingredient_id : null;
//         });

//         const response = await axios.post('http://localhost:5000/user/categoryFollow', {
//           ingredients: selectedIngredientIds.map((ingredient_id, index) => ({
//             ingredient_id,
//             allergy_name: selectedChoices[index] // 선택된 재료 이름
//         }))
//         });

//         console.log('서버 응답:', response.data);
//         // 성공적으로 요청이 완료된 후 수행할 작업 추가
//     } catch (error) {
//         console.error('POST 요청 오류:', error);
//         // 요청이 실패한 경우 수행할 작업 추가
//     }
// };


// const submitSurvey = async (selectedChoices) => {
//     try {
//         const selectedIngredientIds = selectedChoices.map(choice => {
//             const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
//             return ingredient ? ingredient.ingredient_id : null;
//         });

//         const response = await axios.post('http://localhost:5000/user/categoryFollow', {
//           ingredients: selectedIngredientIds.map((ingredient_id, index) => ({
//             ingredient_id,
//             allergy_name: selectedChoices[index] // 선택된 재료 이름
//         }))
//         });

//         console.log('서버 응답:', response.data);
//         // 성공적으로 요청이 완료된 후 수행할 작업 추가
//     } catch (error) {
//         console.error('POST 요청 오류:', error);
//         // 요청이 실패한 경우 수행할 작업 추가
//     }
// };












  </script>
  
  <style scoped>
body {
  margin: 0;
  padding: 0; /* 기본 padding도 제거합니다. */
}

.survey-container {
  width: 100%; /* 전체 화면을 사용합니다. */
  height: 100vh; /* 화면의 높이를 100%로 설정합니다. */
  display: flex;
  flex-direction: column; /* 내부 컨텐츠를 세로로 정렬합니다. */
  align-items: center; /* 가운데 정렬합니다. */
  justify-content: center; /* 가운데 정렬합니다. */
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
  
  .survey-title {
    color: #333;
    font-size: 60px; /* 28px의 3배 */
    margin-bottom: 40px; /* 20px의 3배 */
  }
  
  .survey-item {
    margin-bottom: 15px;
  }
  
  button {
    width: 400px; /* 200px의 3배 */
    padding: 20px; /* 10px의 3배 */
    font-size: 40px; /* 20px의 3배 */
    background-color: #fff;
    color: #555;
    border: 2px solid #555;
    border-radius: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  button.active {
    background-color: #335fe2;
    color: #fff;
    border-color: #335fe2;
  }
  
  .submit-button {
    width: 500px; /* 250px의 3배 */
    padding: 20px; /* 10px의 3배 */
    font-size: 50px; /* 25px의 3배 */
    background-color: #335fe2;
    color: #fff;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    align-items: center; /* 세로 가운데 정렬 */
    justify-content: center; /* 가로 가운데 정렬 */
}
  
  .submit-button:hover {
    background-color: #1b1bdd;
  }

  .search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 14px;
}
.add-button{
  width: calc(300px * 2 / 3); /* 현재 크기의 3/2로 조정 */
  padding: calc(10px * 2 / 3);
  background-color: #1b1bdd;
  border-radius: 14px;
  color: white;
}
  </style>
  