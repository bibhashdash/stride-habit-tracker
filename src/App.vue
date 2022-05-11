<template>
  <router-view />
</template>

<script>
export default {};
</script>

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
  width: 100%;
  max-width: 600px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0 !important;
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
