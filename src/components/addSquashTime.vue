<template>
  <form @submit.prevent="submitSquashTime" action="">
    <input
      v-model="squashTime"
      class="form-input"
      type="number"
      name=""
      id=""
      placeholder="Squash minutes today?"
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
  name: "addSquashTime",

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
    const squashTime = ref(null);
    const submitSquashTime = () => {
      const docRef = doc(database, "users", `${uid.value}`);

      getDoc(docRef)
        .then((docSnap) => {
          updateDoc(docRef, {
            "userData.squashTime":
              docSnap.data().userData.squashTime + squashTime.value,
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
      squashTime,
      submitSquashTime,
      uid,
    };
  },
};
</script>

<style></style>
