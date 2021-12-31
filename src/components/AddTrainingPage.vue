<template>
  <div class="pageContainer">
    <Add-training></Add-training>
    <Footer></Footer>
  </div>

</template>

<script>
import AddTraining from "@/components/AddTraining";
import Footer from "@/components/Footer";
export default {
  name: "AddTrainingPage",
  components: {Footer, AddTraining}
}
</script>

<style scoped>

</style>