import { createRouter, createWebHistory } from "@ionic/vue-router";
import { GetStarted, Authenticate } from "@/pages";
import Home from "@/pages/home/Home.vue";
import { ChatItem, NotificationsPage, Product } from "@/pages/home/navigations";
import {
  HomeLayout,
  HomeContent,
  Profile,
  Cart,
  Chat,
  CheckoutWrapper
} from "@/pages/home/views";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/home"
      },
      {
        path: "home",
        name: "home",
        component: HomeLayout,
        children: [
          {
            path: "",
            name: "content",
            component: HomeContent
          },
          {
            path: "restaurants",
            name: "restaurants",
            component: () =>
              import("@/pages/home/navigations/RestaurantsItems.vue")
          },

          {
            path: "menu-items",
            name: "menu-items",
            component: () => import("@/pages/home/navigations/MenuItems.vue")
          }
        ]
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "cart",
        name: "cart",
        component: Cart
      },
      {
        path: "chat",
        name: "chat",
        component: Chat
      }
    ]
  },
  {
    path: "/get-started",
    component: GetStarted
  },
  {
    path: "/authenticate",
    name: "Authenticate",
    component: Authenticate
  },
  {
    path: "/checkout-order",
    name: "CheckoutOrder",
    component: CheckoutWrapper,
    children: [
      // {
      //   path: "",
      //   name: "CheckoutOrder",
      //   component: CheckoutOrder
      // },
      // {
      //  path: "/checkout-order/map",
      //  name: "CheckoutOrderMap",
      //  component: () =>
      //  import("@/pages/home/views/checkout_order/CheckoutMap.vue")
      // },
    ]
  },
  {
    path: "/checkout-order/map",
    name: "CheckoutOrderMap",
    component: () => import("@/pages/home/views/checkout_order/CheckoutMap.vue")
  },
  {
    path: "/chat/:id",
    name: "ChatItem",
    component: ChatItem
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: "/profile/notifications",
    name: "Notifications",
    component: NotificationsPage
  },
  {
    path: "/cart/order",
    name: "orders",
    component: () => import("@/pages/home/views/cart/OrderDetails.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
