<template>
  <form @submit.prevent="submitPushups" action="">
    <input
      v-model="pushups"
      class="form-input"
      type="number"
      name=""
      id=""
      placeholder="How many today?"
    />
    <button class="btn btn-primary">Add Pushups</button>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase/config";
export default {
  name: "addPushups",

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
    const pushups = ref(null);
    const submitPushups = () => {
      const docRef = doc(database, "users", `${uid.value}`);

      console.log(pushups.value);

      console.log(docRef);
      getDoc(docRef)
        .then((docSnap) => {
          updateDoc(docRef, {
            "userData.pushups": docSnap.data().userData.pushups + pushups.value,
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
      pushups,
      submitPushups,
      uid,
    };
  },
};
</script>

<style></style>
