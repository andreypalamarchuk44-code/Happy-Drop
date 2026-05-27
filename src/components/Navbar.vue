<template>
  <header class="navbar">

    <div class="nav-container">

      <!-- LOGO -->
      <div class="logo">
        HAPPY<span>DROP</span>
      </div>

      <!-- NAVIGATION -->
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

    </div>

  </header>
</template>

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

.nav-btn {
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

.nav-btn:hover {
  transform: translateY(-3px);

  box-shadow:
    0 18px 40px rgba(214,165,92,0.35);
}

@media (max-width: 992px) {

  .nav-links {
    display: none;
  }

  .nav-container {
    padding: 0 24px;
  }

  .logo {
    font-size: 28px;
  }

  .nav-btn {
    padding: 12px 20px;
  }
}

</style>