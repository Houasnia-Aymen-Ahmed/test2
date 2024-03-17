<template>
  <ion-page class="w-full h-screen">
    <ion-content class="h-full">
      <div class="bg-cover bg-pattern h-full">
        <div class="flex flex-col items-center justify-start w-full h-full">
          <header-back-btn @backClicked="goBack" />
          <PageTitle
            title="Chat"
            mt="20"
            customClass="font-primaryBold text-left text-[25px] text-tertiary leading-[32.76px] font-normal"
          />
          <div
            v-if="chatItem"
            class="flex flex-row items-center justify-between px-[13px] w-[92.533%] h-[11.453vh] shadow-primary-shadow p-0 rounded-[22px] bg-white mt-[25px]"
          >
            <ion-img
              :src="chatItem.image"
              :alt="chatItem.name"
              class="w-[62px] h-[62px] rounded-[10px]"
            />
            <div
              class="flex flex-1 flex-row justify-between items-center pr-[15px]"
            >
              <div class="flex flex-col ml-[21px] gap-[8px]">
                <ion-text
                  class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                >
                  {{ chatItem.name }}
                </ion-text>
                <div class="flex flex-row items-center gap-[4px]">
                  <div
                    :class="`w-[6px] h-[6px] rounded-full inline-block ${
                      chatItem.isActive
                        ? 'bg-green-gradient'
                        : 'bg-[#3B3B3B] bg-opacity-30'
                    }`"
                  ></div>
                  <ion-text
                    class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >
                    {{ chatItem.isActive ? "Online" : "Offline" }}
                  </ion-text>
                </div>
              </div>
              <div
                class="justify-self-end flex items-center justify-center bg-green-gradient-100 w-[40px] h-[40px] rounded-full"
              >
                <ion-icon :icon="call" />
              </div>
            </div>
          </div>
          <div class="w-full px-5 mt-[40px]">
            <div
              v-for="message in filteredMessages"
              :key="message.time"
              class="grid mb-[20px]"
            >
              <div
                :class="`rounded-[13px] py-2 px-4 max-w-max text-opacity-80 ${
                  message.isSelf
                    ? 'bg-[#F6F6F6] justify-self-start text-black'
                    : 'bg-green-gradient justify-self-end text-white '
                }`"
              >
                <ion-text
                  class="font-primarySans text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >{{ message.text }}</ion-text
                >
              </div>
            </div>
          </div>
          <div class="fixed bottom-2.5 w-full px-2.5">
            <ion-input
              v-model="inputMessage"
              class="shadow-secondary-shadow !flex flex-row items-center justify-center rounded-[22px] bg-white h-[74px]"
              ><ion-icon
                :icon="send"
                @click="sendMessage"
                class="absolute right-[37px] w-[24px] h-[24px] block z-[10]"
            /></ion-input>
          </div>
        </div>
      </div>
      <div class="offset"></div>
    </ion-content>
  </ion-page>
</template>

<script>
import { call, send } from "@/assets/icons";
import { HeaderBackBtn, PageTitle } from "@/components";
import { chats } from "@/utils/constants";
import {
  IonContent,
  IonPage,
  IonInput,
  IonText,
  IonImg,
  IonIcon
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    HeaderBackBtn,
    PageTitle,
    IonInput,
    IonText,
    IonImg,
    IonIcon
  },
  data() {
    return {
      itemId: null,
      chatItem: null,
      inputMessage: "",
      call,
      send,
      userID: 0
    };
  },
  mounted() {
    this.itemId = parseInt(this.$route.params.id);

    this.chatItem = chats.find((item) => item.id == this.itemId) || {};
  },
  computed: {
    filteredMessages() {
      if (!this.chatItem) {
        return [];
      }

      const conversation = this.chatItem.conversations.find(
        (conv) => conv.with === this.userID
      );

      return conversation
        ? conversation.messages.map((message) => ({
            ...message,
            isSelf: message.type === "self"
          }))
        : [];
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    sendMessage() {
      if (this.inputMessage.trim() === "") {
        return;
      }
      const conversation = this.chatItem.conversations.find(
        (conv) => conv.with === this.userID
      );
      conversation.messages.push({
        type: "friend",
        text: this.inputMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      });
      this.inputMessage = "";
    }
  }
};
</script>

<style>
ion-input.input-label-placement-start.sc-ion-input-ios-h
  .input-wrapper.sc-ion-input-ios {
  @apply py-[0] px-[25px];
}

.offset::before {
  content: "";
  @apply absolute top-0 left-0 w-full h-[100px];
}
</style>
