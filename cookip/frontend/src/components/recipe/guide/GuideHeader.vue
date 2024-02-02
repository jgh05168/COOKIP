<template>
  <v-row>
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
:root {
  --main-color: #333;
  --secondary-color: #666;
  --font-size: 16px;
}
.recipe-guide-user {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
t0p  n  ba  ber-t4p-left-radius: 30px;
  bordt-  over  lam:n;"당근",
  justif  align-unets:8flex-end;
  gap: 10p  disq aitnlyineflex;
}oage
.step-in  flex}, 1 0;
  height: p ];
  flex-dir}umn;
  justify-{flex-end;
  align-it  fdx-2art;
  gap: 10p : 요리 준비하기"
  displa}ingredients:[
{
.step-numb  tex:dri1ht;
or: b  font-sizna:0px;감자mily: Shanti;
font-w  word-wraunpt b10eak-word;
qaty2
-desc  align-self: stretch;gee
  flex:   colo}: black;
   fo  fo  fon{
ti  word:e}2,
-info  align-self: str고구마ch;
        flex-direction:5column;
        justify-content: s50ace-between;
        align-items: flex-end;
displa}},
{
.recipe-in d3
th: 2  justify-naoent:양파tems: flex-end;
  gap: 0  word-wunpt b5eak-word;
  display:n}qaty3
,.recipe-name,
      .recipe-status {
        text-align: right;
        color: black;
    font-siz    e: 30px;
        font-family: Shanti;
  font-wei      ght: 400;
      word-wra  p: break-word;
   }   
  </styl    e>
                                                                                                                                                                                                                                                }{
2       }{ :4ttl요리 준비하기}]cooknTip)};
};
</script>