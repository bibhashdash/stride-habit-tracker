<template>
  <div class="newactivity-page">
    <form @submit.prevent="submitPushups" action="">
      <input class="form-input" type="number" name="" id="" />
      <button class="btn btn-primary">submit</button>
    </form>
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
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase/config";
export default {
  props: ["userid"],
  setup(props) {
    const router = useRouter();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        router.push("/");
      }
    });
    const pushups = ref("");
    const submitPushups = () => {
      console.log("you did some pushups!");
      // const docRef = doc(database, "users", `${props.userId}`);
      // console.log(docRef);
      // updateDoc(docRef, {
      //   "userData.pushups": pushups.value,
      // });
    };
    return { submitPushups, pushups };
  },
};
</script>

<style>
.newactivity-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
}
</style>
