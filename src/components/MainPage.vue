<template>
  <div class="pageContainer" id="maingPageContainer">
    <Header></Header>
    <TraingView></TraingView>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TraingView from "@/components/TrainigView";
export default {
  name: "MainPage",
  components: {TraingView, Footer, Header}
}
</script>

<style scoped>

</style>