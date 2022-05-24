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
  color: #82cd64 !important;
}
.btn {
  margin: 14px 0;
  height: 3.2rem;
  border-radius: 5px;
  border: none !important;
  padding: 1% 5%;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;

  width: 100%;
  /* min-width: 300px; */

  font-weight: 700;
}
.btn-primary {
  background-color: #5ca33b !important;
}
/* 
#nav a.router-link-exact-active {
  color: #42b983;
} */
@media all and (min-width: 320px) and (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
</style>
