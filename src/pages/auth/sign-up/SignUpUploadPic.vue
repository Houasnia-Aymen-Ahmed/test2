<template>
  <div class="bg-cover bg-patternMasked h-full">
    <div class="flex flex-col items-center justify-start w-full h-full">
      <header-back-btn @backClicked="moveToPrevSlide" />
      <div
        class="w-full flex flex-col items-start justify-center px-[6.6667vw] mt-[2.4631vh]"
      >
        <CardComp
          title="Upload Your Photo Profile"
          content="This data will be displayed in your account profile for security"
        />

        <div
          v-if="imagePreview"
          class="relative self-center mt-[7.3892vh] shadow-secondary-shadow w-[76.8%] h-[29.3103vh] rounded-[22px] overflow-hidden"
        >
          <div
            @click="clearImage"
            class="absolute top-[1.2315vh] right-[2.6667vw] w-[8.2667vw] h-[3.8177vh] rounded-full bg-white bg-opacity-50 m-0 flex items-center justify-center"
          >
            <ion-icon :icon="closeOutline" class="text-white" size="small" />
          </div>
          <ion-img
            :src="imagePreview"
            :alt="imagePreview"
            class="w-full h-full object-cover rounded-[22px]"
          />
        </div>
        <div
          v-else
          class="self-center w-full flex flex-col items-center justify-center gap-[2.4631vh] mt-[2.4631vh]"
        >
          <ProfilePicUploader
            :image="gallery"
            title="From Gallery"
            :handleImageUpload="handleImageUpload"
          />
          <ProfilePicUploader
            :image="camera"
            title="Take a Photo"
            :handleImageUpload="handleImageUpload"
          />
        </div>
      </div>
      <primary-btn
        class="absolute bottom-[7.389vh] w-full flex-1 justify-center items-center"
        text="Next"
        @click="moveToNextSlide"
      />
    </div>
  </div>
</template>
<script>
import { IonIcon, IonImg } from "@ionic/vue";
import { gallery, camera } from "@/assets/icons";
import { closeOutline } from "ionicons/icons";
import {
  PrimaryBtn,
  HeaderBackBtn,
  CardComp,
  ProfilePicUploader
} from "@/components";

export default {
  components: {
    IonIcon,
    IonImg,
    PrimaryBtn,
    HeaderBackBtn,
    CardComp,
    ProfilePicUploader
  },
  data() {
    return {
      closeOutline,
      gallery,
      camera,
      imagePreview: null
    };
  },
  methods: {
    handleImageUpload() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (event) => {
        // Handle image upload logic
        const file = event.target.files[0];
        if (!file) {
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      };
      input.click();
    },
    clearImage() {
      this.imagePreview = null;
    },

    moveToNextSlide() {
      this.$emit("moveToNextSlide");
    },
    moveToPrevSlide() {
      this.$emit("moveToPrevSlide");
    }
  }
};
</script>

<style>
ion-button {
  --background: transparent;

  --padding-top: 10px;
  --padding-bottom: 10px;
  --padding-start: 10px;
  --padding-end: 10px;
}
</style>
