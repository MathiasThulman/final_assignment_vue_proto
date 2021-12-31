<template>
<div id="loginWrapper" class="formWrapper">
  <div id="loginContainer" class="formContainer">
    <form id="loginForm" @onsubmit="validateLogin()" class="form">
      <h2>Please Login</h2>
      <input type="text" required="required" placeholder="username" class="formInput" id="loginUsername">
      <input type="password" required="required" placeholder="password" class="formInput" id="loginPassword">
      <button type="submit" value="login" @click="validateLogin()">login</button>

      <a class="likeabutton">
        <router-link to="createAccountPage">createAccount</router-link>
      </a>
    </form>
  </div>
</div>

</template>

<script>

export default {
  name: "Login",


  methods: {
    validateLogin() {
      let adminName = document.getElementById("loginUsername").value;
      let adminPassword = document.getElementById("loginPassword").value;

      if (adminName === "User" && adminPassword === "User") {
        this.$router.push({path: '/mainPage'})
        return false;
      } else {
        alert("wrong password or username")
        return false;
      }

    }
  }
}
</script>

<style scoped>


</style>