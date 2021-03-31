<template>
  <div id="app">
     <Navbar/>
    <router-view/>
      <MainFooter/>
      <Footer/>
  </div>
</template>
<script>
  import Navbar from "./components/Navbar";
  import MainFooter from "./components/MainFooter";
  import Footer from "./components/Footer";
export default {
  name:'App',
  components:{Navbar,MainFooter,Footer}
}
</script>

<style>


</style>
