<template>
  <header class="navbar">
    <div class="nav-container">

      <!-- LOGO -->
      <div class="logo" @click="scrollTo('top')">
        HAPPY<span>DROP</span>
      </div>

      <!-- DESKTOP NAV -->
      <nav class="nav-links">
        <a href="#" @click.prevent="scrollTo('top')">Головна</a>
        <a href="#collection" @click.prevent="scrollTo('collection')">Колекція</a>
        <a href="#history" @click.prevent="scrollTo('history')">Історія</a>
        <a href="#testimonials" @click.prevent="scrollTo('testimonials')">Відгуки</a>
        <a href="#footer" @click.prevent="scrollTo('footer')">Контакти</a>
      </nav>

      <!-- CART BUTTON (desktop) -->
      <button class="cart-btn" @click="cartOpen = !cartOpen" aria-label="Кошик">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <span class="cart-count" v-if="totalQty > 0">{{ totalQty }}</span>
      </button>

      <!-- BURGER -->
      <div class="burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <transition name="menu">
      <div class="mobile-menu" v-if="menuOpen">
        <a href="#" @click.prevent="scrollTo('top')">Головна</a>
        <a href="#collection" @click.prevent="scrollTo('collection')">Колекція</a>
        <a href="#history" @click.prevent="scrollTo('history')">Історія</a>
        <a href="#testimonials" @click.prevent="scrollTo('testimonials')">Відгуки</a>
        <a href="#footer" @click.prevent="scrollTo('footer')">Контакти</a>
        <button class="cart-mobile-btn" @click="cartOpen = !cartOpen; menuOpen = false">
          Кошик
          <span v-if="totalQty > 0" class="mobile-badge">{{ totalQty }}</span>
        </button>
      </div>
    </transition>

    <!-- CART POPUP -->
    <transition name="cart">
      <div class="cart-popup" v-if="cartOpen" v-click-outside="() => cartOpen = false">
        <div class="cart-header">
          <h3>Ваше замовлення</h3>
          <button class="cart-close" @click="cartOpen = false">✕</button>
        </div>

        <div v-if="cart.length === 0" class="cart-empty">
          Кошик порожній
        </div>

        <template v-else>
          <div class="cart-items">
            <div class="cart-item" v-for="item in cart" :key="item.id">
              <img :src="item.image" :alt="item.name" />
              <div class="item-info">
                <h4>{{ item.name }}</h4>
                <p class="item-price">{{ item.price }}</p>
              </div>
              <div class="item-qty">
                <button @click="decreaseQty(item)" class="qty-btn">−</button>
                <span>{{ item.qty }}</span>
                <button @click="increaseQty(item)" class="qty-btn">+</button>
              </div>
              <button class="remove-btn" @click="emit('removeFromCart', item.id)" aria-label="Видалити">✕</button>
            </div>
          </div>

          <div class="cart-footer">
            <div class="cart-total">
              <span>Разом:</span>
              <strong>{{ totalPrice }}₴</strong>
            </div>
            <button class="checkout-btn" @click="checkout">Оформити замовлення</button>
            <button class="clear-btn" @click="emit('clearCart')">Очистити кошик</button>
          </div>
        </template>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollTo } from '../composables/useScrollTo'
import type { CartItem } from '../App.vue'

const props = defineProps<{ cart: CartItem[] }>()
const emit = defineEmits<{
  removeFromCart: [id: number]
  clearCart: []
}>()

const { scrollTo: scrollToBase } = useScrollTo()
const cartOpen = ref(false)
const menuOpen = ref(false)

function scrollTo(id: string) {
  menuOpen.value = false
  scrollToBase(id)
}

const totalQty = computed(() => props.cart.reduce((s, i) => s + i.qty, 0))
const totalPrice = computed(() => props.cart.reduce((s, i) => s + i.priceNum * i.qty, 0))

function increaseQty(item: CartItem) {
  item.qty++
}

function decreaseQty(item: CartItem) {
  if (item.qty > 1) {
    item.qty--
  } else {
    emit('removeFromCart', item.id)
  }
}

function checkout() {
  const lines = props.cart.map(i => `${i.name} x${i.qty} — ${i.priceNum * i.qty}₴`).join('%0A')
  const total = `Разом: ${totalPrice.value}₴`
  window.open(`https://t.me/HappyDrop_Store?text=Замовлення:%0A${lines}%0A${total}`, '_blank')
}

/* v-click-outside directive */
const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    const handler = (e: MouseEvent) => {
      if (!el.contains(e.target as Node)) {
        binding.value()
      }
    }

    el.addEventListener('click', (e) => e.stopPropagation())
    document.addEventListener('click', handler)

    ;(el as any).__handler__ = handler
  },

  unmounted(el: HTMLElement) {
    document.removeEventListener('click', (el as any).__handler__)
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 999;
  padding: 22px 0;
  backdrop-filter: blur(18px);
  background: linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.15));
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.nav-container {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  color: white;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}
.logo span { color: #d6a55c; }

.nav-links { display: flex; gap: 42px; }
.nav-links a {
  position: relative;
  text-decoration: none;
  color: rgba(255,255,255,0.75);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  transition: 0.3s;
}
.nav-links a:hover { color: white; }
.nav-links a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -8px;
  width: 0%; height: 1px;
  background: #d6a55c;
  transition: 0.35s;
}
.nav-links a:hover::after { width: 100%; }

/* Cart button */
.cart-btn {
  position: relative;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 10px 14px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s;
}
.cart-btn:hover {
  border-color: rgba(214,165,92,0.5);
  background: rgba(214,165,92,0.08);
}
.cart-count {
  position: absolute;
  top: -7px; right: -7px;
  width: 20px; height: 20px;
  background: #d6a55c;
  color: #111;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.burger span {
  width: 28px; height: 2px;
  background: white;
  border-radius: 10px;
  transition: 0.3s;
}

/* Mobile menu */
.mobile-menu { display: none; }
.menu-enter-active, .menu-leave-active { transition: 0.35s ease; }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-10px); }

/* Cart popup */
.cart-popup {
  position: absolute;
  top: 90px; right: 80px;
  width: 380px;
  padding: 24px;
  border-radius: 24px;
  background: rgba(10,10,10,0.97);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(24px);
  box-shadow: 0 30px 80px rgba(0,0,0,0.5);
  z-index: 998;
}

.cart-enter-active, .cart-leave-active { transition: 0.3s ease; }
.cart-enter-from, .cart-leave-to { opacity: 0; transform: translateY(-8px); }

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.cart-header h3 { color: white; font-size: 18px; margin: 0; }
.cart-close {
  background: rgba(255,255,255,0.07);
  border: none;
  color: white;
  width: 30px; height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}
.cart-close:hover { background: rgba(255,255,255,0.15); }

.cart-empty {
  color: rgba(255,255,255,0.4);
  text-align: center;
  padding: 32px 0;
  font-size: 15px;
}

.cart-items {
  max-height: 340px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(214,165,92,0.3) transparent;
  margin-bottom: 16px;
}

.cart-item {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.cart-item:last-child { border-bottom: none; }

.cart-item img {
  width: 60px; height: 60px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}

.item-info { flex: 1; min-width: 0; }
.item-info h4 {
  color: white;
  font-size: 14px;
  margin: 0 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-price { color: #d6a55c; font-size: 13px; margin: 0; }

/* Qty controls */
.item-qty {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.item-qty span { color: white; font-size: 14px; min-width: 16px; text-align: center; }
.qty-btn {
  width: 26px; height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  line-height: 1;
}
.qty-btn:hover {
  border-color: #d6a55c;
  color: #d6a55c;
}

.remove-btn {
  width: 28px; height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s;
  flex-shrink: 0;
}
.remove-btn:hover { background: rgba(255,80,80,0.2); color: #ff6060; }

/* Cart footer */
.cart-footer { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 16px; }

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}
.cart-total span { color: rgba(255,255,255,0.6); font-size: 14px; }
.cart-total strong { color: white; font-size: 20px; }

.checkout-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #f5c27a, #d6a55c);
  color: #111;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 8px;
}
.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(214,165,92,0.35);
}

.clear-btn {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  background: transparent;
  color: rgba(255,255,255,0.4);
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
}
.clear-btn:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.25); }

/* Responsive */
@media (max-width: 992px) {
  .nav-container { padding: 0 24px; }
  .nav-links { display: none; }
  .cart-btn { display: none; }
  .burger { display: flex; }
  .logo { font-size: 28px; }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 28px 24px;
    background: rgba(10,10,10,0.98);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .mobile-menu a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
  }

  .cart-mobile-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #f5c27a, #d6a55c);
    border: none;
    border-radius: 14px;
    color: #111;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 20px;
    cursor: pointer;
    width: fit-content;
  }

  .mobile-badge {
    background: #111;
    color: #d6a55c;
    border-radius: 50%;
    width: 22px; height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }

  .cart-popup {
    right: 16px;
    left: 16px;
    width: auto;
    top: 80px;
  }
}

@media (max-width: 576px) {
  .navbar { padding: 18px 0; }
  .nav-container { padding: 0 18px; }
  .logo { font-size: 24px; letter-spacing: 1px; }
  .burger span { width: 24px; }
}
</style>
