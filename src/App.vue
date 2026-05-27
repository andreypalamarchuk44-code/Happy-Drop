<template>

  <Navbar />

  <HeroSection />

  <CollectionSection />


  <StorySection />

  <IngredientsSection />

  <Testimonials />

  <CTASection />

  <FooterSection />

</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import CollectionSection from './components/CollectionSection.vue'
import StorySection from './components/StorySection.vue'
import IngredientsSection from './components/IngredientsSection.vue'
import Testimonials from './components/Testimonials.vue'
import CTASection from './components/CTASection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
<style>

body {
  margin: 0;

  background: #050505;

  font-family: 'Inter', sans-serif;

  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

</style>