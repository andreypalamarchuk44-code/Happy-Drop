<template>
  <section class="hero">

    <div class="hero-noise"></div>

    <div class="hero-gradient hero-gradient-1"></div>
    <div class="hero-gradient hero-gradient-2"></div>

    <div class="hero-content">

      <p class="hero-label">
        PREMIUM UKRAINIAN TINCTURE
      </p>

      <h1>
        Смак,<br>
        що має<br>
        характер
      </h1>

      <span>
        Авторські настоянки ручної роботи
        з натуральних інгредієнтів та
        глибоким післясмаком.
      </span>

      <div class="hero-buttons">

        <button class="hero-btn primary">
          Відкрити колекцію
        </button>

        <button class="hero-btn secondary">
          Історія бренду
        </button>

      </div>

    </div>

    <div class="hero-image">

      <div class="bottle-glow"></div>

      <img src="/img/bottle.png" alt="bottle">

    </div>

    <div class="hero-bg-text">
      TINCTURE
    </div>

  </section>
</template>

<style scoped>

.hero{
  position:relative;

  min-height:100vh;

  display:grid;
  grid-template-columns:1fr 1fr;

  align-items:center;

  padding:0 8%;

  overflow:hidden;

  background:
    radial-gradient(
      circle at top,
      rgba(200,169,107,.08),
      transparent 40%
    ),
    var(--bg);
}

.hero-content{
  position:relative;
  z-index:5;
}

.hero-label{
  font-size:.75rem;

  letter-spacing:.35em;
  text-transform:uppercase;

  color:var(--gold);

  margin-bottom:2rem;
}

.hero h1{
  font-family:var(--serif);

  font-size:7rem;
  line-height:.9;
  font-weight:600;

  margin-bottom:2rem;

  color:var(--text);
}

.hero span{
  display:block;

  max-width:520px;

  font-size:1.05rem;
  line-height:1.9;

  color:var(--text2);

  margin-bottom:3rem;
}

.hero-buttons{
  display:flex;
  gap:1rem;
}

.hero-btn{
  height:56px;

  padding:0 2rem;

  border:none;

  border-radius:999px;

  cursor:pointer;

  font-family:var(--sans);
  font-size:.72rem;
  font-weight:700;

  letter-spacing:.15em;
  text-transform:uppercase;

  transition:
    transform .5s var(--ease),
    background .5s var(--ease),
    box-shadow .5s var(--ease);
}

.hero-btn:hover{
  transform:translateY(-3px);
}

.primary{
  background:var(--gold);
  color:#111;

  box-shadow:
    0 0 30px rgba(200,169,107,.3);
}

.primary:hover{
  background:var(--gold2);

  box-shadow:
    0 0 60px rgba(200,169,107,.45);
}

.secondary{
  background:rgba(255,255,255,.04);

  border:1px solid var(--border);

  color:var(--text);

  backdrop-filter:blur(14px);
}

.secondary:hover{
  border-color:var(--border-h);

  background:rgba(255,255,255,.06);
}

.hero-image{
  position:relative;

  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-image img{
  width:520px;

  position:relative;
  z-index:2;

  filter:
    drop-shadow(0 0 60px rgba(200,169,107,.2));

  animation:float 6s ease-in-out infinite;
}

.bottle-glow{
  position:absolute;

  width:420px;
  height:420px;

  border-radius:50%;

  background:
    radial-gradient(
      circle,
      rgba(200,169,107,.28),
      transparent 70%
    );

  filter:blur(60px);
}

.hero-gradient{
  position:absolute;

  border-radius:50%;

  filter:blur(120px);

  pointer-events:none;
}

.hero-gradient-1{
  width:500px;
  height:500px;

  background:rgba(200,169,107,.12);

  top:-200px;
  left:-150px;
}

.hero-gradient-2{
  width:600px;
  height:600px;

  background:rgba(46,184,122,.08);

  bottom:-250px;
  right:-200px;
}

.hero-bg-text{
  position:absolute;

  bottom:0;
  left:50%;

  transform:translateX(-50%);

  font-size:14rem;
  font-weight:800;

  letter-spacing:.25em;

  color:rgba(255,255,255,.03);

  pointer-events:none;

  user-select:none;
}

.hero-noise{
  position:absolute;
  inset:0;

  opacity:.04;

  background-image:
    url("https://grainy-gradients.vercel.app/noise.svg");
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
    grid-template-columns:1fr;

    padding-top:10rem;

    text-align:center;
  }

  .hero-content{
    margin-bottom:4rem;
  }

  .hero span{
    margin-inline:auto;
  }

  .hero-buttons{
    justify-content:center;
  }

  .hero h1{
    font-size:4.5rem;
  }

  .hero-image img{
    width:320px;
  }

  .hero-bg-text{
    font-size:5rem;
  }

}

</style>