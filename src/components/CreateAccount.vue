<template>
  <div class="formWrapper" id="createFormWrapper">
    <div class="formContainer">
      <form class="form" id="createForm">
        <h2>Create account</h2>
        <input type="text" required="required" placeholder="new username" class="formInput" id="createUsername">

        <input type="password" required="required" placeholder="new password" class="formInput" id="createPassword">

        <button> create</button>
        <a class="likeabutton">
          <router-link to="/">return to home page</router-link>
        </a>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "CreateAccount"
}
</script>

<style scoped>

</style>