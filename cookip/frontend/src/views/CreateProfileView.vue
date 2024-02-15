<template>
  <div class="main">
    <p class="title">Create a New Profile</p>
    <p class="sub-title">Scan the QR code below</p>
    <img :src="qrCodeUrl" alt="QR Code" />
    <div style="margin-top: 2%">
      <p class="subsub-title">or</p>
      <p class="subsub-title">Go to the Website</p>
      <h2 class="sub-title">edu.ssafy.com</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import QRCode from "qrcode";
import { useMotionStore } from "@/store/motion";
import router from "@/router";

const motionStore = useMotionStore();
const dataToEncode = "http://i10c101.p.ssafy.io:8000/"; // QR 코드로 인코딩할 데이터

// QR 코드를 생성하고 이미지 URL을 제공하는 함수
const generateQRCode = async () => {
  try {
    const options = {
      width: 350, // 원하는 너비로 조절
      height: 350, // 원하는 높이로 조절
      margin: 1, // 원하는 마진 값으로 조절
    };
    // QR 코드 생성
    const qrCodeDataURL = await QRCode.toDataURL(dataToEncode, options);

    // 생성된 QR 코드 이미지 URL 설정
    qrCodeUrl.value = qrCodeDataURL;
  } catch (error) {
    console.error("QR 코드 생성 중 오류 발생:", error);
  }
};

// QR 코드 이미지 URL을 저장할 ref
const qrCodeUrl = ref("");

// 컴포넌트가 마운트되면 QR 코드를 생성
onMounted(generateQRCode);

watchEffect(() => {
  // if (useAuthStore.cur_user_info !== null) {
  //     router.push(({name:"home" ,params : {}, query:{}}))
  // }
  if (motionStore.motion_data.swipe !== null) {
    if (motionStore.motion_data.swipe == "SwipeRight") {
      motionStore.transition_dir = "slide-right";
      router.push({ name: "main", params: {}, query: {} });
    } 
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    // console.log(motionStore.motion_data)
  }
});
</script>

<style>
.main {
  position: relative;
  width: 1920px; /* 변경: 100%로 설정하여 부모 요소에 맞게 확장 */
  height: 1080px; /* 변경: 뷰포트 높이에 맞게 설정 */
  background-color: #8d6e63;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center; /* 변경: 텍스트 중앙 정렬을 위해 추가 */
}

.title {
  font-size: 7em; /* 변경: 상대적인 크기로 조절 */
  color: #d2c299;
  margin: 20px 0; /* 변경: 상단 및 하단 마진을 조절 */
}

.sub-title {
  font-size: 4em; /* 변경: 상대적인 크기로 조절 */
  color: #d2c299;
  margin: 20px 0; /* 변경: 상단 및 하단 마진을 조절 */
}

.subsub-title {
  font-size: 2.5em; /* 변경: 상대적인 크기로 조절 */
  color: #d2c299;
}
</style>
