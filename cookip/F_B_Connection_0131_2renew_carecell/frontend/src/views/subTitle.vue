<!-- <template>
    <div>
        <h1>레시피 상세정보를 보는 페이지 입니다.</h1>
        <h2>여기서 레시피를 시작할 수 있습니다.</h2>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style> -->

<template>
    <div class="container">
      <!-- <h1>RecipeData:</h1> -->
      <!-- Input data here -->
      <hr>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="summat">
        <!-- 여기 subTilte 이랑 아래2개 같아야됨-->
        <div>재료</div>
        <div class="users" v-for="(step, index) in step" :key="index">
          <p class="text" >{{ step.ingredient}}</p>
        </div>
        <br>
        <h1>조리 방법</h1>
        <div class="users" v-for="(step, index) in step" :key="index">
          <p class="text" >step {{ step.step}}</p>
          <p class="text" >{{ step.step_tip}}</p>
          <br>
          <!-- <br>
          <p class="text" >{{ subTilte.step[1]}}</p>
          <p class="text" >{{ subTilte.step_tip[1]}}</p>
          <br>
          <p class="text" >{{ subTilte.step[2]}}</p>
          <p class="text" >{{ subTilte.step_tip[2]}}</p>
          <br>
          <p class="text" >{{ subTilte.step[3]}}</p>
          <p class="text" >{{ subTilte.step_tip[3]}}</p> -->
        </div>
      </div>
    </div>
</template>
  
<script>
  import accountService from '../AllGet';
  
  export default {
    name: 'subTitle',
    data() {
      return {
        step: [], //여기
        error: "",
        text: "",
      }
    },
    async created() {
      try {
        const RecipeData = await accountService.getUsersubTitle();
        this.step = RecipeData;//여기
        //console.log("asdasds");
        console.log(RecipeData);
      } catch (err) {
        this.error = err.message;
      }
    },
  }
</script>
  
<style scoped>
    /* Add your component-specific styles here */
</style>
  