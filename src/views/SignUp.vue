<template>
  <div class="signup-page">
    <div class="logo-container">
      <img class="logo" src="../assets/images/track.png" alt="" />
    </div>
    <div class="app-titles">
      <h1 class="app-title">Sign up to Stride</h1>
      <h2 class="app-subdeck">Habits. Data. Driven</h2>
    </div>

    <form class="form form-signup">
      <input
        class="form-input input-signup-email"
        type="text"
        placeholder="Email"
      />
      <input
        class="form-input input-signup-password"
        type="password"
        placeholder="Password"
      />
      <input
        class="form-input input-signup-password"
        type="password"
        placeholder="Retype password"
      />
      <button class="btn btn-primary btn-signup">Create Account</button>
    </form>

    <div class="auth-extras">
      <p>Already have an account? <router-link to="/">Login!</router-link></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
}
.logo {
  width: 136px;
  height: 136px;
}
.app-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.app-title {
  font-weight: 400;
  font-size: 2.5rem;
}
.app-subdeck {
  font-weight: 400;
  font-size: 0.9rem;
}
.form {
  display: flex;
  flex-direction: column;

  width: 100%;
}
.form-signup {
  margin-bottom: 2rem;
}
.form-input {
  margin: 14px 0;
  height: 2.9rem;
  border-radius: 5px;
  border: none;
  padding: 1% 5%;
  font-family: "Nunito", sans-serif;
  font-size: 0.7rem;

  font-weight: 700;
}
.btn {
  margin: 14px 0;
  height: 3.2rem;
  border-radius: 5px;
  border: none;
  padding: 1% 5%;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;

  font-weight: 700;
}
.btn-primary {
  background-color: #5ca33b;
}
.auth-extras {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-extras p {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 10px 0;
}
</style>
