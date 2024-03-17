<template>
  <div
    class="fixed top-[8.744vh] left-[77.6%] bg-[#FAFDFF] drop-shadow-notif w-[45px] h-[45px] rounded-[15px] mr-[51px] overflow-hidden z-[99]"
  >
    <div class="flex justify-center items-center h-full w-full">
      <ion-icon
        :icon="hasNotifications ? notification_icon_circle : notification_icon"
        @click="$router.push('/profile/notifications')"
        class="w-[19px] h-[23px] self-center"
      />
    </div>
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";
import { notification_icon, notification_icon_circle } from "@/assets/icons";
export default {
  props: {
    hasNotifications: { type: Boolean, default: false }
  },
  components: {
    IonIcon
  },
  data() {
    return { notification_icon, notification_icon_circle };
  }
};
</script>

<style>
.drop-shadow-notif {
  box-shadow: 11px 28px 50px 0px #144e5a33;
}
.icon-inner.show-circle > svg circle {
  display: none;
}
</style>
