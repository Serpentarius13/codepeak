import { defineStore } from "pinia";

import { useCookies } from "vue3-cookies";

import { AUTH_COOKIE_KEY } from "~/features/constants/auth.constants";
import {
  IAccount,
  TLoginData,
  TRegisterData,
} from "~/features/types/auth.types";

interface IUserStoreState {
  user: IAccount | null;
}
const { cookies } = useCookies();
export const useUserStore = defineStore("user-store", {
  state: (): IUserStoreState => ({
    user: null,
  }),
  actions: {
    async login(data: TLoginData) {
      const { apiLogin } = useAuth();

      const user = await apiLogin(data);

      if (typeof user === "object") {
        cookies.set(AUTH_COOKIE_KEY, user.token);

        this.user = user.account;
      }
    },

    async loginWithToken() {
      const { apiLoginWithToken } = useAuth();

      const token = cookies.get(AUTH_COOKIE_KEY);

      if (!token) return;

      const user = await apiLoginWithToken(token);

      if (typeof user === "object") this.user = user;
      else throw new Error("Error getting user");
    },

    async register(data: TRegisterData) {
      const { apiRegister } = useAuth();

      const user = await apiRegister(data);

      if (typeof user === "object") {
        cookies.set(AUTH_COOKIE_KEY, user.token);

        this.user = user.account;
      }
    },
  },
  getters: {
    isAuthPossible() {
      return !!cookies.get(AUTH_COOKIE_KEY);
    },
  },
});
