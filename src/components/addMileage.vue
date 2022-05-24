<template>
  <form @submit.prevent="submitMileage" action="">
    <input
      v-model="mileage"
      class="form-input"
      type="number"
      name=""
      id=""
      placeholder="How many miles today?"
      step="0.01"
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
  name: "addMileage",

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
    const mileage = ref(null);
    const submitMileage = () => {
      const docRef = doc(database, "users", `${uid.value}`);

      getDoc(docRef)
        .then((docSnap) => {
          updateDoc(docRef, {
            "userData.mileage": docSnap.data().userData.mileage + mileage.value,
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
      mileage,
      submitMileage,
      uid,
    };
  },
};
</script>

<style></style>
