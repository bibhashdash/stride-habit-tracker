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
              :to="{ name: welcome, params: { userid: userid } }"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <a class="nav-link">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["userid"],
};
</script>

<style>
#nav {
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  /* z-index: 5; */
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

/* .nav-cta {
  background-color: #c40064;
  border-radius: 5px;
  width: auto;
  text-align: center;
  max-width: 200px;
}
.nav-cta:hover {
  background-color: #211c4f;
} */
/* @media all and (min-width: 768px) {
  #nav {
    background: linear-gradient(to bottom, #c40064, #4e88c7);
    padding: 10px 5%;
  }
}
@media all and (min-width: 992px) {
  #nav {
    background: linear-gradient(to right, #c40064, #4e88c7);
    padding: 10px 5%;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
  .nav-item {
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
  }
}

@media all and (min-width: 1200px) {
  #nav {
    padding: 10px 10%;
  }
} */
</style>
