<template>
  <div id="nav">
    <Navbar :userid="userid" />
  </div>
  <div class="welcome-page">
    <p>
      Signed in as: <span class="welcome-page-user-info">{{ userEmail }}</span>
    </p>
    <p>
      Member since:
      <span class="welcome-page-user-info"
        >{{ dateJoined.slice(4, 10) }}, {{ dateJoined.slice(11) }}</span
      >
    </p>
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
        <p class="stat-caption">Pullups</p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ mileage }}</p>
        <p class="stat-caption">Miles ran</p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ squashTime }}</p>
        <p class="stat-caption">Squash Minutes</p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ booksStarted }} / {{ booksCompleted }}</p>
        <p class="stat-caption books-stat-caption">
          Books <br />
          Started / Completed
        </p>
      </div>
      <div class="stat">
        <p class="stat-figure">{{ puzzles }}</p>
        <p class="stat-caption">Puzzles</p>
      </div>
    </div>

    <router-link
      :to="{
        name: 'NewActivity',
        params: { userid: userid },
      }"
    >
      <button class="btn btn-primary">Add activity</button>
    </router-link>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
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
  components: { Navbar },
  props: ["userid"],
  setup(props) {
    const router = useRouter();
    const auth = getAuth();
    const userEmail = ref("");
    const error = ref("");
    const pushups = ref("");
    const pullups = ref("");
    const mileage = ref("");
    const squashTime = ref("");
    const booksCompleted = ref("");
    const booksStarted = ref("");
    const puzzles = ref("");
    const dateJoined = ref("");
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
        squashTime.value = userDoc.data().userData.squashTime;
        puzzles.value = userDoc.data().userData.puzzles;

        booksCompleted.value = userDoc.data().userData.booksCompleted;
        booksStarted.value = userDoc.data().userData.booksStarted;
        dateJoined.value = userDoc.data().userData.dateJoined;
      } catch (err) {
        error.value = "No data found!";
      }
    };

    return {
      userEmail,
      error,
      showData,
      pullups,
      pushups,
      mileage,
      squashTime,
      booksCompleted,
      booksStarted,
      puzzles,
      dateJoined,
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
.welcome-page-user-info {
  color: #82cd64;
  font-weight: bold;
}
.construction-img {
  width: 200px;
  height: 200px;
  color: aqua;
}
.stats {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-figure {
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
}
.stat-caption {
  color: #82cd64;
  font-weight: 600;
}
.books-stat-caption {
  text-align: center;
}
@media all and (min-width: 320px) and (max-width: 480px) {
  p {
    font-size: 12px;
  }
  .stat-figure {
    font-size: 2rem;
  }
}
@media all and (min-width: 480px) {
  p {
    font-size: 14px;
  }
  .stat-figure {
    font-size: 3rem;
  }
}
</style>
