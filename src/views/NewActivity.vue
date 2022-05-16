<template>
  <div id="nav">
    <Navbar :userid="userid" />
  </div>
  <div class="newactivity-page">
    <h1>Add an activity</h1>
    <div class="activity-nav">
      <div
        class="activity-icon pushups-icon active-icon"
        @click="activateComponent('pushups', $event)"
      >
        <span class="material-icons material-icons-outlined">
          fitness_center
        </span>
        <p class="activity-icon-caption">Pushups</p>
      </div>
      <div
        class="activity-icon pullups-icon"
        @click="activateComponent('pullups', $event)"
      >
        <span class="material-icons material-icons-outlined">
          accessibility_new
        </span>
        <p class="activity-icon-caption">Pullups</p>
      </div>
      <div
        class="activity-icon mileage-icon"
        @click="activateComponent('mileage', $event)"
      >
        <span class="material-icons material-icons-outlined">
          directions_run
        </span>
        <p class="activity-icon-caption">Running</p>
      </div>
      <div
        class="activity-icon books-icon"
        @click="activateComponent('books', $event)"
      >
        <span class="material-icons material-icons-outlined"> menu_book </span>
        <p class="activity-icon-caption">Books</p>
      </div>
    </div>
    <div class="activity-recording">
      <!-- Load a component as per icon selected above -->
      <addPushups v-if="activeIcon === 'pushups'" />
      <addPullups v-if="activeIcon === 'pullups'" />
      <addMileage v-if="activeIcon === 'mileage'" />
      <addBooks v-if="activeIcon === 'books'" />
    </div>
    <router-link
      class="nav-link"
      :to="{ name: 'Welcome', params: { userid: userid } }"
      ><span class="material-icons material-icons-outlined">
        home
      </span></router-link
    >

    <div class="stamps">
      <p class="dateStamp">{{ todaysDate }}</p>
      <p class="timeStamp">{{ timeRightNow }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import addPushups from "../components/addPushups.vue";
import addPullups from "../components/addPullups.vue";
import addMileage from "../components/addMileage.vue";
import addBooks from "../components/addBooks.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase/config";
export default {
  components: { Navbar, addPushups, addPullups, addMileage, addBooks },
  props: ["userid"],
  setup(props) {
    const todaysDate = ref("");
    const timeRightNow = ref("");
    const d = new Date();
    todaysDate.value = d.toDateString();
    timeRightNow.value = d.toTimeString();
    const activeIcon = ref("pushups");
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
        router.push("/loggedout");
      }
    });
    const activateComponent = (activity, event) => {
      // console.log(activity, event);

      const activityIcons = document.querySelectorAll(".activity-icon");
      activityIcons.forEach((icon) => {
        icon.classList.remove("active-icon");
      });
      activityIcons.forEach((icon) => {
        if (
          icon.classList.contains(`${activity}-icon`) &&
          !icon.classList.contains("active-icon")
        ) {
          icon.classList.add("active-icon");
          activeIcon.value = activity;
        }
      });
    };

    return { activeIcon, activateComponent, todaysDate, timeRightNow };
  },
};
</script>

<style>
.newactivity-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1% 0;
  width: 90%;
  max-width: 500px;
}
.activity-nav {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem 0;
}
.activity-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 80px;
  cursor: pointer;
  /* height: 80px; */
}
.active-icon {
  border: 2px solid #82cd64;
  border-radius: 5px;

  transform: scale(1.2);
  box-shadow: 1px 3px 10px 4px rgba(0, 0, 0, 0.309);
}
.activity-icon-caption {
  color: #82cd64;
  font-weight: 600;
}
.stamps {
  position: fixed;
  bottom: 5px;
  left: 10px;
  right: 10px;
}
</style>
