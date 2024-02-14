<template>
    <div class="login-or-sign-up" style="height: 750px">
      <div class="overlap-group" style="height: 750px;">
            <v-img
            class="items"
            :src="require('../../assets/login_image/cookip_back.png')"
            alt="왜 안나와"
          />
        <v-img
        class="img"
        alt="Rectangle"
        src="../../assets/login_image/cookip_logo.png"
      />
        <div class="standard" style="height: 250px;">
          <div class="frame" style="height: 250px">
            <div class="frame-2">
              <div class="frame-3">
                <div class="what-s-your-phone">Logout or Go profile</div>
                <p class="enter-phone-number">
                  Please select your preferred method
                  <br />
                  to continue setting up your account
                </p>
              </div>
              <div class="frame-wrapper">
                <div class="div-wrapper">
                  <div class="frame-4">
                    <div class="continue-wrapper">
                      <v-btn @click="goLogout" class="continue" color="#007aff" dark elevation="2">Logout</v-btn>
                    </div>
                    <div class="continue-with-apple-wrapper">
                      <v-btn @click="goprofile" class="continue-with-apple" color="white" dark elevation="2">Go profile</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="if-you-are-creating-wrapper">
              <p class="if-you-are-creating">
                <span class="text-wrapper">
                  If you are creating a new account, <br />
                </span>
                <span class="span">Terms &amp; Conditions</span>
                <span class="text-wrapper"> and </span>
                <span class="span">Privacy Policy</span>
                <span class="text-wrapper"> will apply.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth';
const router = useRouter()


const goLogout = function() {
    localStorage.setItem("Islogin", 0)
    localStorage.setItem("user_id", 0)
    localStorage.setItem("profile", 0)
    window.location.reload();
    useAuthStore.token = null
}

const goprofile = function() {
    router.push({ name:'my-profile'})
}
  </script>
  
  <style>
  .login-or-sign-up {
    background-color: #ffffff;
    height: 800px;
    width: 360px;
  }
  
  .login-or-sign-up .overlap-group {
    height: 800px;
    position: relative;
  }
  
  .login-or-sign-up .rectangle {
    background-color: #f3f3f3;
    height: 453px;
    left: 0;
    position: absolute;
    top: 0;
    width: 360px;
  }
  
  .login-or-sign-up .status-bar {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 360px;
  }
  
  .login-or-sign-up .content {
    align-self: stretch;
    height: 100%;
    position: relative;
    width: 100%;
  }
  
  .get-started .items {
  height: auto;

  position: absolute;
  top: 4px;
  width: 100%;
}
  
  .login-or-sign-up .image {
    height: 457px;
    left: 0;
    position: absolute;
    top: 11px;
    width: 352px;
  }
  
  .login-or-sign-up .img {
    height: 141px;
    left: 108px;
    object-fit: cover;
    position: absolute;
    top: 156px;
    width: 162px;
  }
  
  .login-or-sign-up .standard {
    background-color: white;
    background-size: 100% 100%;
    box-shadow: var(--elevation-material3-level-1-1dp);
    height: 480px;
    left: 0;
    position: absolute;
    top: 320px;
    width: 360px;
  }
  
  .login-or-sign-up .handle {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 48px;
    justify-content: center;
    left: 0;
    padding: 8px 0px 20px;
    position: absolute;
    top: 0;
    width: 360px;
  }
  
  .login-or-sign-up .div {
    background-color: #79747e;
    border-radius: 8px;
    height: 4px;
    position: relative;
    width: 32px;
  }
  
  .login-or-sign-up .frame {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 380px;
    justify-content: space-between;
    left: 0;
    padding: 0px 16px;
    position: absolute;
    top: 82px;
    width: 360px;
  }
  
  .login-or-sign-up .frame-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 32px;
    position: relative;
    width: 100%;
  }
  
  .login-or-sign-up .frame-3 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  
  .login-or-sign-up .what-s-your-phone {
    color: #1a1c29;
    font-family: "Roboto-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .login-or-sign-up .enter-phone-number {
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
  
  .login-or-sign-up .frame-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 100%;
  }
  
  .login-or-sign-up .div-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }
  
  .login-or-sign-up .frame-4 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width: 100%;
  }
  
  .login-or-sign-up .continue-wrapper {
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
  
  .continue-wrapper .continue {
    height: 50px;
    border-radius: 14px;
    color:  #007aff;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: 100%;
  }
  
  .login-or-sign-up .continue-with-apple-wrapper {
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
  
  .continue-with-apple-wrapper .continue-with-apple {
    height: 50px;
    border-radius: 14px;
    color:  white;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: 100%;
  }

  .login-or-sign-up .if-you-are-creating-wrapper {
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 10px;
    height: 58px;
    justify-content: center;
    padding: 10px;
    position: relative;
    width: 100%;
  }
  
  .login-or-sign-up .if-you-are-creating {
    color: #797979;
    flex: 1;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: -2px;
    position: relative;
    text-align: center;
  }
  
  .login-or-sign-up .text-wrapper {
    color: #797979;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
  }
  
  .login-or-sign-up .span {
    text-decoration: underline;
  }

  </style>