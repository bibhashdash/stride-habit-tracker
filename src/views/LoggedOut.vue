<template>
  <div class="logged-out-page">
    <h1>You have been logged out!</h1>
    <p>Return to the <router-link to="/">login</router-link> page</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logged-out-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1% 0;
}
</style>
