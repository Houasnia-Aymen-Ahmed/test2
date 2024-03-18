<template>
  <ion-page class="w-full h-screen profile">
    <ion-content class="h-full" scrollY="true">
      <div class="bg-contain bg-no-repeat bg-profile h-full" />
    </ion-content>
  </ion-page>
</template>

<script>
import { onMounted, ref } from "vue";
import { users } from "@/utils/constants";

import {
  IonContent,
  IonPage,
  onIonViewWillLeave,
  onIonViewDidLeave,
  onIonViewWillEnter,
  modalController
} from "@ionic/vue";
import ModalSheet from "./ModalSheet.vue";

export default {
  components: {
    IonPage,
    IonContent
  },
  data() {
    return {
      user: null,
      favorite: null,
      modal: null
    };
  },

  setup() {
    const user = ref(users.find((item) => item.id === 1) || {});
    const favorite = ref(user.value.favorite || []);
    let modalCreated = false;

    onIonViewWillEnter(() => {
      console.log("Home page will enter");
      if (!modalCreated) {
        createModal(user.value, favorite.value);
        modalCreated = true;
      }
    });
    onIonViewWillLeave(() => {
      console.log("Home page will leave");
      closeModal();
    });

    onIonViewDidLeave(() => {
      console.log("Home page did leave");
      closeModal();
    });

    onMounted(() => {
      console.log("Profile component mounted");
      if (!modalCreated) {
        createModal(user.value, favorite.value);
        modalCreated = true;
      }
    });

    const createModal = async (user, favorite) => {
      const modal = await modalController.create({
        component: ModalSheet,
        componentProps: {
          user,
          favorite
        },
        backdropDismiss: false,
        showBackdrop: false,
        cssClass: "modal-sheet",
        initialBreakpoint: 0.6465,
        breakpoints: [0.5, 0.6465, 0.9384]
      });
      const activeTabPage = document.querySelector(".profile ion-content");
      activeTabPage.appendChild(modal);
      return modal.present();
    };
    const closeModal = () => {
      modalController.dismiss(null, "cancel");
      modalCreated = false;
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.modal-sheet {
  --border-radius: 35px;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
