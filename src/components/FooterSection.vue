<template>
  <footer class="footer">

    <div class="footer-top">

      <div class="footer-brand">

        <a href="#" class="logo">
          NASTO<span>YANKA</span>
        </a>

        <p>
          Авторські настоянки ручної роботи
          з атмосферою справжнього premium experience.
        </p>

      </div>

      <div class="footer-links">

        <div class="column">

          <span class="title">
            Navigation
          </span>

          <a href="#">
            Головна
          </a>

          <a href="#">
            Колекція
          </a>

          <a href="#">
            Історія
          </a>

          <a href="#">
            Контакти
          </a>

        </div>

        <div class="column">

          <span class="title">
            Social
          </span>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Telegram
          </a>

          <a href="#">
            TikTok
          </a>

        </div>

        <div class="column">

          <span class="title">
            Contact
          </span>

          <a href="#">
            hello@nastoyanka.com
          </a>

          <a href="#">
            +380 00 000 00 00
          </a>

          <a href="#">
            Ukraine
          </a>

        </div>

      </div>

    </div>

    <div class="footer-bottom">

      <p>
        © 2026 NASTOYANKA. All rights reserved.
      </p>

      <span>
        Crafted with premium taste.
      </span>

    </div>

    <div class="footer-bg">
      HAPPYDROP
    </div>

  </footer>
</template>

<style scoped>

.footer{
  position:relative;

  padding:8rem 8% 3rem;

  background:var(--bg);

  overflow:hidden;

  border-top:1px solid var(--border);
}

.footer-top{
  position:relative;
  z-index:2;

  display:flex;
  justify-content:space-between;
  gap:5rem;

  padding-bottom:4rem;

  border-bottom:1px solid var(--border);
}

.footer-brand{
  max-width:420px;
}

.logo{
  display:inline-block;

  font-size:1.4rem;
  font-weight:800;

  letter-spacing:.22em;
  text-transform:uppercase;

  margin-bottom:1.5rem;
}

.logo span{
  color:var(--gold);
}

.footer-brand p{
  color:var(--text2);

  line-height:1.9;
}

.footer-links{
  display:flex;
  gap:5rem;
}

.column{
  display:flex;
  flex-direction:column;
  gap:1rem;
}

.title{
  color:var(--gold);

  font-size:.75rem;
  letter-spacing:.25em;
  text-transform:uppercase;

  margin-bottom:1rem;
}

.column a{
  color:var(--text2);

  transition:
    color .3s var(--ease),
    transform .3s var(--ease);
}

.column a:hover{
  color:var(--text);

  transform:translateX(4px);
}

.footer-bottom{
  position:relative;
  z-index:2;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding-top:2rem;

  color:var(--text3);

  font-size:.9rem;
}

.footer-bg{
  position:absolute;

  left:50%;
  bottom:-20px;

  transform:translateX(-50%);

  font-size:10rem;
  font-weight:900;

  letter-spacing:.25em;

  color:rgba(255,255,255,.02);

  pointer-events:none;

  user-select:none;

  white-space:nowrap;
}

@media(max-width:1000px){

  .footer-top{
    flex-direction:column;
  }

  .footer-links{
    flex-wrap:wrap;
    gap:3rem;
  }

  .footer-bottom{
    flex-direction:column;
    gap:1rem;

    text-align:center;
  }

  .footer-bg{
    font-size:4rem;
  }

}

</style>