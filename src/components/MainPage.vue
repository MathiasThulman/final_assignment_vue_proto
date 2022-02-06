<template>
  <div class="pageContainer" id="mainPageContainer">
    <Header></Header>
    <div class="mainPageDiv">

      <AddTraining></AddTraining>

      <TrainingView></TrainingView>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TrainingView from "@/components/TrainingView";
import AddTraining from "./AddTraining";
import Footer from "./Footer";
export default {
  name: "MainPage",
  components: {Footer, AddTraining, TrainingView, Header}
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