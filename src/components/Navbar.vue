<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <!-- <router-link class="navbar-brand" to="/welcome"
        ><img class="nav-logo" src="../assets/images/track.png" alt="logo"
      /></router-link> -->
      <div class="navbar-brand">
        <img class="nav-logo" src="../assets/images/track.png" alt="logo" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-three-dots-vertical"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'Welcome', params: { userid: userid } }"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" @click="handleSignOut">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

import { signOut, getAuth } from "firebase/auth";
export default {
  props: ["userid"],
  setup() {
    const router = useRouter();
    const auth = getAuth();
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          router.push("/loggedout");
        })
        .catch((err) => {
          error.value = err.message;
        });
    };
    return { handleSignOut };
  },
};
</script>

<style>
#nav {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 4%;
  /* z-index: 5; */
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  border: 2px solid rgba(200, 200, 200, 0.316);
  border-radius: 5px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}
.navbar-toggler,
.navbar-light {
  color: transparent !important;
  border-color: transparent !important;
}
.bi-three-dots-vertical {
  color: #5ca33b;
}
/* nav li .router-link-exact-active {
  color: #211c4f !important;
}
.nav-item a:hover {
  color: #211c4f !important;
}
.nav-cta a:hover {
  color: #fff !important;
} */
.nav-logo {
  width: 50px;
}

@media all and (min-width: 992px) {
  /* #nav {
    background: linear-gradient(to right, #c40064, #4e88c7);
    padding: 10px 5%;
  } */
  .navbar-collapse {
    justify-content: flex-end;
  }
  /* .nav-item {
    margin-right: 10px;
  }
  .dropdown-menu {
    background-color: #c40064 !important;
  }
  .dropdown-menu li {
    margin-left: 0;
  }

  .nav-cta {
    width: 100px;
  } */
}
</style>
