<script setup>
import { ref, onMounted, watch } from 'vue'

const reviews = ref([])
 onMounted(() => {

  const savedReviews = localStorage.getItem('reviews')

  if(savedReviews){

    reviews.value = JSON.parse(savedReviews)

  } else {

    reviews.value = [

      {
        initials: 'AK',
        name: 'Андрій',
        city: 'Київ',
        text: 'Один із найкращих смаків, які я пробував.'
      },

      {
        initials: 'ML',
        name: 'Марія',
        city: 'Львів',
        text: 'Дуже стильна подача та premium атмосфера.'
      }

    ]

  }

})
const newName = ref('')
const newCity = ref('')
const newText = ref('')

const addReview = () => {

  if (
    !newName.value ||
    !newText.value
  ) return

  reviews.value.push({
    initials: newName.value.slice(0,2).toUpperCase(),
    name: newName.value,
    city: newCity.value || 'Україна',
    text: newText.value
  })

  newName.value = ''
  newCity.value = ''
  newText.value = ''
}
watch(reviews, () => {

  localStorage.setItem(
    'reviews',
    JSON.stringify(reviews.value)
  )

}, { deep: true })
</script>

<template>
  <section id="testimonials" class="testimonials">

    <div class="container">

      <div class="section-header">
        <span class="section-tag">ВІДГУКИ</span>

        <h2>
          Враження,<br>
          що залишаються
        </h2>
      </div>

      <div class="reviews-grid">

        <div
          class="review-card"
          v-for="(review,index) in reviews"
          :key="index"
        >

          <div class="quote">✦</div>

          <p>"{{ review.text }}"</p>

          <div class="review-footer">

            <div class="review-avatar">
              {{ review.initials }}
            </div>

            <div>
              <h4>{{ review.name }}</h4>
              <span>{{ review.city }}</span>
            </div>

          </div>

        </div>

      </div>

      <div class="review-form">

        <h3>Залишити відгук</h3>

        <input v-model="newName" placeholder="Ваше ім’я" />
        <input v-model="newCity" placeholder="Місто" />
        <textarea v-model="newText" placeholder="Ваш коментар"></textarea>

        <button @click="addReview">
          Надіслати
        </button>

      </div>

    </div>

  </section>
</template>

<style scoped>

.testimonials{
  padding:10rem 0;

  background:
    linear-gradient(
      to bottom,
      #080808,
      #0d0d0d
    );
}

.container{
  max-width:1400px;

  margin:auto;

  padding:0 80px;
}

/* HEADER */

.section-header{
  text-align:center;

  margin-bottom:5rem;
}

.section-tag{
  color:#c8a96b;

  letter-spacing:.3em;

  font-size:.72rem;

  display:inline-block;

  margin-bottom:1rem;
}

.section-header h2{
  font-family:'Cormorant Garamond', serif;
  color: #5a3218;

  font-size:5.5rem;

  line-height:.95;
}

/* GRID */

.reviews-grid{
  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(320px,1fr));

  gap:2rem;

  margin-bottom:6rem;
}

/* CARD */

.review-card{
  position:relative;

  padding:3rem;

  border-radius:32px;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.04),
      rgba(255,255,255,.02)
    );

  border:
    1px solid rgba(255,255,255,.06);

  backdrop-filter:blur(20px);

  transition:.45s ease;
}

.review-card:hover{
  transform:translateY(-8px);

  border-color:
    rgba(200,169,107,.25);

  box-shadow:
    0 25px 80px rgba(0,0,0,.35);
}

.quote{
  position:absolute;

  top:20px;
  right:28px;

  color:
    rgba(200,169,107,.12);

  font-size:4rem;
}

.review-card p{
  color:
    rgba(255,255,255,.82);

  line-height:1.8;

  font-size:1.15rem;

  margin-bottom:2.5rem;
}

/* FOOTER */

.review-footer{
  display:flex;

  align-items:center;

  gap:1rem;
}

.review-avatar{
  width:58px;
  height:58px;

  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;

  background:
    linear-gradient(
      135deg,
      rgba(200,169,107,.18),
      rgba(200,169,107,.05)
    );

  border:
    1px solid rgba(200,169,107,.25);

  color:#c8a96b;

  font-size:.85rem;
  font-weight:700;

  letter-spacing:.15em;
}

.review-footer h4{
  color:white;

  margin-bottom:.3rem;
}

.review-footer span{
  color:
    rgba(255,255,255,.45);

  font-size:.85rem;
}

/* FORM */

.review-form{
  max-width:700px;

  margin:auto;

  padding:4rem;

  border-radius:36px;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.04),
      rgba(255,255,255,.015)
    );

  border:
    1px solid rgba(255,255,255,.06);
}

.review-form h3{
  font-family:'Cormorant Garamond', serif;

  font-size:3rem;
  color: #8d7c70;
  margin-bottom:2rem;

  text-align:center;
}

.review-form input,
.review-form textarea{
  width:100%;

  background:
    rgba(255,255,255,.03);

  border:
    1px solid rgba(255,255,255,.08);

  border-radius:18px;

  padding:1rem 1.2rem;

  color:white;

  margin-bottom:1rem;

  outline:none;

  transition:.3s ease;
}

.review-form textarea{
  min-height:140px;

  resize:none;
}

.review-form input:focus,
.review-form textarea:focus{
  border-color:
    rgba(200,169,107,.35);
}

.review-form button{
  width:100%;
  height:56px;

  border:none;

  border-radius:999px;

  background:#c8a96b;

  color:#111;

  font-weight:700;

  letter-spacing:.15em;

  text-transform:uppercase;

  cursor:pointer;

  transition:.35s ease;
}

.review-form button:hover{
  transform:translateY(-2px);

  background:#e2c98a;
}

/* MOBILE */

@media(max-width:768px){

  .container{
    padding:0 24px;
  }

  .section-header h2{
    font-size:3.5rem;
  }

  .review-form{
    padding:2rem;
  }

}
</style>