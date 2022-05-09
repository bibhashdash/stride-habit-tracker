<template>
  <div class="email-verified-page">
    <h1>Your email has now been verified</h1>
    <p>You can now <router-link to="/">login</router-link> to your account</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.email-verified-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1% 0;
}
</style>
