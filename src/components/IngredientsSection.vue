<template>
  <section class="ingredients">

    <div class="section-top">

      <p class="label">
        COLLECTION
      </p>

      <h2>
        Авторські<br>
        смаки
      </h2>

    </div>

    <div class="cards">

      <div class="card">

        <div class="card-glow"></div>

        <img src="/img/bottlecharry.jpg" alt="">

        <div class="card-content">

          <span class="type">
            CHERRY
          </span>

          <h3>
            Вишнева
          </h3>

          <p>
            Насичений ягідний смак з м’яким
            післясмаком та ароматом спецій.
          </p>

        </div>

      </div>

      <div class="card">

        <div class="card-glow"></div>

        <img src="/img/bottlehoney.jpg" alt="">

        <div class="card-content">

          <span class="type">
            HONEY
          </span>

          <h3>
            Медовуха
          </h3>

          <p>
            Теплий медовий аромат з нотками
            кориці та натуральних трав.
          </p>

        </div>

      </div>

      <div class="card">

        <div class="card-glow"></div>

        <img src="/img/bottlebary.jpg" alt="">

        <div class="card-content">

          <span class="type">
            HERBAL
          </span>

          <h3>
            Трав’яна
          </h3>

          <p>
            Глибокий смак карпатських трав
            та природної витримки.
          </p>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

.ingredients{
  position:relative;

  padding:10rem 8%;

  background:
    linear-gradient(
      to bottom,
      var(--bg1),
      var(--bg2)
    );

  overflow:hidden;
}

.section-top{
  margin-bottom:5rem;
}

.label{
  color:var(--gold);

  letter-spacing:.3em;
  font-size:.75rem;

  margin-bottom:1rem;
}

.ingredients h2{
  font-family:var(--serif);

  font-size:5rem;
  line-height:1;
}

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2rem;
}

.card{
  position:relative;

  padding:3rem 2rem;

  border-radius:32px;

  background:var(--surface);

  border:1px solid var(--border);

  overflow:hidden;

  backdrop-filter:blur(20px);

  transition:
    transform .7s var(--ease),
    border-color .5s var(--ease),
    box-shadow .7s var(--ease);
}

.card:hover{
  transform:
    translateY(-10px);

  border-color:var(--border-h);

  box-shadow:
    0 20px 80px rgba(0,0,0,.35);
}

.card-glow{
  position:absolute;

  width:220px;
  height:220px;

  border-radius:50%;

  background:
    radial-gradient(
      circle,
      rgba(200,169,107,.18),
      transparent 70%
    );

  top:-80px;
  right:-80px;

  filter:blur(30px);
}

.card img{
  width:220px;

  margin:auto;

  margin-bottom:2rem;

  transition:
    transform .8s var(--ease);
}

.card:hover img{
  transform:
    translateY(-10px)
    scale(1.03);
}

.type{
  display:inline-block;

  color:var(--gold);

  letter-spacing:.2em;
  font-size:.7rem;

  margin-bottom:1rem;
}

.card h3{
  font-family:var(--serif);

  font-size:2.2rem;

  margin-bottom:1rem;
}

.card p{
  color:var(--text2);

  line-height:1.8;
}

@media(max-width:1100px){

  .cards{
    grid-template-columns:1fr;
  }

  .ingredients h2{
    font-size:3.5rem;
  }

  .card{
    text-align:center;
  }

}

</style>