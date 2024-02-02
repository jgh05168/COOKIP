<template>
  <v-row class="recipe-container">
    <v-img class="recipe-guide-user" src="@/assets/image/임채진.png" />
    <div class="header-content">
      <div class="step-info">
        <div class="step-number">{{ stepNumber }}</div>
        <div class="step-description">{{ stepDescriptionDetail }}</div>
      </div>
      <div class="time-info">
        <div class="time">{{ time }}</div>
        <div class="recipe-info">
          <div class="recipe-name">{{ recipeName }}</div>
          <div class="recipe-status">{{ recipeStatus }}</div>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script setup>
// const userImage = "@/src/assets/image/임채진.png";
const stepNumber = "step 4. (1/1)";
const stepDescriptionDetail = "순두부를 넣고 끓여주세요.";
const time = "09:53";
const recipeName = "순두부찌개";
const recipeStatus = "만드는 중...";
</script>

<style scoped>
.recipe-container {
}
.recipe-guide-user {
  width: 140px;
  height: 140px;
}

.header-content {
  width: 1250px;
  height: 140px;
  padding: 20px;
  background: white;
  border-radius: 30px 0 0 30px;
  overflow: hidden;
  gap: 10px;
}

.step-info {
  height: 112px;
  gap: 10px;
}

.step-number,
.step-description {
  text-align: left;
  color: #000000;
  font-size: 30px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.step-description {
  align-self: stretch;
  flex: 1 1 0;
  font-size: 35px;
}

.time-info {
  /* align-self: stretch; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* align-items: right; */
  /* display: inline-flex; */
}

.time,
.recipe-name,
.recipe-status {
  text-align: right;
  color: black;
  font-size: 40px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.recipe-info {
  width: 500px;
  /* justify-content: flex-start; */
  align-items: right;
  gap: 10px;
  word-wrap: break-word;
  /* display: inline-flex; */
}
</style>
