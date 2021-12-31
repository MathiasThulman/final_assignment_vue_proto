<template>
<div class="formWrapper">
  <div class="formContainer">
    <form class="form">
      <h2>Add Training</h2>

      <label for="dateInput">date of Training</label>
      <input type="date" required="required" class="formInput" id="dateInput">

      <label for="durationInput">duration in minutes</label>
      <input type="number" class="formInput" placeholder="duration" required="required" id="durationInput">

      <label for="muscleInput">Trained Muscles</label>
      <input type="text" class="formInput" placeholder="f.e. Biceps, Chest" required="required" id="muscleInput">

      <label for="weightInput">Weight in Kg</label>
      <input type="number" class="formInput" placeholder="current weight" id="weightInput">

      <button type="submit">Submit</button>
      <a class="likeabutton">
        <router-link to="/mainPage">return to Main Page</router-link>
      </a>
    </form>
  </div>

</div>
</template>

<script>
export default {
  name: "AddTraining"
}
</script>

<style scoped>

</style>