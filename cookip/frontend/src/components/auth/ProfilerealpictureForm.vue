<template>
  <div class="frame">
    <div class="div-wrapper">
      <div class="icon">
        <v-img
          @click="goback()"
          class="color"
          alt="Color"
          src="../../assets/login_icon/Start Button.png"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        />
      </div>
    </div>
    <div class="div-wrapper">
      <div class="frame-wrapper">
        <div class="div">
          <div class="div-2">
            <div class="div-3">
              <v-icon>mdi-face-man</v-icon>
              <div class="basic-details">Your real face</div>
            </div>
            <div class="to-sign-up-you-need">
              Upload a photo for facial recognition
            </div>
          </div>
          <v-form @submit.prevent class="div-4">
            <v-file-input
                class="input"
                type="file"
                counter
                show-size
                label="이미지 제출"
                outlined
                dense
                multiple
                prepend-icon="mdi-camera"
                style="width: 100%;"
                @change="onImageChange"
                clearable
                />
                <v-img v-for="(item,i) in uploadimageurl" :key="i" :src="item.url"
                       contain height="150px" style="border: 2px solid black; width: 100%;"/>
            <div style="width: 100%">
              <v-btn
                @click="goLogin"
                class="continue"
                color="#007aff"
                dark
                elevation="2"
              >Continue</v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

import axios from 'axios'
const uploadimageurl = ref([]);

const props = defineProps({
    showNext: Function,
    showBack: Function,
  });


const goLogin = () => {
  props.showNext()
};

const handleMouseOver = () => {
  document.querySelector(".color").style.transform = "scale(2)";
};

const handleMouseLeave = () => {
  document.querySelector(".color").style.transform = "scale(1)";
};

const goback = () => {
  props.showBack()
};

const onImageChange = (event) => {
  const fileInput = event.target;
  const files = fileInput.files;

  if (!files.length) {
    return;
  }

  const formData = new FormData();
  uploadimageurl.value = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    formData.append('filelist', file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      console.log('Base64로 변환된 이미지 URL:', imageUrl);
      uploadimageurl.value.push({ url: imageUrl });
    };
    
    reader.readAsDataURL(file);
  }
  axios({
        url: "http://127.0.0.1:5000/content/imagesave/",	// 이미지 저장을 위해 back서버와 통신
        method: "POST",
        headers: {'Content-Type': 'multipart/form-data'},	// 이걸 써줘야 formdata 형식 전송가능
        data: formData,
      }).then(res => {
        console.log(res.data.message);
        console.log(formData)
      }).catch(err => {
        console.log(err)
        console.log("!!!!!!!!!!!")
      });
};

</script>

<style>  .frame {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.frame .div-wrapper {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 360px;
}

.frame .start-button {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 12px;
  position: relative;
}

.frame .icon {
  height: 50px;
  position: relative;
  width: 50px;
}

.frame .color {
  height: 100%;
  left: 4px;
  top: 4px;
  width: 50px;
}

.color {
  transition: transform 0.3s ease-in-out; /* 부드러운 전환을 위한 CSS 속성 */
}

.frame .frame-wrapper {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  padding: 0px 16px;
  position: relative;
  width: 100%;
}

.frame .div {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.frame .div-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame .div-3 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.frame .img {
  height: 40px;
  position: relative;
  width: 40px;
}

.frame .basic-details {
  color: #1a1c29;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame .to-sign-up-you-need {
  align-self: stretch;
  color: #797979;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
}

.frame .div-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame .frame-wrapper-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame .div-5 {
  align-items: center;
  align-self: stretch;
  background-color: #f3f3f3;
  border: 2px solid;
  border-color: #007aff;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  height: 54px;
  padding: 0px 16px;
  position: relative;
  width: 100%;
}

.frame .text-wrapper {
  color: #797979;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame .rectangle {
  background-color: #007aff;
  height: 24px;
  left: 16px;
  position: absolute;
  top: 15px;
  width: 2px;
}

.frame .frame-wrapper-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
}

.frame .last-name-wrapper {
  align-items: center;
  align-self: stretch;
  background-color: #f3f3f3;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  height: 54px;
  padding: 0px 16px;
  position: relative;
  width: 100%;
}

.frame .div-wrapper-2 {
  align-items: center;
  align-self: stretch;
  background-color: #007aff;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  height: 54px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame .text-wrapper-2 {
  color: #ffffff;
  font-family: "Roboto-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame .div-6 {
  align-self: stretch;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.continue {
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
