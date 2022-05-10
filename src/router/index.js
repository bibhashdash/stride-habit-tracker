import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import VerifyEmail from "../views/VerifyEmail.vue";
import Welcome from "../views/Welcome.vue";
import LoggedOut from "../views/LoggedOut.vue";
import EmailVerified from "../views/EmailVerified.vue";
import NewActivity from "../views/NewActivity.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/loggedout",
    name: "LoggedOut",
    component: LoggedOut,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/:userid/verifyemail",
    name: "VerifyEmail",
    component: VerifyEmail,
    props: true,
  },
  {
    path: "/emailverified",
    name: "EmailVerified",
    component: EmailVerified,
  },
  {
    path: "/:userid/welcome",
    name: "Welcome",
    component: Welcome,
    props: true,
  },
  {
    path: "/:userid/newactivity",
    name: "NewActivity",
    component: NewActivity,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
