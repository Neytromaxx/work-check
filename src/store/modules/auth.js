import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";


export default {
  namespaced: true,
  state: {
    user: null, // Foydalanuvchi ma'lumotlari
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        commit("setUser", { uid: user.uid, email: user.email });
        return { success: true };
      } catch (error) {
        console.error("Login error:", error.message);
        return { success: false, message: error.message };
      }
    },

    async logout({ commit }) {
      try {
        await signOut(auth);
        commit("logout");
      } catch (error) {
        console.error("Logout error:", error.message);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
  },
};
