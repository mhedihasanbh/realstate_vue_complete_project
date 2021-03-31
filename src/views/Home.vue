<template>
  <div class="home">
      <Slider/>
      <HomeImageGellery/>
      <CurrentProject/>
      <TestimonialSlider/>

  </div>
</template>

<script>

import Slider from "../components/home/HomeSlider";
import HomeImageGellery from "../components/home/HomeImageGellery";
import CurrentProject from "../components/home/CurrentProject";
import TestimonialSlider from "../components/home/TestimonialSlider";

export default {
  name: 'Home',
  components: {Slider,HomeImageGellery,CurrentProject,TestimonialSlider}
}
</script>
