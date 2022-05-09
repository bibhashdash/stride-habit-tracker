<template>
  <div class="login-page">
    <div class="logo-container">
      <img class="logo" src="../assets/images/track.png" alt="" />
    </div>
    <div class="app-titles">
      <h1 class="app-title">Welcome to Stride</h1>
      <h2 class="app-subdeck">Habits. Data. Driven</h2>
    </div>

    <form @submit.prevent="handleLogin" class="form form-login">
      <input
        class="form-input input-login-email"
        type="text"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="form-input input-login-password"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <button class="btn btn-primary btn-login">Login</button>
    </form>

    <div class="auth-extras">
      <p>Forgot Password</p>
      <p>
        Don't have an account? <router-link to="/SignUp">Sign up!</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import {
  getAuth,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";
export default {
  setup() {
    const router = useRouter();
    const email = ref("");

    const password = ref("");
    const errorCode = ref("");
    const errorMessage = ref("");
    const handleLogin = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          router.push({
            name: "Welcome",
            params: {
              userid: user.uid,
              useremail: user.email,
            },
          });
        })
        .catch((error) => {
          errorCode.value = error.code;
          errorMessage.value = error.message;
        });
    };
    return {
      email,
      password,

      handleLogin,

      errorCode,
      errorMessage,
    };
  },
};
</script>

<style>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
}
.logo {
  width: 136px;
  height: 136px;
}
.app-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.app-title {
  font-weight: 400;
  font-size: 2.5rem;
}
.app-subdeck {
  font-weight: 400;
  font-size: 0.9rem;
}
.form {
  display: flex;
  flex-direction: column;

  width: 100%;
}
.form-login {
  margin-bottom: 2rem;
}
.form-input {
  margin: 14px 0;
  height: 2.9rem;
  border-radius: 5px;
  border: none;
  padding: 1% 5%;
  font-family: "Nunito", sans-serif;
  font-size: 0.7rem;

  font-weight: 700;
}
.btn {
  margin: 14px 0;
  height: 3.2rem;
  border-radius: 5px;
  border: none;
  padding: 1% 5%;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;

  font-weight: 700;
}
.btn-primary {
  background-color: #5ca33b;
}
.auth-extras {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-extras p {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 10px 0;
}
</style>
