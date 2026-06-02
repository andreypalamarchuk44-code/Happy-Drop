<template>
  <div class="age-overlay">
    <div class="age-box">
      <div class="logo">HAPPY<span>DROP</span></div>
      <h2>Підтвердіть вік</h2>
      <p>Цей сайт містить інформацію про алкогольні напої.<br/>Вхід дозволено лише особам від 18 років.</p>
      <div class="age-buttons">
        <button class="btn-yes" @click="confirm">Мені є 18 років</button>
        <button class="btn-no" @click="deny">Мені немає 18</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ confirmed: [] }>()

function confirm() {
  emit('confirmed')
}

function deny() {
  window.location.href = 'https://www.google.com'
}
</script>

<style scoped>
.age-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
}

.age-box {
  text-align: center;
  padding: 60px 48px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  max-width: 480px;
  width: 90%;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  color: white;
  letter-spacing: 3px;
  font-weight: 600;
  margin-bottom: 32px;
}

.logo span { color: #d6a55c; }

h2 {
  font-family: 'Cormorant Garamond', serif;
  color: white;
  font-size: 42px;
  margin-bottom: 16px;
  font-weight: 500;
}

p {
  color: rgba(255,255,255,0.65);
  line-height: 1.8;
  margin-bottom: 40px;
  font-size: 15px;
}

.age-buttons {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.btn-yes {
  padding: 16px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #f5c27a, #d6a55c);
  color: #111;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-yes:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(214,165,92,0.35);
}

.btn-no {
  padding: 14px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  background: transparent;
  color: rgba(255,255,255,0.5);
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-no:hover { color: rgba(255,255,255,0.8); }
</style>
