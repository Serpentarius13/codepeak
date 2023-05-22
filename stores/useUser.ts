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
  isLoading: boolean;
  timeout: NodeJS.Timeout | null;
}
const { cookies } = useCookies();

export const useUserStore = defineStore("user-store", {
  state: (): IUserStoreState => ({
    user: null,
    isLoading: false,
    timeout: null,
  }),
  actions: {
    async login(data: TLoginData) {
      try {
        this.load();
        const { apiLogin } = useAuth();

        const user = await apiLogin(data);

        if (typeof user === "object") {
          cookies.set(AUTH_COOKIE_KEY, user.token);

          this.user = user.account;
        }
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async loginWithToken() {
      try {
        this.load();
        const { apiLoginWithToken } = useAuth();
        const router = useRouter();

        const token = cookies.get(AUTH_COOKIE_KEY);

        if (!token) return;

        const user = await apiLoginWithToken(token);
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.user = null;

          this.loginWithToken();
        }, 20000);

        if (typeof user === "object") this.user = user;
        else throw new Error("Error getting user");
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async register(data: TRegisterData) {
      try {
        this.load();
        const { apiRegister } = useAuth();

        const user = await apiRegister(data);

        if (typeof user === "object") {
          cookies.set(AUTH_COOKIE_KEY, user.token);

          this.user = user.account;
        }
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },
    load() {
      this.isLoading = true;
    },
    unload() {
      this.isLoading = false;
    },
  },
  getters: {
    isAuthPossible() {
      return !!cookies.get(AUTH_COOKIE_KEY);
    },
  },
});
