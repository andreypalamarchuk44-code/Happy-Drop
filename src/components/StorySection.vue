<template>
  <section class="story-section">
    <div class="container" id="history">

      <!-- LEFT BIG CARD -->
      <div class="story-card big-card">
        <div class="image-overlay"></div>
        <img src="/img/mainbottle.jpg" alt="Happy Drop — наша історія" />
        <div class="card-content">
          <span class="section-tag">НАША ІСТОРІЯ</span>
          <h2>
            Народжено<br />
            для справжнього<br />
            смаку
          </h2>
          <p>Кожен напій створений з увагою до деталей, атмосфери та характеру.</p>
          <button @click="scrollTo('collection')">Переглянути колекцію</button>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="right-grid">

        <div class="features-card">
          <div class="feature">
            <span>✦</span>
            <div>
              <h4>100% Натурально</h4>
              <p>Тільки преміальні інгредієнти</p>
            </div>
          </div>
          <div class="feature">
            <span>✦</span>
            <div>
              <h4>Авторські рецепти</h4>
              <p>Унікальні поєднання смаків</p>
            </div>
          </div>
          <div class="feature">
            <span>✦</span>
            <div>
              <h4>Преміальна витримка</h4>
              <p>Глибокий насичений смак</p>
            </div>
          </div>
        </div>

        <div class="atmosphere-card">
          <div class="gradient"></div>
          <img src="/img/tincture.jpg" alt="Атмосфера Happy Drop" />
          <div class="atmosphere-content">
            <h3>Смак,<br />який хочеться<br />запам'ятати</h3>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollTo } from '../composables/useScrollTo'
const { scrollTo } = useScrollTo()
</script>

<style scoped>
.story-section {
  position: relative;
  background: #050505;
  padding: 120px 0;
  overflow: hidden;
}
.container {
  max-width: 1400px;
  margin: auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 28px;
}
.story-card {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  min-height: 650px;
  background: #111;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 20px 80px rgba(0,0,0,0.45);
}
.story-card img {
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
}
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.25));
  z-index: 1;
}
.card-content {
  position: relative;
  z-index: 2;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}
.section-tag {
  color: #d6a55c;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 18px;
  display: inline-block;
}
h2 {
  font-family: 'Cormorant Garamond', serif;
  color: white;
  font-size: 68px;
  line-height: 0.95;
  margin-bottom: 24px;
}
.card-content p {
  color: rgba(255,255,255,0.7);
  font-size: 18px;
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 34px;
}
button {
  width: fit-content;
  background: linear-gradient(135deg, #f5c27a, #d6a55c);
  color: black;
  border: none;
  padding: 16px 28px;
  border-radius: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s;
}
button:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(214,165,92,0.3);
}
.right-grid { display: flex; flex-direction: column; gap: 28px; }
.features-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 28px;
  padding: 42px;
  backdrop-filter: blur(20px);
}
.feature { display: flex; gap: 20px; margin-bottom: 34px; }
.feature:last-child { margin-bottom: 0; }
.feature span { color: #d6a55c; font-size: 24px; }
.feature h4 { color: white; margin-bottom: 8px; font-size: 20px; }
.feature p { color: rgba(255,255,255,0.65); line-height: 1.6; }
.atmosphere-card {
  position: relative;
  flex: 1;
  min-height: 320px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,0.06);
}
.atmosphere-card img {
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
}
.gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2));
  z-index: 1;
}
.atmosphere-content {
  position: relative;
  z-index: 2;
  padding: 42px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
h3 {
  color: white;
  font-family: 'Cormorant Garamond', serif;
  font-size: 54px;
  line-height: 1;
}
@media (max-width:1100px) {
  .container { grid-template-columns: 1fr; }
  h2 { font-size: 52px; }
  h3 { font-size: 42px; }
}
@media (max-width:768px) {
  .container { padding: 0 24px; }
  .story-card { min-height: 520px; }
  .card-content { padding: 36px; }
  h2 { font-size: 42px; }
  h3 { font-size: 34px; }
  .features-card { padding: 28px; }
}
</style>
