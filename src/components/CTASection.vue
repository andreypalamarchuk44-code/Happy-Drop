<template>
  <section class="cta">

    <div class="cta-glow cta-glow-1"></div>
    <div class="cta-glow cta-glow-2"></div>

    <div class="cta-box">

      <p class="label">
        PREMIUM EXPERIENCE
      </p>

      <h2>
        Відчуй смак<br>
        справжньої<br>
        настоянки
      </h2>

      <span>
        Авторські рецепти, натуральні інгредієнти
        та атмосфера, яку хочеться проживати знову.
      </span>

      <div class="cta-buttons">

        <button class="primary">
          Замовити зараз
        </button>

        <button class="secondary">
          Дізнатись більше
        </button>

      </div>

    </div>

  </section>
</template>

<style scoped>

.cta{
  position:relative;

  padding:12rem 8%;

  overflow:hidden;

  background:
    linear-gradient(
      to bottom,
      var(--bg3),
      var(--bg)
    );
}

.cta-box{
  position:relative;
  z-index:2;

  max-width:1100px;

  margin:auto;

  padding:7rem 4rem;

  border-radius:40px;

  text-align:center;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.04),
      rgba(255,255,255,.02)
    );

  border:1px solid var(--border);

  backdrop-filter:blur(24px);

  overflow:hidden;
}

.label{
  color:var(--gold);

  font-size:.75rem;
  letter-spacing:.35em;

  margin-bottom:2rem;
}

.cta h2{
  font-family:var(--serif);

  font-size:5.5rem;
  line-height:.95;

  margin-bottom:2rem;
}

.cta span{
  display:block;

  max-width:650px;

  margin:auto;

  color:var(--text2);

  line-height:1.9;
  font-size:1.05rem;

  margin-bottom:3rem;
}

.cta-buttons{
  display:flex;
  justify-content:center;
  gap:1rem;
}

.cta button{
  height:58px;

  padding:0 2.2rem;

  border:none;
  border-radius:999px;

  cursor:pointer;

  font-size:.72rem;
  font-weight:700;

  letter-spacing:.14em;
  text-transform:uppercase;

  transition:
    transform .5s var(--ease),
    background .5s var(--ease),
    box-shadow .5s var(--ease);
}

.cta button:hover{
  transform:translateY(-3px);
}

.primary{
  background:var(--gold);

  color:#111;

  box-shadow:
    0 0 30px rgba(200,169,107,.25);
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

  backdrop-filter:blur(12px);
}

.secondary:hover{
  background:rgba(255,255,255,.06);

  border-color:var(--border-h);
}

.cta-glow{
  position:absolute;

  border-radius:50%;

  filter:blur(120px);

  pointer-events:none;
}

.cta-glow-1{
  width:500px;
  height:500px;

  background:
    rgba(200,169,107,.12);

  top:-200px;
  left:-200px;
}

.cta-glow-2{
  width:600px;
  height:600px;

  background:
    rgba(46,184,122,.08);

  bottom:-250px;
  right:-250px;
}

@media(max-width:1000px){

  .cta{
    padding:8rem 5%;
  }

  .cta-box{
    padding:4rem 2rem;
  }

  .cta h2{
    font-size:3.5rem;
  }

  .cta-buttons{
    flex-direction:column;
  }

  .cta button{
    width:100%;
  }

}

</style>