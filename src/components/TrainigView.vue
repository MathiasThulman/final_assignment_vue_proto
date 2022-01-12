<template>
  <div id="viewWrapper">
    <div id="trainingViewContainer">
      <div id="navigationButtons">
        <a class="trainingViewButton" id="addTrainingButton">
          <router-link to="/addTrainingPage">Add Training Unit</router-link>
          <select class="trainingViewButton">
            <option>biceps</option>
            <option>triceps</option>
            <option>legs</option>
            <option>back</option>
            <option>shoulders</option>
            <option>abs</option>
            <option>cardio</option>
          </select>

          <input type="text" placeholder="search by muscle" v-model="muscle"/>
          <button type="button" @click="searchByMuscle">search by muscle</button>

          <input type="text" placeholder="search by date" v-model="date"/>
          <button type="button" @click="searchByDate">search by date</button>
        </a>
        <button class="trainingViewButton">Remove Training</button>
      </div>
      <div id="list col">
        <h4>Training Unit List</h4>
        <ul>
          <li class="list-group-items"
              v-for="(trainingUnit, index) in trainingUnits"
              :key="index"
          > {{trainingUnit.text}}</li>
        </ul>
      </div>

  </div>



  </div>

</template>

<script>
import TrainingUnitDataService from "../services/TrainingUnitDataService";

export default {
  name: "TraingView",

  data() {
    return {
      trainingUnits: [],
      currentIndex: -1,
      muscle: "",
      date: "",
    };
  },

  methods: {
    retrieveTrainingUnits() {
      TrainingUnitDataService.getAll()
        .then(response => {
          this.trainingUnits = response.data;
          console.log(response.data) //for debugging
        })
      .catch(e => {
        console.log(e)
      });
    },

    searchByMuscle() {
      TrainingUnitDataService.findByMuscle(this.muscle)
        .then(response => {
          this.trainingUnits = response.data;
          console.log(response.data) //for debugging
        })
      .catch(e => {
        console.log(e)
      });
    },

    searchByDate() {
      TrainingUnitDataService.findByDate(this.date)
          .then(response => {
            this.trainingUnits = response.data;
            console.log(response.data) //for debugging
          })
          .catch(e => {
            console.log(e)
          });
    },

    mounted() {
      this.retrieveTrainingUnits()
    }
  }
}
</script>

<style scoped>

#trainingViewContainer {
  display: flex;
  color: white;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border-radius: 10px 10px 10px 10px;
  border-style: outset;
  border-color: black;
  padding: 40px;
  background-color: gray;
}

#navigationButtons {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
}

.trainingViewButton {
  margin-left: 30px;

}

#viewWrapper {
  display: flex;
  justify-content: center;

}

#addTrainingButton {
  text-decoration: none; font: menu;
  display: inline-block; padding: 2px 8px;
  background: ButtonFace; color: ButtonText;
  border-style: solid; border-width: 2px;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
  border-radius: 5px 5px 5px 5px;
}
</style>