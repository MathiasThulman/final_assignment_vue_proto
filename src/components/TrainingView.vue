<template>
  <div id="viewWrapper">
    <div id="trainingViewContainer">
      <div id="navigationButtons">
        <a class="trainingViewButton" id="addTrainingButton">
          <router-link to="/addTrainingPage">Add Training Unit</router-link>
        </a>
        <input type="text" placeholder="search by muscle" class="form-control" v-model="muscle"/>

        <input type="date" placeholder="search by date" class="form-control" v-model="date"/>

        <button type="button" @click="retrieveTrainingUnits()" class="btn btn-primary">update list</button>

        <button class="btn btn-danger" @click="deleteAll">Delete All</button>
      </div>
      <div id="list col">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">duration</th>
            <th scope="col">trained muscles</th>
            <th scope="col">weight</th>
          </tr>
          </thead>
          <tbody>
          <tr class="list-group-items"
              v-for="(trainingUnit) in trainingUnits"
              :key="trainingUnit.id">
            <td>{{ trainingUnit.date }}</td>
            <td>{{ trainingUnit.duration }}</td>
            <td>{{ trainingUnit.trainedMuscles }}</td>
            <td>{{ trainingUnit.weight }}</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>


  </div>

</template>

<script>
import TrainingUnitDataService from "../services/TrainingUnitDataService";

export default {
  name: "TrainingView",

  data() {
    return {
      trainingUnits: [],
      muscle: "",
      date: "",
    };
  },

  methods: {
    retrieveTrainingUnits() {
      TrainingUnitDataService.getAll()
          .then(response => {
            this.trainingUnits = response.data;
            if (this.muscle === "") {
              this.trainingUnits = this.filterByMuscle()
            }
            console.log(response.data) //for debugging
          })
          .catch(e => {
            console.log(e)
          });
    },

    beforeMount() {
      this.retrieveTrainingUnits()
    },

    deleteTrainingUnit(id) {
      TrainingUnitDataService.delete(id)
    },

    filterByMuscle() {
      return this.data.trainingUnits.filter(function (e) {
        return e.trainingUnits.contains(this.data.muscle)
      });
  },

    deleteAll() {
      if(confirm("are you sure about that?")){
        TrainingUnitDataService.deleteAll()
      }

    }
  // searchByMuscle() {
  //   TrainingUnitDataService.findByMuscle(this.muscle)
  //     .then(response => {
  //       this.trainingUnits = response.data;
  //       console.log(response.data) //for debugging
  //     })
  //   .catch(e => {
  //     console.log(e)
  //   });
  // },

  // searchByDate() {
  //   TrainingUnitDataService.findByDate(this.date)
  //       .then(response => {
  //         this.trainingUnits = response.data;
  //         console.log(response.data) //for debugging
  //       })
  //       .catch(e => {
  //         console.log(e)
  //       });
  // },


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
  text-decoration: none;
  font: menu;
  display: inline-block;
  padding: 2px 8px;
  background: ButtonFace;
  color: ButtonText;
  border-style: solid;
  border-width: 2px;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
  border-radius: 5px 5px 5px 5px;
}
</style>