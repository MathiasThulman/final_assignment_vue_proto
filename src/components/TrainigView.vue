<template>
  <div id="viewWrapper">
    <div id="trainingViewContainer">
      <div id="navigationButtons">
        <a class="trainingViewButton" id="addTrainingButton">
          <router-link to="/addTrainingPage">Add Training Unit</router-link>
        </a>
        <button class="trainingViewButton">Remove Training</button>
        <select class="trainingViewButton">
          <option>biceps</option>
          <option>triceps</option>
          <option>legs</option>
          <option>back</option>
          <option>shoulders</option>
          <option>abs</option>
          <option>cardio</option>
        </select>
      </div>

      <table>
        <tr>this is a placeholer for later table</tr>
      </table>
  </div>

<!--    <ul :key="unit.id" v-for="unit in trainingUnits">-->
<!--      <li>{{unit.duration}}</li>-->
<!--    </ul>-->

  </div>

</template>

<script>
export default {
  name: "TraingView",
  props: {
    trainingUnits: Array,
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