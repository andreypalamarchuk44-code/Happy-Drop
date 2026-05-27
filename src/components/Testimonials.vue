<template>
  <section class="gallery">

    <div class="gallery-top">

      <p class="label">
        EXPERIENCE
      </p>

      <h2>
        Атмосфера,<br>
        яку неможливо<br>
        забути
      </h2>

    </div>

    <div class="gallery-grid">

      <div class="gallery-item large">
        <img src="/img/spicey.jpg" alt="">
      </div>

      <div class="gallery-item">
        <img src="/img/gallery-2.jpeg" alt="">
      </div>

      <div class="gallery-item">
        <img src="/img/gallery-3.jpg" alt="">
      </div>

      <div class="gallery-item wide">
        <img src="/img/gallery-4.jpg" alt="">
      </div>

    </div>

  </section>
</template>

<style scoped>

.gallery{
  position:relative;

  padding:10rem 8%;

  background:
    linear-gradient(
      to bottom,
      var(--bg2),
      var(--bg3)
    );
}

.gallery-top{
  margin-bottom:5rem;
}

.label{
  color:var(--gold);

  font-size:.75rem;
  letter-spacing:.3em;

  margin-bottom:1rem;
}

.gallery h2{
  font-family:var(--serif);

  font-size:5rem;
  line-height:1;
}

.gallery-grid{
  display:grid;

  grid-template-columns:1.3fr 1fr;
  grid-auto-rows:320px;

  gap:1.5rem;
}

.gallery-item{
  position:relative;

  overflow:hidden;

  border-radius:28px;

  border:1px solid var(--border);

  background:#111;
}

.gallery-item img{
  width:100%;
  height:100%;

  object-fit:cover;

  transition:
    transform 1.2s var(--ease),
    filter .8s var(--ease);

  filter:
    brightness(.8)
    contrast(1.05)
    saturate(1.1);
}

.gallery-item:hover img{
  transform:scale(1.08);

  filter:
    brightness(1)
    contrast(1.1)
    saturate(1.15);
}

.large{
  grid-row:span 2;
}

.wide{
  grid-column:span 2;
}

.gallery-item::after{
  content:'';

  position:absolute;
  inset:0;

  background:
    linear-gradient(
      to top,
      rgba(0,0,0,.4),
      transparent
    );

  pointer-events:none;
}

@media(max-width:1000px){

  .gallery-grid{
    grid-template-columns:1fr;
  }

  .large,
  .wide{
    grid-column:auto;
    grid-row:auto;
  }

  .gallery h2{
    font-size:3.5rem;
  }

}

</style>