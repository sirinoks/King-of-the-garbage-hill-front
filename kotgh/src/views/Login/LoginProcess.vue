<template>
  <div>
    <div class="loginBox">
      <div class="version">kotgh-{{ version }}</div>
      <div class="info">
        King of the garbage hill uses your Discord account information to register and log in
      </div>

      <a class="loginLink" :href="identifyLink">
        <button>Login with Discord</button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  version: String
})

const apiBase = import.meta.env.VITE_API_BASE ?? '';
const identifyLink = `${apiBase}/auth/discord`;

</script>

<style scoped>
* {
  display: flex;
}
.loginBox {
  flex-direction: column;
  width: 30vw;
  background-color: var(--kh-c-neutrals-pale-300);
  justify-content: center;
  padding: 2rem 1.75rem;
  gap: 1.5rem;
}

.info {
  color: var(--kh-c-text-primary-600);
  font-size: 0.875rem;
}

.version {
  color: var(--kh-c-text-primary-700);
  font-size: 0.75rem;
  justify-content: center;
}

.loginLink {
  display: flex;
  width: 100%;
  text-decoration: none;
}

.loginLink button{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3rem;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  font-size: 0.95rem;
}


/* Mobile Devices (e.g., smartphones) */
@media only screen and (max-width: 800px) {
  .loginBox {
    width: 100vw;
    justify-content: center;
    padding: 2.375rem 1.75rem;
    gap: 1.5rem;
  }
  .loginBox a:last-of-type {
    margin-top: 0.5rem;
  }

  .loginLink button{
    font-size: 1rem;
  }
}

/* Tablet and Small Desktop Devices */
@media only screen and (min-width: 768px) and (max-width: 1199px) {
  /* Styles for tablet and small desktop devices */
}

/* Large Desktop Devices */
@media only screen and (min-width: 1200px) {
  /* Styles for large desktop devices */
}
</style>
