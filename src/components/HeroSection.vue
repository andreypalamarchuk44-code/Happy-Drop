<template>
  <section class="hero" id="hero">

    <div class="hero-overlay"></div>
    <div class="hero-noise"></div>
    <div class="hero-light light-1"></div>
    <div class="hero-light light-2"></div>

    <div class="hero-container">

      <div class="hero-left">
        <p class="hero-label">PREMIUM UKRAINIAN TINCTURE</p>

        <h1>
          Насолоджуйся<br>
          з натуральним<br>
          алкоголем
        </h1>

        <p class="hero-text">
          Авторські настоянки ручної роботи
          з натуральних інгредієнтів та
          атмосферою справжнього premium experience.
        </p>

        <div class="hero-buttons">
          <button class="hero-btn primary" @click="scrollTo('collection')">
            Відкрити колекцію
          </button>
        </div>
      </div>

      <div class="hero-right">
        <div class="bottle-glow"></div>
        <img src="/img/allbottle.jpg" alt="Happy Drop настоянки" class="hero-bottle" />
      </div>

    </div>

    <div class="hero-bg-text">HappyDrop</div>

  </section>
</template>

<script setup lang="ts">
import { useScrollTo } from '../composables/useScrollTo'
const { scrollTo } = useScrollTo()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 8%;
  background: linear-gradient(to bottom, #050607, #090a0c);
}
.hero-container {
  position: relative;
  z-index: 5;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
}
.hero-left { max-width: 700px; }
.hero-label {
  color: #d6a55c;
  font-size: .72rem;
  letter-spacing: .38em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.hero h1 {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 7.5rem);
  line-height: .88;
  font-weight: 600;
  margin-bottom: 2rem;
  color: white;
}
.hero-text {
  max-width: 540px;
  color: rgba(255,255,255,0.65);
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 3rem;
}
.hero-buttons { display: flex; gap: 1rem; }
.hero-btn {
  height: 58px;
  padding: 0 2rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  transition: transform .5s, box-shadow .5s, background .5s;
}
.hero-btn:hover { transform: translateY(-3px); }
.primary {
  background: #d6a55c;
  color: #111;
  box-shadow: 0 0 40px rgba(214,165,92,.25);
}
.primary:hover {
  background: #f5c27a;
  box-shadow: 0 0 70px rgba(214,165,92,.45);
}
.hero-right {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-bottle {
  position: relative;
  z-index: 5;
  border-radius: 50px;
  width: 580px;
  filter: drop-shadow(0 0 60px rgba(200,169,107,.18));
  animation: float 6s ease-in-out infinite;
}
.bottle-glow {
  position: absolute;
  width: 450px; height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200,169,107,.22), transparent 70%);
  filter: blur(70px);
}
.hero-light {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}
.light-1 { width: 500px; height: 500px; background: rgba(200,169,107,.08); top: -200px; left: -150px; }
.light-2 { width: 600px; height: 600px; background: rgba(46,184,122,.06); right: -250px; bottom: -250px; }
.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent, rgba(0,0,0,.45));
}
.hero-noise {
  position: absolute;
  inset: 0;
  opacity: .035;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
}
.hero-bg-text {
  position: absolute;
  bottom: -20px; left: 50%;
  transform: translateX(-50%);
  font-size: 12rem;
  font-weight: 900;
  letter-spacing: .25em;
  color: rgba(255,255,255,.02);
  user-select: none;
  white-space: nowrap;
}
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0); }
}
@media(max-width:1200px) { .hero { padding: 0 5%; } .hero h1 { font-size: 5rem; } .hero-bottle { width: 420px; } }
@media(max-width:1100px) {
  .hero { padding-top: 10rem; padding-bottom: 6rem; min-height: auto; }
  .hero-container { grid-template-columns: 1fr; text-align: center; }
  .hero-left { margin: auto; margin-bottom: 3rem; }
  .hero-text { margin-inline: auto; }
  .hero-buttons { justify-content: center; }
  .hero h1 { font-size: 4.5rem; }
  .hero-bottle { width: 340px; }
}
@media(max-width:768px) {
  .hero { padding: 8rem 1.5rem 4rem; }
  .hero h1 { font-size: 3.2rem; line-height: 1; }
  .hero-text { font-size: .95rem; margin-bottom: 2rem; }
  .hero-btn { width: 100%; max-width: 320px; height: 54px; }
  .hero-bottle { width: 280px; border-radius: 35px; }
}
@media(max-width:480px) {
  .hero h1 { font-size: 2.5rem; }
  .hero-bottle { width: 220px; border-radius: 28px; }
}
</style>
