<template>
  <div class="pageContainer">
    <Header></Header>
    <Add-training></Add-training>
    <Footer></Footer>
  </div>

</template>

<script>
import AddTraining from "@/components/AddTraining";
import Footer from "@/components/Footer";
import Header from "./Header";
export default {
  name: "AddTrainingPage",
  components: {Header, Footer, AddTraining}
}
</script>

<style scoped>

</style>