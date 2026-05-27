<template>
  <section class="hero">

    <div class="hero-overlay"></div>

    <div class="hero-noise"></div>

    <div class="hero-light light-1"></div>
    <div class="hero-light light-2"></div>

    <div class="hero-container">

      <div class="hero-left">

        <p class="hero-label">
          PREMIUM UKRAINIAN TINCTURE
        </p>

        <h1>
          П'яній 
          з натураним<br>
          алкоголем<br>
  
        </h1>

        <p class="hero-text">
          Авторські настоянки ручної роботи
          з натуральних інгредієнтів та
          атмосферою справжнього premium experience.
        </p>

        <div class="hero-buttons">

          <button class="hero-btn primary">
            Відкрити колекцію
          </button>

          <button class="hero-btn secondary">
            Наша історія
          </button>

        </div>

      </div>

      <div class="hero-right">

        <div class="bottle-glow"></div>

        <img
          src="/img/bottle.png"
          alt="bottle"
          class="hero-bottle"
        >

      </div>

    </div>

    <div class="hero-bg-text">
     HappyDrop
    </div>

  </section>
</template>

<style scoped>

.hero{
  position:relative;

  min-height:100vh;

  overflow:hidden;

  display:flex;
  align-items:center;

  padding:0 8%;

  background:
    linear-gradient(
      to bottom,
      #050607,
      #090a0c
    );
}

.hero-container{
  position:relative;
  z-index:5;

  width:100%;

  display:grid;
  grid-template-columns:1.1fr 1fr;

  align-items:center;
}

.hero-left{
  max-width:700px;
}

.hero-label{
  color:var(--gold);

  font-size:.72rem;
  letter-spacing:.38em;
  text-transform:uppercase;

  margin-bottom:2rem;
}

.hero h1{
  font-family:var(--serif);

  font-size:7.5rem;
  line-height:.88;
  font-weight:600;

  margin-bottom:2rem;

  color:var(--text);
}

.hero-text{
  max-width:540px;

  color:var(--text2);

  font-size:1.05rem;
  line-height:1.9;

  margin-bottom:3rem;
}

.hero-buttons{
  display:flex;
  gap:1rem;
}

.hero-btn{
  height:58px;

  padding:0 2rem;

  border:none;

  border-radius:999px;

  cursor:pointer;

  font-size:.72rem;
  font-weight:700;

  letter-spacing:.14em;
  text-transform:uppercase;

  transition:
    transform .5s var(--ease),
    box-shadow .5s var(--ease),
    background .5s var(--ease);
}

.hero-btn:hover{
  transform:translateY(-3px);
}

.primary{
  background:var(--gold);

  color:#7a5555;

  box-shadow:
    0 0 40px rgba(200,169,107,.25);
}

.primary:hover{
  background:var(--gold2);

  box-shadow:
    0 0 70px rgba(200,169,107,.45);
}
.secondary{
  background:rgba(216, 202, 202, 0.651);

  border:1px solid var(--border);

  color:var(--text);

  backdrop-filter:blur(14px);
}

.secondary:hover{
  background:rgba(255,255,255,.06);

  border-color:var(--border-h);
}

.hero-right{
  position:relative;

  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-bottle{
  position:relative;
  z-index:5;

  width:580px;

  filter:
    drop-shadow(0 0 60px rgba(200,169,107,.18));

  animation:
    float 6s ease-in-out infinite;
}

.bottle-glow{
  position:absolute;

  width:450px;
  height:450px;

  border-radius:50%;

  background:
    radial-gradient(
      circle,
      rgba(200,169,107,.22),
      transparent 70%
    );

  filter:blur(70px);
}

.hero-light{
  position:absolute;

  border-radius:50%;

  filter:blur(120px);

  pointer-events:none;
}

.light-1{
  width:500px;
  height:500px;

  background:
    rgba(200,169,107,.08);

  top:-200px;
  left:-150px;
}

.light-2{
  width:600px;
  height:600px;

  background:
    rgba(46,184,122,.06);

  right:-250px;
  bottom:-250px;
}

.hero-overlay{
  position:absolute;
  inset:0;

  background:
    radial-gradient(
      circle at center,
      transparent,
      rgba(0,0,0,.45)
    );
}

.hero-noise{
  position:absolute;
  inset:0;

  opacity:.035;

  background-image:
    url("https://grainy-gradients.vercel.app/noise.svg");
}

.hero-bg-text{
  position:absolute;

  bottom:-20px;
  left:50%;

  transform:translateX(-50%);

  font-size:12rem;
  font-weight:900;

  letter-spacing:.25em;

  color:rgba(255,255,255,.02);

  user-select:none;

  white-space:nowrap;
}

@keyframes float{

  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-18px);
  }

  100%{
    transform:translateY(0px);
  }

}

@media(max-width:1100px){

  .hero{
    padding-top:10rem;
  }

  .hero-container{
    grid-template-columns:1fr;

    text-align:center;
  }

  .hero-left{
    margin:auto;

    margin-bottom:4rem;
  }

  .hero-text{
    margin-inline:auto;
  }

  .hero-buttons{
    justify-content:center;
  }

  .hero h1{
    font-size:4.5rem;
  }

  .hero-bottle{
    width:320px;
  }

  .hero-bg-text{
    font-size:4rem;
  }

}

</style>