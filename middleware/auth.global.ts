import { useUserStore } from "~/stores/useUser";

export default defineNuxtRouteMiddleware(async (request) => {
  if (process.server) return;

  const userStore = useUserStore();

  console.log(userStore.user);

  if (!userStore.user && userStore.isAuthPossible) {
    await userStore.loginWithToken();
  }

  console.log(userStore.user);
  if (request.meta.auth) {
    console.log("!");
    switch (request.meta.auth) {
      case "user":
        if (!userStore.user) {
          return navigateTo("/login");
        }
        break;
      case "guest":
        if (userStore.user) return navigateTo("/profile");
    }
  }
});
