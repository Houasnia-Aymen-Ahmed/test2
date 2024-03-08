<template>
  <ion-buttons>
    <ion-button
      class="btn-gradient font-primaryBold text-center text-[16px] leading-[20.96px] font-normal rounded-[15px] px-[60px] py-[18px] text-white"
    >
      {{ text }}
    </ion-button>
  </ion-buttons>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>
