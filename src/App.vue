<template>
  <AgeGate v-if="!ageConfirmed" @confirmed="ageConfirmed = true" />

  <template v-else>
    <Navbar
      :cart="cart"
      @remove-from-cart="removeFromCart"
      @clear-cart="clearCart"
    />
    <HeroSection />
    <CollectionSection @add-to-cart="addToCart" />
    <StorySection />
    <IngredientsSection />
    <Testimonials />
    <FooterSection />
  </template>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { Product } from './data/products'

import AgeGate from './components/AgeGate.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import CollectionSection from './components/CollectionSection.vue'
import StorySection from './components/StorySection.vue'
import IngredientsSection from './components/IngredientsSection.vue'
import Testimonials from './components/Testimonials.vue'
import FooterSection from './components/FooterSection.vue'

export interface CartItem extends Product {
  qty: number
}

/* ── Age gate ── */
const ageConfirmed = ref(false)
onMounted(() => {
  ageConfirmed.value = localStorage.getItem('age_confirmed') === 'true'
})
watch(ageConfirmed, (v) => {
  if (v) localStorage.setItem('age_confirmed', 'true')
})

/* ── Cart ── */
const cart = ref<CartItem[]>([])

onMounted(() => {
  const saved = localStorage.getItem('cart')
  if (saved) cart.value = JSON.parse(saved)
})

watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}, { deep: true })

function addToCart(product: Product) {
  const existing = cart.value.find((i) => i.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    cart.value.push({ ...product, qty: 1 })
  }
}

function removeFromCart(id: number) {
  const idx = cart.value.findIndex((i) => i.id === id)
  if (idx !== -1) cart.value.splice(idx, 1)
}

function clearCart() {
  cart.value = []
}
</script>

<style>
body {
  margin: 0;
  background: #050505;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
</style>
