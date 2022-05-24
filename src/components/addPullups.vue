<template>
  <form @submit.prevent="submitPullups" action="">
    <input
      v-model="pullups"
      class="form-input"
      type="number"
      name=""
      id=""
      placeholder="How many pullups today?"
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
  name: "addPullups",

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
    const pullups = ref(null);
    const submitPullups = () => {
      const docRef = doc(database, "users", `${uid.value}`);

      console.log(pullups.value);

      console.log(docRef);
      getDoc(docRef)
        .then((docSnap) => {
          updateDoc(docRef, {
            "userData.pullups": docSnap.data().userData.pullups + pullups.value,
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
      pullups,
      submitPullups,
      uid,
    };
  },
};
</script>

<style></style>
