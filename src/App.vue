<template>

<Navbar :cart="cart" />

  <HeroSection />

  <CollectionSection :addToCart="addToCart" />


  <StorySection />

  <IngredientsSection />

  <Testimonials />


  <FooterSection />

</template>
<script setup>

import {
  ref,
  watch,
  onMounted
} from 'vue'

import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import CollectionSection from './components/CollectionSection.vue'
import StorySection from './components/StorySection.vue'
import IngredientsSection from './components/IngredientsSection.vue'
import Testimonials from './components/Testimonials.vue'
import FooterSection from './components/FooterSection.vue'

const cart = ref([])
onMounted(() => {

  const savedCart = localStorage.getItem('cart')

  if(savedCart){

    cart.value = JSON.parse(savedCart)

  }

})

const addToCart = (product) => {

  cart.value.push(product)

}
watch(cart, () => {

  localStorage.setItem(
    'cart',
    JSON.stringify(cart.value)
  )

}, { deep:true })

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