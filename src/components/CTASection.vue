<template>
  <section class="cta-section">

    <!-- BACKGROUND -->
    <div class="bg-overlay"></div>

    <div class="bg-glow left"></div>
    <div class="bg-glow right"></div>

    <div class="container">

      <div class="cta-card">

        <!-- CONTENT -->
        <div class="cta-content">

          <span class="section-tag">
            PREMIUM EXPERIENCE
          </span>

          <h2>
            Відчуй<br />
            справжній<br />
            характер смаку
          </h2>

          <p>
            Відкрий для себе колекцію
            авторських напоїв із преміальною
            атмосферою та унікальною подачею.
          </p>

          <div class="buttons">

            <button class="gold-btn">
              Замовити зараз
            </button>

            <button class="glass-btn">
              Дивитись колекцію
            </button>

          </div>

        </div>

        <!-- DECOR -->
        <div class="decor-circle"></div>

      </div>

    </div>

  </section>
</template>

<style scoped>

.cta-section {
  position: relative;

  padding: 140px 0 160px;

  background: #050505;

  overflow: hidden;
}

/* OVERLAY */

.bg-overlay {
  position: absolute;

  inset: 0;

  background:
    radial-gradient(
      circle at center,
      rgba(255,140,0,0.08),
      transparent 60%
    );
}

/* GLOW */

.bg-glow {
  position: absolute;

  width: 600px;
  height: 600px;

  border-radius: 50%;

  filter: blur(140px);

  opacity: 0.16;
}

.bg-glow.left {
  top: -120px;
  left: -180px;

  background: #ff8a00;
}

.bg-glow.right {
  bottom: -160px;
  right: -120px;

  background: #d6a55c;
}

/* CONTAINER */

.container {
  position: relative;

  z-index: 2;

  max-width: 1400px;

  margin: auto;

  padding: 0 80px;
}

/* CARD */

.cta-card {
  position: relative;

  overflow: hidden;

  border-radius: 40px;

  min-height: 620px;

  padding: 80px;

  display: flex;
  align-items: center;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.05),
      rgba(255,255,255,0.02)
    );

  border:
    1px solid rgba(255,255,255,0.06);

  backdrop-filter: blur(20px);

  box-shadow:
    0 30px 100px rgba(0,0,0,0.45);
}

/* CONTENT */

.cta-content {
  position: relative;

  z-index: 3;

  max-width: 720px;
}

.section-tag {
  display: inline-block;

  color: #d6a55c;

  letter-spacing: 2px;

  font-size: 13px;

  margin-bottom: 24px;
}

.cta-content h2 {
  color: white;

  font-family: 'Cormorant Garamond', serif;

  font-size: 110px;

  line-height: 0.9;

  margin-bottom: 28px;
}

.cta-content p {
  color: rgba(255,255,255,0.72);

  font-size: 20px;

  line-height: 1.8;

  max-width: 620px;

  margin-bottom: 42px;
}

/* BUTTONS */

.buttons {
  display: flex;

  gap: 20px;

  flex-wrap: wrap;
}

.gold-btn {
  background:
    linear-gradient(
      135deg,
      #f5c27a,
      #d6a55c
    );

  color: black;

  border: none;

  padding: 18px 34px;

  border-radius: 16px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.4s;

  box-shadow:
    0 15px 40px rgba(214,165,92,0.22);
}

.gold-btn:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0 22px 60px rgba(214,165,92,0.4);
}

.glass-btn {
  background:
    rgba(255,255,255,0.05);

  border:
    1px solid rgba(255,255,255,0.08);

  color: white;

  padding: 18px 34px;

  border-radius: 16px;

  backdrop-filter: blur(20px);

  cursor: pointer;

  transition: 0.4s;
}

.glass-btn:hover {
  background:
    rgba(255,255,255,0.08);

  transform:
    translateY(-4px);
}

/* DECOR */

.decor-circle {
  position: absolute;

  right: -120px;
  top: 50%;

  transform: translateY(-50%);

  width: 520px;
  height: 520px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255,140,0,0.24),
      transparent 70%
    );

  filter: blur(40px);
}

/* RESPONSIVE */

@media (max-width: 1100px) {

  .cta-content h2 {
    font-size: 72px;
  }

  .cta-card {
    padding: 60px;
  }
}

@media (max-width: 768px) {

  .container {
    padding: 0 24px;
  }

  .cta-card {
    padding: 40px;

    min-height: auto;
  }

  .cta-content h2 {
    font-size: 48px;
  }

  .cta-content p {
    font-size: 17px;
  }

  .buttons {
    flex-direction: column;
  }

  .gold-btn,
  .glass-btn {
    width: 100%;
  }
}

</style>