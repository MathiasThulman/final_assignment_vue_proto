
<template>
  <div class="pageContainer">
    <Header></Header>
    <Login msg="login"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "HomePage",
  components: {
    Login,
    Header,
    Footer
  },
}
</script>

<style scoped>

</style>