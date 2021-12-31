<template>
 <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return{
      trainingUnits: []
    }
  },
  created() {
    this.trainingUnits = [
      {
        date: "2-1-2020",
        duration: 60,
        trainedMuscles: ["Biceps" ,"Back"],
        weight: 80,
        comments: "nice"
      },
      {
        date: "3-1-2020",
        duration: 50,
        trainedMuscles: ["Triceps" ,"Chest", "Correctives"],
        weight: 80,
        comments: "nice"
      },
      {
        date: "4-1-2020",
        duration: 75,
        trainedMuscles: ["Legs" ,"Shoulder", "Abs"],
        weight: 80,
        comments: "nice"
      }
    ]
  }
}
</script>

<style>
.pageContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.formContainer {
  margin: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 10px 10px;
  border-color: black;
  border-style: groove;
  background-color: slategrey;
}

.formInput {
  margin: 20px
}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px;

}

.formWrapper {
  display: flex;
  justify-content: center;
}

.likeabutton {
  text-decoration: none; font: menu;
  display: inline-block; padding: 2px 8px;
  background: ButtonFace; color: ButtonText;
  border-style: solid; border-width: 2px;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
  border-radius: 5px 5px 5px 5px;
}
.likeabutton:active {
  border-color: ButtonShadow ButtonHighlight ButtonHighlight ButtonShadow;
}

body {
  background-image: url("./img/jelmer-assink-gzeTjGu3b_k-unsplash.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
