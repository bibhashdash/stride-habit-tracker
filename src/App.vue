<template>
  <div id="nav"></div>
  <router-view />
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(223, 223, 223);
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* #nav {
  padding: 30px;
} */

a {
  font-weight: bold;
  text-decoration: underline;
  color: #5ca33b !important;
}
/* 
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
