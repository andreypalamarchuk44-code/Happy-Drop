<template>
  <nav :class="{sc:scrolled}">
  <a href="#" class="nb">SYL<span>V</span>A</a>
  <ul class="nl">
    <li><a href="#products">Настоянки</a></li>
    <li><a href="#ingredients">Інгредієнти</a></li>
    <li><a href="#process">Процес</a></li>
    <li><a href="#ritual">Ритуал</a></li>
  </ul>
  <button class="ncta">Замовити</button>
</nav>
</template>

<script>
</script>

<style>
.navbar{
  position:fixed;
  top:0;
  left:0;
  right:0;

  z-index:500;

  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:1.875rem 4rem;

  transition:
    padding .5s var(--ease),
    background .5s,
    border-color .5s;
}

.navbar.sc{
  background:rgba(7,8,10,.82);

  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);

  border-bottom:1px solid var(--border);

  box-shadow:
    0 10px 40px rgba(0,0,0,.18);

  padding:1.25rem 4rem;
}

.nb{
  font-family:var(--sans);
  font-size:1.3rem;
  font-weight:800;

  letter-spacing:.22em;
  text-transform:uppercase;

  color:var(--text);
}

.nb span{
  color:var(--gold);
}

.nl{
  display:flex;
  gap:2.5rem;

  list-style:none;
}

.nl a{
  font-size:.7rem;
  font-weight:500;

  letter-spacing:.14em;
  text-transform:uppercase;

  color:var(--text2);

  transition:color .25s;
}

.nl a:hover{
  color:var(--text);
}

.ncta{
  font-family:var(--sans);
  font-size:.7rem;
  font-weight:700;

  letter-spacing:.12em;
  text-transform:uppercase;

  color:var(--bg);
  background:var(--gold);

  border:none;

  padding:.9rem 1.8rem;

  border-radius:999px;

  cursor:pointer;

  transition:
    transform .35s var(--ease),
    box-shadow .35s var(--ease),
    background .35s var(--ease);

  box-shadow:
    0 0 24px rgba(200,169,107,.25);
}

.ncta:hover{
  background:var(--gold2);

  transform:translateY(-2px);

  box-shadow:
    0 0 40px rgba(200,169,107,.45);
}
</style>