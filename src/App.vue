<template>
 <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  }

}
</script>

<style>
.pageContainer {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/


}

.formContainer {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*border-radius: 10px 10px 10px 10px;*/
  border-color: black;
  border-style: outset;
  background-color: white;
}

.formInput {
  margin: 10px
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
  height: 100%;
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
