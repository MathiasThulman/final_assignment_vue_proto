<template>
<div class="formWrapper">
  <div class="formContainer">
    <form class="form">
      <h2>Add Training</h2>

      <label for="dateInput" >date of Training</label>
      <input type="date"

             class="formInput" id="dateInput"
             v-model="trainingUnit.date">

      <label for="durationInput">repetitions</label>
      <input type="number"
             class="formInput"
             placeholder="reps"
             required="required"
             id="durationInput"
             v-model="trainingUnit.duration">

      <label for="muscleInput">Trained Muscles</label>
      <input type="text"
             class="formInput"
             placeholder="f.e. deadlift/bench press"
             required="required"
             id="muscleInput"
             v-model="trainingUnit.trainedMuscles">

      <label for="weightInput">Weight in Kg</label>
      <input type="number"
             class="formInput"
             placeholder="how much did you lift"
             id="weightInput"
             v-model="trainingUnit.weight">

      <button @click="saveTrainingUnit()" class="btn btn-primary">Add Unit</button>
      <button type="btn btn-primary">
        <router-link to="/mainPage">return to Main Page</router-link>
      </button>
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
          this.trainingUnit.id = response.data.id;
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