<template>
  <ion-page class="w-full h-screen">
    <ion-content class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="flex flex-col items-center justify-start w-full h-full">
          <header-back-btn @backClicked="goBack" />
          <PageTitle
            title="Chat"
            mt="20"
            customClass="font-primaryBold text-left text-[25px] text-tertiary leading-[32.76px] font-normal"
          />
          <div class="w-full h-full">
            <ion-list
              class="h-full flex flex-col items-center gap-[20px] mt-[25px]"
            >
              <ion-item
                v-for="item in chats"
                :key="item.id"
                class="w-[89.666%] h-[9.975vh] shadow-primary-shadow p-0 rounded-[22px] overflow-clip bg-white"
                @click="redirectToChatItem(item)"
              >
                <div
                  class="flex flex-row items-center justify-start w-full h-[9.975vh]"
                >
                  <ion-img
                    :src="item.image"
                    :alt="item.name"
                    class="w-[64px] h-[64px] rounded-[10px]"
                  />
                  <div class="flex flex-col ml-[21px] gap-[8px]">
                    <ion-text
                      class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                    >
                      {{ item.name }}
                    </ion-text>
                    <ion-text
                      class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                    >
                      {{ item.message }}
                    </ion-text>
                  </div>
                  <ion-text
                    class="absolute top-[20px] right-[12px] font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >
                    {{ item.time }}
                  </ion-text>
                </div>
              </ion-item>
            </ion-list>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { HeaderBackBtn, PageTitle } from "@/components";
import { chats } from "@/utils/constants";
import {
  IonContent,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonText
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonText,
    IonImg,
    HeaderBackBtn,
    PageTitle
  },
  data() {
    return {
      chats: chats.slice(0, 3)
    };
  },
  methods: {
    redirectToChatItem(item) {
      this.$router.push({ name: "ChatItem", params: { id: item.id } });
    },
    goBack() {
      this.$router.push("/home");
    }
  }
};
</script>
