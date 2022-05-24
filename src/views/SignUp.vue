<template>
  <div class="signup-page">
    <div class="logo-container">
      <img class="logo" src="../assets/images/track.png" alt="" />
    </div>
    <div class="app-titles">
      <h1 class="app-title">Sign up to Stride</h1>
      <h2 class="app-subdeck">Habits. Data. Driven</h2>
    </div>

    <form @submit.prevent="handleSignUp" class="form form-signup">
      <input
        v-model="email"
        class="form-input input-signup-email"
        type="text"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        class="form-input input-signup-password"
        type="password"
        placeholder="Password"
        required
      />
      <input
        v-model="passwordRetype"
        class="form-input input-signup-password"
        type="password"
        placeholder="Retype password"
        required
      />
      <button class="btn btn-primary btn-signup">Create Account</button>

      <div class="" v-if="errorCode">
        <p>
          {{ errorMessage }}
          <span
            class="remove-password-error-message"
            @click="removeErrorMessage"
            >❌</span
          >
        </p>
      </div>
      <div class="" v-if="passwordError">
        <p>
          🙃Error: Passwords do not match
          <span
            class="remove-password-error-message"
            @click="removePasswordErrorMessage"
            >❌</span
          >
        </p>
      </div>
    </form>

    <div class="auth-extras">
      <p>Already have an account? <router-link to="/">Login</router-link></p>
    </div>
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
} from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase/config";

export default {
  setup() {
    const router = useRouter();
    const passwordError = ref(false);
    const email = ref("");

    const password = ref("");
    const passwordRetype = ref("");
    const errorCode = ref("");
    const errorMessage = ref("");
    const removePasswordErrorMessage = () => {
      passwordError.value = false;
      password.value = "";
      passwordRetype.value = "";
    };
    const removeErrorMessage = () => {
      errorCode.value = null;
    };
    const handleSignUp = () => {
      if (password.value != passwordRetype.value) {
        passwordError.value = true;
      } else {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            const docRef = doc(database, "users", user.uid);
            setDoc(docRef, {
              userData: {
                pushups: 0,
                pullups: 0,
                mileage: 0,
                squashTime: 0,
                booksCompleted: 0,
                puzzles: 0,
              },
            });
            router.push({
              name: "VerifyEmail",
              params: {
                userid: user.uid,
              },
            });
          })
          .catch((error) => {
            errorCode.value = error.code;
            errorMessage.value = error.message;
          });
      }
    };
    return {
      email,
      password,
      passwordRetype,
      handleSignUp,
      passwordError,
      errorCode,
      errorMessage,
      removePasswordErrorMessage,
      removeErrorMessage,
    };
  },
};
</script>

<style>
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
  width: 90%;
  max-width: 500px;
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
.form-signup {
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
  cursor: pointer;
  font-weight: 700;
}
.btn:active {
  background-color: #fff;
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
.remove-password-error-message {
  cursor: pointer;
}
</style>
