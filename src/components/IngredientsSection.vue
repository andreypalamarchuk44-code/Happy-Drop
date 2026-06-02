<template>
  <section class="ingredients-section">

    <div class="bg-glow left"></div>
    <div class="bg-glow right"></div>

    <div class="container">

      <div class="section-header">
        <span class="section-tag">СКЛАД ТА ІНГРЕДІЄНТИ</span>
        <h2>Авторські<br />рецептури</h2>
        <p>
          Ми створюємо настоянки з натуральних ягід,
          добірних трав та витриманих інгредієнтів
          для глибокого й насиченого смаку.
        </p>
      </div>

      <div class="ingredients-grid">

        <div class="ingredient-card">
          <div class="card-glow"></div>
          <img src="/img/wasp.jpg" alt="Натуральний мед" />
          <div class="card-content">
            <span>01</span>
            <h3>Натуральний мед</h3>
            <p>М'який солодкий аромат, що надає настоянці теплоти й характеру.</p>
          </div>
        </div>

        <div class="ingredient-card">
          <div class="card-glow"></div>
          <img src="/img/bottleberry.jpeg" alt="Свіжі ягоди" />
          <div class="card-content">
            <span>02</span>
            <h3>Свіжі ягоди</h3>
            <p>Вишня, чорниця, ожина — ручної збірки, без консервантів та барвників.</p>
          </div>
        </div>

        <div class="ingredient-card">
          <div class="card-glow"></div>
          <img src="/img/cinnamonsticks.jpeg" alt="Спеції та трави" />
          <div class="card-content">
            <span>03</span>
            <h3>Спеції та трави</h3>
            <p>Кориця, ваніль, м'ята — витримані рецепти з глибоким насиченим смаком.</p>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.ingredients-section {
  position: relative;
  padding: 140px 0;
  background: #050505;
  overflow: hidden;
}
.bg-glow {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.18;
}
.bg-glow.left { top: 0; left: -120px; background: #ff7b00; }
.bg-glow.right { bottom: -100px; right: -120px; background: #d6a55c; }
.container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: auto;
  padding: 0 80px;
}
.section-header { text-align: center; margin-bottom: 80px; }
.section-tag {
  display: inline-block;
  color: #d6a55c;
  letter-spacing: 2px;
  font-size: 13px;
  margin-bottom: 20px;
}
.section-header h2 {
  font-family: 'Cormorant Garamond', serif;
  color: white;
  font-size: 82px;
  line-height: 0.95;
  margin-bottom: 24px;
}
.section-header p {
  color: rgba(255,255,255,0.68);
  max-width: 700px;
  margin: auto;
  line-height: 1.8;
  font-size: 18px;
}
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.ingredient-card {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  min-height: 520px;
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.06);
  transition: 0.5s ease;
  backdrop-filter: blur(20px);
}
.ingredient-card:hover {
  transform: translateY(-10px) scale(1.02);
  border: 1px solid rgba(214,165,92,0.25);
  box-shadow: 0 30px 80px rgba(0,0,0,0.45);
}
.card-glow {
  position: absolute;
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(255,140,0,0.22), transparent 70%);
  top: -100px; right: -100px;
  filter: blur(40px);
  opacity: 0;
  transition: 0.5s;
}
.ingredient-card:hover .card-glow { opacity: 1; }
.ingredient-card img {
  width: 100%; height: 320px;
  object-fit: cover;
  transition: 0.5s;
}
.ingredient-card:hover img { transform: scale(1.06); }
.card-content { padding: 34px; }
.card-content span {
  display: inline-block;
  color: #d6a55c;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 18px;
}
.card-content h3 {
  color: white;
  font-size: 34px;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 18px;
}
.card-content p { color: rgba(255,255,255,0.68); line-height: 1.8; font-size: 16px; }
@media (max-width:1100px) {
  .ingredients-grid { grid-template-columns: 1fr; }
  .section-header h2 { font-size: 60px; }
}
@media (max-width:768px) {
  .container { padding: 0 24px; }
  .section-header h2 { font-size: 42px; }
  .ingredient-card { min-height: auto; }
}
</style>
