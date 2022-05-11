<template>
  <div class="welcome-page">
    <p>Hey there {{ userEmail }}!</p>
    <p>Here are your latest stats</p>
    <div class="" v-if="error">
      {{ error }}
    </div>

    <div v-else class="stats">
      <div class="stat">
        <p class="stat-figure">{{ pushups }}</p>
        <p class="stat-caption">Pushups</p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ pullups }}</p>
        <p class="stat-caption">pullups</p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ mileage }}</p>
        <p class="stat-caption">Miles ran</p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ booksCompleted }}</p>
        <p class="stat-caption">Books completed</p>
      </div>
    </div>

    <router-link
      :to="{
        name: 'NewActivity',
        params: { userid: userid },
      }"
      ><button disabled class="btn btn-primary">
        Add activity
      </button></router-link
    >

    <button @click="handleSignOut" class="btn btn-primary">Sign Out</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import {
  signOut,
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase/config";
export default {
  props: ["userid"],
  setup(props) {
    const router = useRouter();
    const auth = getAuth();
    const userEmail = ref("");
    const error = ref("");
    const pushups = ref("");
    const pullups = ref("");
    const mileage = ref("");
    const booksCompleted = ref("");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        userEmail.value = user.email;

        showData(uid);
      } else {
        router.push("/");
      }
    });
    const showData = async (uid) => {
      try {
        const docRef = doc(database, "users", uid);
        const userDoc = await getDoc(docRef);
        // console.log(userDoc.data().userData.pullups);
        pullups.value = userDoc.data().userData.pullups;
        pushups.value = userDoc.data().userData.pushups;
        mileage.value = userDoc.data().userData.mileage;
        booksCompleted.value = userDoc.data().userData.booksCompleted;
      } catch (err) {
        error.value = "No data found!";
      }
    };
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          router.push("/loggedout");
        })
        .catch((err) => {
          error.value = err.message;
        });
    };
    return {
      handleSignOut,
      userEmail,
      error,
      showData,
      pullups,
      pushups,
      mileage,
      booksCompleted,
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
  width: 90%;
  max-width: 500px;
}
.construction-img {
  width: 200px;
  height: 200px;
  color: aqua;
}
.stats {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-figure {
  font-size: 4rem;
  font-weight: 600;
}
</style>
