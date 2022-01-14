<template>
  <div class="pageContainer" id="mainPageContainer">
    <Header></Header>
    <div class="mainPageDiv">
      <AddTraining></AddTraining>
      <TrainingView></TrainingView>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingView from "@/components/TrainingView";
import AddTraining from "./AddTraining";
export default {
  name: "MainPage",
  components: {AddTraining, TrainingView, Footer, Header}
}
</script>

<style scoped>

.mainPageDiv{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
</style>