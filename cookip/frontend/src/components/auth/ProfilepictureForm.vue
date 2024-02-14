<template>
<v-file-input class="input" type="file" counter show-size label="이미지 제출(여러개 가능)"
              outlined dense multiple prepend-icon="mdi-camera" style="width: 400px; margin-left: 100px;"
              @change="onImageChange"/>
<v-img v-for="(item,i) in uploadimageurl" :key="i" :src="item.url"
            contain height="150px" width="200px" style="border: 2px solid black; margin-left:100px;"/>
  </template>
  
  <script>
  export default {
    methods: {
      handleFileChange() {
        this.selectedFile = this.$refs.fileInput.files[0];
      },
      async uploadImage() {
        if (!this.selectedFile) {
          console.error('No file selected');
          return;
        }
  
        const formData = new FormData();
        formData.append('image', this.selectedFile);
  
        try {
          const response = await fetch('http://your-ec2-server-url/api/uploadImage', {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            console.log('Image uploaded successfully');
          } else {
            console.error('Failed to upload image');
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      },
    },
    data() {
      return {
        selectedFile: null,
      };
    },
  };
  </script>
  