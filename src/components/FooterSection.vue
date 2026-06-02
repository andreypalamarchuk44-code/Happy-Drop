<template>
  <footer id="footer" class="footer">

    <div class="footer-top">

      <div class="footer-brand">
        <a href="#" class="logo">HAPPY<span>DROP</span></a>
        <p>Авторські настоянки ручної роботи з атмосферою справжнього premium experience.</p>
      </div>

      <div class="footer-links">

        <div class="column">
          <span class="title">Навігація</span>
          <a href="#" @click.prevent="scrollTo('top')">Головна</a>
          <a href="#collection" @click.prevent="scrollTo('collection')">Колекція</a>
          <a href="#history" @click.prevent="scrollTo('history')">Історія</a>
          <a href="#footer" @click.prevent="scrollTo('footer')">Контакти</a>
        </div>

        <div class="column">
          <span class="title">Соцмережі</span>
          <a href="https://www.instagram.com/happydrop_store/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://t.me/HappyDrop_Store" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>

        <div class="column">
          <span class="title">Контакти</span>
          <a href="mailto:andreypalamarchuk44@gmail.com">andreypalamarchuk44@gmail.com</a>
          <a href="tel:+380000000000">0939430016</a>
          <span class="address">Україна, Ладижин</span>
        </div>

      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 HAPPYDROP. All rights reserved.</p>
      <span>Crafted with premium taste.</span>
    </div>

    <div class="footer-bg">HAPPYDROP</div>

  </footer>
</template>

<script setup lang="ts">
import { useScrollTo } from '../composables/useScrollTo'
const { scrollTo } = useScrollTo()
</script>

<style scoped>
.footer {
  position: relative;
  padding: 8rem 8% 3rem;
  background: var(--bg);
  overflow: hidden;
  border-top: 1px solid var(--border);
}
.footer-top {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.footer-brand { max-width: 420px; }
.logo {
  display: inline-block;
  color: rgba(255,255,255,0.85);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: .22em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-decoration: none;
}
.logo span { color: #d6a55c; }
.footer-brand p {
  color: rgba(255,255,255,0.45);
  line-height: 1.9;
}
.footer-links { display: flex; gap: 5rem; }
.column { display: flex; flex-direction: column; gap: 1rem; }
.title {
  color: #d6a55c;
  font-size: .75rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.column a, .address {
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color .3s, transform .3s;
  font-size: 14px;
}
.column a:hover { color: white; transform: translateX(4px); }
.footer-bottom {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  color: rgba(255,255,255,0.3);
  font-size: .9rem;
}
.footer-bg {
  position: absolute;
  left: 50%; bottom: -20px;
  transform: translateX(-50%);
  font-size: 10rem;
  font-weight: 900;
  letter-spacing: .25em;
  color: rgba(255,255,255,.02);
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}
@media(max-width:1000px) {
  .footer-top { flex-direction: column; gap: 3rem; }
  .footer-links { flex-wrap: wrap; gap: 3rem; }
  .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
}
@media(max-width:768px) {
  .footer { padding: 5rem 1.5rem 2rem; }
  .footer-links { flex-direction: column; gap: 2.5rem; }
}
</style>
