<template>
  <div class="recipe-guide-container">
    <div class="recipe-guide-header">
      <v-img class="recipe-guide-user" src="@/assets/image/임채진.png" />
      <div class="header-content">
        <div class="step-info">
          <div class="step-number">step 4. (1/1)</div>
          <div class="step-description">순두부를 넣고 끓여주세요.</div>
        </div>
        <div class="time-info">
          <div class="time">09:53</div>
          <div class="recipe-info">
            <div class="recipe-name">순두부찌개</div>
            <div class="recipe-status">만드는 중...</div>
         
           </div>
        </div>
      </div>
    </div>

    <div class="recipe-guide-body">
      <v-row>
        <GuideStepperVue />

      </v-row>
    </div>
  </div>
</template>

<script setup>
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";

</script>

<style scoped>
.recipe-guide-container {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  background: #534645;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
}

.recipe-guide-header {
  height: 165px;
  width:99.5%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #fdf8ec;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
}

.recipe-guide-user {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.recipe-img {
  width: 500px;
  height: 500px;
}

.header-content {
  width: 1718px;
  align-self: stretch;
  padding: 20px;
  background: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
  display: inline-flex;
}

.step-info {
  flex: 1 1 0;
  height: 112px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.step-number {
  text-align: right;
  color: black;
  font-size: 30px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.step-description {
  align-self: stretch;
  flex: 1 1 0;
  color: black;
  font-size: 35px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.time-info {
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
}

.time {
  text-align: right;
  color: black;
  font-size: 40px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.recipe-info {
  width: 292px;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0px;
  word-wrap: break-word;
  display: inline-flex;
}

.recipe-name,
.recipe-status {
  text-align: right;
  color: black;
  font-size: 30px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.recipe-guide-body {
  height: 825px;
  width:99.5%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #fdf8ec;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
}
.recipe-gallery-img {
  width: 120px;
  height: 120px;
}
</style>
