<template>
  <form @submit.prevent="submitPuzzles" action="">
    <input
      v-model="puzzles"
      class="form-input"
      type="number"
      name=""
      id=""
      placeholder="How many puzzles today?"
    />
    <button class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase/config";
export default {
  name: "addPuzzles",

  setup() {
    const auth = getAuth();
    const uid = ref("");

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid.value = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        router.push("/loggedout");
      }
    });
    const router = useRouter();
    const puzzles = ref(null);
    const submitPuzzles = () => {
      const docRef = doc(database, "users", `${uid.value}`);

      getDoc(docRef)
        .then((docSnap) => {
          updateDoc(docRef, {
            "userData.puzzles": docSnap.data().userData.puzzles + puzzles.value,
          });
        })
        .then(() => {
          router.push({
            name: "Welcome",
            params: { userid: uid.value },
          });
        });
    };
    return {
      puzzles,
      submitPuzzles,
      uid,
    };
  },
};
</script>

<style></style>
