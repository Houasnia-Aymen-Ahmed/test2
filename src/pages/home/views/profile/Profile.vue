<template>
  <ion-page class="w-full h-screen">
    <ion-content class="h-full" scrollY="true">
      <div class="bg-contain bg-no-repeat bg-resto h-full" />
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import { users } from "@/utils/constants";

import {
  IonContent,
  IonPage,
  onIonViewWillLeave,
  onIonViewDidEnter,
  onIonViewDidLeave,
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
      favorite: null
    };
  },

  setup() {
    const user = ref(users.find((item) => item.id === 1) || {});
    const favorite = ref(user.value.favorite || []);

    onIonViewWillLeave(() => {
      console.log("Home page will leave");
      closeModal();
    });

    onIonViewDidEnter(() => {
      console.log("Home page did enter");
      createModal(user.value, favorite.value);
    });

    onIonViewDidLeave(() => {
      console.log("Home page did leave");
      closeModal();
    });

    const createModal = async (user, favorite) => {
      await modalController
        .create({
          component: ModalSheet,
          componentProps: {
            user,
            favorite
          },
          backdropDismiss: false,
          cssClass: "modal-sheet",
          initialBreakpoint: 0.6465,
          breakpoints: [0.5, 0.6465, 0.9384]
        })
        .then((modal) => {
          document.querySelector("ion-content").appendChild(modal);
          return modal.present();
        });
    };
    const closeModal = () => {
      modalController.dismiss(null, "cancel");
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
