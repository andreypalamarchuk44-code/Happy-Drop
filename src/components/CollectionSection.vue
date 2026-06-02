<template>
  <section class="collection-section" id="collection">

    <div class="bg-light left"></div>
    <div class="bg-light right"></div>

    <div class="container">

      <div class="section-header">
        <span class="section-tag">PREMIUM COLLECTION</span>
        <h2>Колекція<br />настоянок</h2>
        <p>Авторські смаки з глибоким характером, натуральними інгредієнтами та преміальною атмосферою.</p>
      </div>

      <div class="products-grid">
        <div class="product-card" v-for="item in products" :key="item.id">
          <div class="card-glow"></div>
          <div class="product-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="product-content">
            <div class="top">
              <span class="number">0{{ item.id }}</span>
              <span class="price">{{ item.price }}</span>
            </div>
            <h3>{{ item.name }}</h3>
            <p class="taste">{{ item.taste }}</p>
            <p class="description">{{ item.description }}</p>
            <button @click="handleAddToCart(item)">Купити</button>
          </div>
        </div>
      </div>

    </div>

    <!-- CART TOAST -->
    <transition name="toast">
      <div class="cart-toast" v-if="toastVisible">
        <span class="toast-icon">✓</span> {{ toastProduct }} додано до замовлення!
        <button class="toast-close" @click="toastVisible = false">✕</button>
      </div>
    </transition>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { products } from '../data/products'
import type { Product } from '../data/products'

const emit = defineEmits<{ addToCart: [product: Product] }>()

const toastVisible = ref(false)
const toastProduct = ref('')

function handleAddToCart(item: Product) {
  emit('addToCart', item)
  toastProduct.value = item.name
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 3500)
}
</script>

<style scoped>
.collection-section {
  position: relative;
  padding: 140px 0;
  background: #050505;
  overflow: hidden;
}

.bg-light {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
}
.bg-light.left { top: 0; left: -150px; background: #ff8a00; }
.bg-light.right { bottom: 0; right: -120px; background: #d6a55c; }

.container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: auto;
  padding: 0 80px;
}

.section-header { text-align: center; margin-bottom: 80px; }
.section-tag {
  color: #d6a55c;
  letter-spacing: 2px;
  font-size: 13px;
  display: inline-block;
  margin-bottom: 18px;
}
.section-header h2 {
  color: white;
  font-family: 'Cormorant Garamond', serif;
  font-size: 82px;
  line-height: 0.95;
  margin-bottom: 24px;
}
.section-header p {
  color: rgba(255,255,255,0.68);
  max-width: 700px;
  margin: auto;
  line-height: 1.8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.product-card {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.06);
  transition: 0.5s;
  backdrop-filter: blur(20px);
}
.product-card:hover {
  transform: translateY(-10px);
  border: 1px solid rgba(214,165,92,0.22);
  box-shadow: 0 25px 70px rgba(0,0,0,0.4);
}

.card-glow {
  position: absolute;
  width: 320px; height: 320px;
  top: -120px; right: -120px;
  background: radial-gradient(circle, rgba(255,140,0,0.22), transparent 70%);
  filter: blur(40px);
  opacity: 0;
  transition: 0.5s;
}
.product-card:hover .card-glow { opacity: 1; }

.product-image { overflow: hidden; height: 400px; }
.product-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: 0.6s;
}
.product-card:hover img { transform: scale(1.08); }

.product-content { padding: 32px; }
.top { display: flex; justify-content: space-between; margin-bottom: 18px; }
.number { color: #d6a55c; letter-spacing: 2px; font-size: 13px; }
.price { color: white; font-weight: 600; }

.product-content h3 {
  color: white;
  font-size: 36px;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 14px;
}
.taste { color: #d6a55c; margin-bottom: 18px; font-size: 15px; }
.description { color: rgba(255,255,255,0.68); line-height: 1.8; margin-bottom: 28px; }

button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  background: linear-gradient(135deg, #f5c27a, #d6a55c);
  color: black;
  font-weight: 600;
  transition: 0.4s;
}
button:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(214,165,92,0.28);
}

/* TOAST */
.cart-toast {
  position: fixed;
  bottom: 32px; right: 32px;
  z-index: 9999;
  background: linear-gradient(135deg, #f5c27a, #d6a55c);
  color: #111;
  padding: 16px 22px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 20px 60px rgba(214,165,92,0.35);
  display: flex;
  align-items: center;
  gap: 10px;
}
.toast-icon { font-size: 16px; }
.toast-close {
  width: auto;
  padding: 0 6px;
  background: none;
  border: none;
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;
  box-shadow: none;
  transform: none !important;
}
.toast-enter-active, .toast-leave-active { transition: all 0.4s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(20px); }

@media (max-width: 1100px) {
  .products-grid { grid-template-columns: 1fr 1fr; }
  .section-header h2 { font-size: 60px; }
}
@media (max-width: 768px) {
  .container { padding: 0 24px; }
  .products-grid { grid-template-columns: 1fr; }
  .section-header h2 { font-size: 42px; }
}
</style>
