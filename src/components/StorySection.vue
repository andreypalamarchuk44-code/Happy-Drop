<template>
  <section class="story">

    <div class="story-container">

      <div class="story-left">

        <p class="label">OUR STORY</p>

        <h2>
          Створено<br>
          з традиції<br>
          та характеру
        </h2>

        <p class="text">
          Наші настоянки — це поєднання стародавніх рецептів
          та сучасного підходу до якості. Кожна пляшка створена
          вручну з натуральних інгредієнтів.
        </p>

        <div class="stats">

          <div class="stat">
            <span>100%</span>
            <p>Натуральні інгредієнти</p>
          </div>

          <div class="stat">
            <span>7+</span>
            <p>Етапів фільтрації</p>
          </div>

          <div class="stat">
            <span>24h</span>
            <p>Повільна екстракція</p>
          </div>

        </div>

      </div>

      <div class="story-right">

        <div class="image-card">
          <!-- <img src="/img/story.jpg" alt="story image"> -->
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

.story{
  padding:10rem 8%;
  background:linear-gradient(to bottom, var(--bg), var(--bg1));
}

.story-container{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:6rem;
  align-items:center;
}

.label{
  color:var(--gold);
  letter-spacing:.3em;
  font-size:.75rem;
  margin-bottom:1.5rem;
}

.story h2{
  font-family:var(--serif);
  font-size:5rem;
  line-height:1;
  margin-bottom:2rem;
}

.text{
  color:var(--text2);
  font-size:1.05rem;
  line-height:1.9;
  max-width:520px;
  margin-bottom:3rem;
}

.stats{
  display:flex;
  gap:2rem;
}

.stat span{
  font-size:2rem;
  font-weight:700;
  color:var(--gold);
}

.stat p{
  font-size:.8rem;
  color:var(--text2);
}

.story-right{
  position:relative;
}

.image-card{
  position:relative;
  border-radius:20px;
  overflow:hidden;

  border:1px solid var(--border);

  transform:rotate(-2deg);

  transition:transform .6s var(--ease);
}

.image-card:hover{
  transform:rotate(0deg) scale(1.02);
}

.image-card img{
  width:100%;
  height:600px;
  object-fit:cover;

  filter:contrast(1.1) saturate(1.1);
}

@media(max-width:1000px){

  .story-container{
    grid-template-columns:1fr;
    text-align:center;
  }

  .stats{
    justify-content:center;
    flex-wrap:wrap;
  }

  .story h2{
    font-size:3rem;
  }

  .image-card img{
    height:400px;
  }
}

</style>