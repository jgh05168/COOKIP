<template>
    <div class="survey-container">
      <h1 class="survey-title">선호 재료 조사</h1>
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
  
      <!-- RouterLink를 버튼으로 스타일링 -->
      <button @click="submitSurvey" class="submit-button">Continue</button>
      <!-- <router-link :to="{ name: 'create-member' }">
        <button class="submit-button">Coutinue</button>
      </router-link> -->
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'; // Axios 라이브러리 가져오기
  import { ref } from 'vue';
  import { useRecipeStore } from "@/store/recipe";

  const recipeStore = useRecipeStore();
  
  console.log("설문조사창",recipeStore.ingredient_servey);


  // 재료 정보 배열
  const allergens = [
    "애호박", "대파", "청양고추", "고추기름", "고춧가루", "국간장", "순두부", "표고버섯", "양파", "다시마 물",
    "소금", "맛술", "다진 마늘", "후춧가루", "들기름", "우유", "마늘", "생강", "월계수잎", "통후추",
    "통삼겹살", "차돌박이", "두부", "무", "다시마 멸치 육수", "다진마늘", "된장", "스파게티 면", "치킨스톡",
    "베이컨", "파슬리", "달걀", "꽃소금", "그라나파다노 치즈", "올리브유", "한우 불고기 용", "알배추", "깻잎",
    "청경채", "팽이버섯", "물", "멸치", "다시마", "간장", "식초", "올리고당", "설탕", "다진양파", "고추"
  ];
  // 알러지 정보 배열을 6개씩 5줄로 나누어 저장
  const allergRows = ref(Array.from({ length: 5 }, (_, i) => allergens.slice(i * 6, (i + 1) * 6)));
  // 선택된 알러지 정보 배열
  const selectedItems = ref(Array(allergens.length).fill(false));
  
  // 체크박스 토글 함수
  const toggleCheckbox = (index) => {
    selectedItems.value[index] = !selectedItems.value[index];
  };


  // selectedChoices
  // const sugarIngredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === '설탕');
  // if (sugarIngredient) {
  //   const sugarIngredientId = sugarIngredient.ingredient_id;
  //   console.log("설탕의 ingredient_id:", sugarIngredientId);
  // } else {
  //   console.log("설탕이 user_ingredients 배열에 존재하지 않습니다.");
  // }




  const submitSurvey = () => {
    //설문 선택된 항목(재료이름)
    const selectedChoices = allergens.filter((item, index) => selectedItems.value[index]);

    //선택된 설문 항목내용을 sql재료 테이블의 재료 이름과 매치시켜서 id를 반환하는 함수
    const selectedIngredientIds = selectedChoices.map(choice => {
    const ingredient = recipeStore.ingredient_servey.find(item => item.ingredient_name === choice);
    return ingredient ? ingredient.ingredient_id : null;
    });
    // Axios를 사용하여 POST 요청 보내기
    axios.post('http://localhost:5000/user/ingredientFollow', {
        ingredient_id: selectedIngredientIds
    })
    .then(response => {
        console.log('서버 응답:', response.data);
        alert("선호도 조사 완료");
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
    width: 250px; /* 버튼 너비를 늘림 */
    padding: 15px; /* 버튼 내부 여백 조정 */
    font-size: 23px;
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
  </style>
  