<template>
  <div class="get-started">
    <div class="overlap-group">
      <div class="status-bar">
        <div class="content">
          <v-img
            class="items"
            :src="require('../../assets/login_image/cookip_back.png')"
            alt="왜 안나와"
          />
        </div>
      </div>
      <div class="frame">
        <div class="frame-wrapper">
          <div class="div" style="align-items: center">
            <div class="basic-details">Welcome to COOKIP</div>
            <p class="to-sign-up-you-need">
              Here’s a good place for a brief overview
              <br />
              of the app or it’s key features.
            </p>
          </div>
        </div>
        <div class="div-wrapper" style="align-items: center">
          <div class="frame-2">
            <div class="ellipse" />
            <div class="ellipse-2" />
            <div class="ellipse-2" />
          </div>
        </div>
      </div>
      <v-img
        class="rectangle"
        alt="Rectangle"
        src="../../assets/login_image/cookip_logo.png"
      />
    </div>
    <div class="frame-3">
      <div class="frame-4">
        <div class="frame-5">
          <div class="continue-wrapper">
            <v-btn
              @click.prevent="gomobilehome"
              class="continue"
              color="#007aff"
              dark
              elevation="2"
              >Get started</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const gomobilehome = function () {
  router.push({ name: "mobile-home" });
};
</script>

<style>
.get-started {
  background-color: #ffffff;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.get-started .overlap-group {
  height: 706px;
  left: -1px;
  position: absolute;
  top: 0;
  width: 361px;
}

.get-started .image {
  height: 1000px;
  position: absolute;
  top: 0;
  width: 359px;
}

.get-started .items {
  height: auto;
  position: absolute;
  top: 4px;
  width: 350px;
}

.get-started .frame {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 253px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 453px;
  width: 360px;
}

.get-started .frame-wrapper {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.get-started .div {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  position: relative;
  width: 358px;
}

.get-started .basic-details {
  color: #1a1c29;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.get-started .to-sign-up-you-need {
  align-self: stretch;
  color: #797979;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
  text-align: center;
}

.get-started .div-wrapper {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: 8px;
  position: relative;
  width: 100%;
}

.get-started .frame-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.get-started .ellipse {
  background-color: #007aff;
  border-radius: 4px;
  height: 8px;
  position: relative;
  width: 8px;
}

.get-started .ellipse-2 {
  background-color: #d9d9d9;
  border-radius: 4px;
  height: 8px;
  position: relative;
  width: 8px;
}

.get-started .rectangle {
  height: 141px;
  left: 109px;
  object-fit: cover;
  position: absolute;
  top: 143px;
  width: 162px;
}

.get-started .frame-3 {
  height: 100px;
  left: 0;
  position: absolute;
  top: 706px;
  width: 360px;
}

.get-started .frame-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  padding: 0px 16px;
  position: absolute;
  top: 0;
  width: 360px;
}

.get-started .frame-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
}

.get-started .navigation-bar {
  height: 24px;
  left: 0;
  position: absolute;
  top: 70px;
  width: 360px;
}

.get-started .img {
  height: 4px;
  left: 126px;
  position: absolute;
  top: 10px;
  width: 108px;
}

.get-started .continue-wrapper {
  align-items: center;
  align-self: stretch;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  height: 54px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.get-started .continue {
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
