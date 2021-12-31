<template>
 <div class="pageContainer">
   <create-account></create-account>
   <Footer></Footer>
 </div>
</template>

<script>
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/Footer";
export default {
  name: "CreateAccountPage",
  components: {Footer, CreateAccount}
}
</script>

<style scoped>

</style>