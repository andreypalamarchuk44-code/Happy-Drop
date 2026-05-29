<template>
  <footer id="footer" class="footer">
  <footer class="footer">

    <div class="footer-top">

      <div class="footer-brand">

        <a href="#" class="logo">
          HAPPY<span>DROP</span>
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
        © 2026 HAPPYDROP. All rights reserved.
      </p>

      <span>
        Crafted with premium taste.
      </span>

    </div>

    <div class="footer-bg">
      HAPPYDROP
    </div>
</footer>
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
  color:#b9b4b4d5 ;

  font-size:1.4rem;
  font-weight:800;

  letter-spacing:.22em;
  text-transform:uppercase;

  margin-bottom:1.5rem;
}

.logo span{
  color:#995e1a;
}

.footer-brand p{
  color: #272525;

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
  color:#7e5b2e;

  font-size:.75rem;
  letter-spacing:.25em;
  text-transform:uppercase;

  margin-bottom:1rem;
}

.column a{
  color:#aa7b1e;

  transition:
    color .3s var(--ease),
    transform .3s var(--ease);
}

.column a:hover{
  color:#5f6460;

  transform:translateX(4px);
}

.footer-bottom{
  position:relative;
  z-index:2;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding-top:2rem;

  color:#635a5a;

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

@media(max-width:1200px){

  .footer{
    padding:7rem 6% 3rem;
  }

  .footer-top{
    gap:4rem;
  }

  .footer-links{
    gap:4rem;
  }

  .footer-bg{
    font-size:7rem;
  }

}

/* ========================= */
/* 1000px */
/* ========================= */

@media(max-width:1000px){

  .footer{
    padding:6rem 5% 3rem;
  }

  .footer-top{
    flex-direction:column;

    gap:3rem;
  }

  .footer-brand{
    max-width:100%;
  }

  .footer-links{
    width:100%;

    flex-wrap:wrap;

    justify-content:space-between;

    gap:3rem;
  }

  .footer-bottom{
    flex-direction:column;

    gap:1rem;

    text-align:center;
  }

  .footer-bg{
    font-size:5rem;

    bottom:0;
  }

}

/* ========================= */
/* 768px */
/* ========================= */

@media(max-width:768px){

  .footer{
    padding:5rem 1.5rem 2rem;
  }

  .footer-top{
    padding-bottom:3rem;
  }

  .logo{
    font-size:1.2rem;

    letter-spacing:.18em;
  }

  .footer-brand p{
    font-size:.95rem;

    line-height:1.7;
  }

  .footer-links{
    flex-direction:column;

    gap:2.5rem;
  }

  .column{
    gap:.8rem;
  }

  .title{
    margin-bottom:.5rem;
  }

  .column a{
    font-size:.95rem;
  }

  .footer-bottom{
    padding-top:1.5rem;

    font-size:.85rem;
  }

  .footer-bg{
    font-size:3rem;

    letter-spacing:.15em;
  }

}

/* ========================= */
/* 480px */
/* ========================= */

@media(max-width:480px){

  .footer{
    padding:4rem 1rem 1.8rem;
  }

  .logo{
    font-size:1rem;
  }

  .footer-brand p{
    font-size:.88rem;
  }

  .title{
    font-size:.68rem;
  }

  .column a{
    font-size:.88rem;
  }

  .footer-bottom{
    font-size:.78rem;
  }

  .footer-bg{
    font-size:2rem;
  }

}

</style>