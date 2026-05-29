<template>
  <header class="navbar">

    <div class="nav-container">

      <!-- LOGO -->
      <div class="logo">
        HAPPY<span>DROP</span>
      </div>

      <!-- DESKTOP NAV -->
      <nav class="nav-links">

        <a href="#">
          Головна
        </a>

        <a href="#collection">
          Колекція
        </a>

        <a href="#">
          Історія
        </a>

        <a href="#">
          Відгуки
        </a>

        <a href="#">
          Контакти
        </a>

      </nav>

      <!-- CTA -->
      <button class="nav-btn">
        Замовити
      </button>

      <!-- BURGER -->
      <div
        class="burger"
        @click="menuOpen = !menuOpen"
      >

        <span></span>
        <span></span>
        <span></span>

      </div>

    </div>

    <!-- MOBILE MENU -->
    <transition name="menu">

      <div
        class="mobile-menu"
        v-if="menuOpen"
      >

        <a href="#">
          Головна
        </a>

        <a href="#collection">
          Колекція
        </a>

        <a href="#">
          Історія
        </a>

        <a href="#">
          Відгуки
        </a>

        <a href="#">
          Контакти
        </a>

        <button class="mobile-btn">
          Замовити
        </button>

      </div>

    </transition>

  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 999;

  padding: 22px 0;

  backdrop-filter: blur(18px);

  background:
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.15)
    );

  border-bottom:
    1px solid rgba(255,255,255,0.05);
}

.nav-container {
  width: 100%;
  max-width: 1400px;

  margin: auto;

  padding: 0 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Cormorant Garamond', serif;

  font-size: 34px;

  color: white;

  letter-spacing: 2px;

  font-weight: 600;

  cursor: pointer;
}

.logo span {
  color: #d6a55c;
}

/* DESKTOP NAV */

.nav-links {
  display: flex;
  gap: 42px;
}

.nav-links a {
  position: relative;

  text-decoration: none;

  color: rgba(255,255,255,0.75);

  font-family: 'Inter', sans-serif;

  font-size: 15px;

  transition: 0.3s;
}

.nav-links a:hover {
  color: white;
}

.nav-links a::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: -8px;

  width: 0%;
  height: 1px;

  background: #d6a55c;

  transition: 0.35s;
}

.nav-links a:hover::after {
  width: 100%;
}

/* BUTTON */

.nav-btn,
.mobile-btn {
  background:
    linear-gradient(
      135deg,
      #f5c27a,
      #d6a55c
    );

  color: black;

  border: none;

  padding: 14px 28px;

  border-radius: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.4s;

  box-shadow:
    0 10px 30px rgba(214,165,92,0.18);
}

.nav-btn:hover,
.mobile-btn:hover {
  transform: translateY(-3px);

  box-shadow:
    0 18px 40px rgba(214,165,92,0.35);
}

/* BURGER */

.burger {
  display: none;

  flex-direction: column;

  gap: 5px;

  cursor: pointer;
}

.burger span {
  width: 28px;
  height: 2px;

  background: white;

  border-radius: 10px;

  transition: 0.3s;
}

/* MOBILE MENU */

.mobile-menu {
  display: none;
}

/* ANIMATION */

.menu-enter-active,
.menu-leave-active {
  transition: 0.35s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ========================= */
/* TABLET */
/* ========================= */

@media (max-width: 992px) {

  .nav-container {
    padding: 0 24px;
  }

  .nav-links,
  .nav-btn {
    display: none;
  }

  .burger {
    display: flex;
  }

  .logo {
    font-size: 28px;
  }

  .mobile-menu {
    display: flex;

    flex-direction: column;

    gap: 24px;

    padding: 30px 24px;

    background: rgba(10,10,10,0.98);

    backdrop-filter: blur(20px);

    border-top:
      1px solid rgba(255,255,255,0.06);
  }

  .mobile-menu a {
    text-decoration: none;

    color: white;

    font-size: 18px;

    font-family: 'Inter', sans-serif;
  }

  .mobile-btn {
    width: 100%;
  }
}

/* ========================= */
/* MOBILE */
/* ========================= */

@media (max-width: 576px) {

  .navbar {
    padding: 18px 0;
  }

  .nav-container {
    padding: 0 18px;
  }

  .logo {
    font-size: 24px;

    letter-spacing: 1px;
  }

  .burger span {
    width: 24px;
  }

  .mobile-menu {
    gap: 20px;

    padding: 24px 18px;
  }

  .mobile-menu a {
    font-size: 16px;
  }

  .mobile-btn {
    padding: 12px;
  }
}

</style>