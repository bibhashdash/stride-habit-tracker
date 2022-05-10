<template>
  <div class="verify-email-page"></div>
  <h1>Please verify your email</h1>
  <a @click="handleVerifyEmail">Send me a verification email</a>
  <p v-if="sentVerifyEmail">
    We've emailed you a link, check your inbox including any spam folders!
  </p>
  <router-link to="/">Return to login page</router-link>
</template>

<script>
import { getAuth, sendEmailVerification } from "firebase/auth";
import { ref } from "@vue/reactivity";
export default {
  props: ["userid"],
  setup() {
    const sentVerifyEmail = ref(false);
    const handleVerifyEmail = () => {
      const auth = getAuth();

      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ...
        sentVerifyEmail.value = true;
      });
    };

    return {
      sentVerifyEmail,
      handleVerifyEmail,
    };
  },
};
</script>

<style>
.verify-email-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
}
</style>
