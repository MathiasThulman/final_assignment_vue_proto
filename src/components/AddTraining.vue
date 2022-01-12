<template>
<div class="formWrapper">
  <div class="formContainer">
    <form class="form">
      <h2>Add Training</h2>

      <label for="dateInput" >date of Training</label>
      <input type="date" required="required"
             class="formInput" id="dateInput"
             v-model="trainingUnit.date">

      <label for="durationInput">duration in minutes</label>
      <input type="number"
             class="formInput"
             placeholder="duration"
             required="required"
             id="durationInput"
             v-model="trainingUnit.duration">

      <label for="muscleInput">Trained Muscles</label>
      <input type="text"
             class="formInput"
             placeholder="f.e. Biceps, Chest"
             required="required"
             id="muscleInput"
             v-model="trainingUnit.trainedMuscles">

      <label for="weightInput">Weight in Kg</label>
      <input type="number"
             class="formInput"
             placeholder="current weight"
             id="weightInput"
             v-model="trainingUnit.weight">

      <button @click="saveTrainingUnit">Submit</button>
      <a class="likeabutton">
        <router-link to="/mainPage">return to Main Page</router-link>
      </a>
    </form>
  </div>

</div>
</template>

<script>
import TrainingUnitDataService from "../services/TrainingUnitDataService";

export default {

  name: "AddTraining",

  data() {
    return {
      trainingUnit: {
        id: null,
        date: "",
        trainedMuscles: "",
        duration: "",
        weight: ""
      },
      submitted: false
    };
  },


  methods: {
    saveTrainingUnit() {
      const data = {
        date: this.trainingUnit.date,
        duration: this.trainingUnit.duration,
        trainedMuscles: this.trainingUnit.trainedMuscles,
        weight: this.trainingUnit.weight
      };

      TrainingUnitDataService.create(data)
          .then(response => {

          console.log("we got here")//for debugging
          this.trainingUnit.id = response.data.id;
          console.log(response.data);//also for debugging
        })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>