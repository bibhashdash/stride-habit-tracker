<template>
  <div class="welcome-page">
    <h1>Welcome {{ useremail }}</h1>

    <div class="">
      <img
        class="construction-img"
        src="../assets/images/construction_black_24dp.svg"
        alt=""
      />
    </div>
    <p>
      This part of your account is in suspended animation. The statistical
      likelihood is that other civilisations will arise. There will one day be
      lemon-soaked paper napkins. Till then, there will be a short delay. Please
      return to your seats by signing out.
    </p>
    <button @click="handleSignOut" class="btn btn-primary">Sign Out</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import {
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";
export default {
  props: ["userid", "useremail"],
  setup() {
    const router = useRouter();
    const handleSignOut = () => {
      const auth = getAuth();
      auth.signOut();
      auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/loggedout");
        }
      });
    };
    return {
      handleSignOut,
    };
  },
};
</script>

<style>
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1% 5%;
}
.construction-img {
  width: 200px;
  height: 200px;
  color: aqua;
}
</style>
