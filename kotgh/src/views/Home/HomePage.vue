<template>
  <div class="homePage">
    <nav>
      <RouterLink to="/">Store</RouterLink>
      <RouterLink to="/about">Encyclopedia</RouterLink>
      <RouterLink to="/about">Spectate</RouterLink>
    </nav>
    <div class="homeContent">
      <HomeProfile></HomeProfile>
      <div>home</div>
      <RouterView />

      <PatchNotes></PatchNotes>
    </div>
    
    <button @click="logout">Log out (test)</button>

  </div>
</template>

<script setup lang="ts">
import PatchNotes from '@/components/Home/PatchNotes.vue'
import HomeProfile from '@/components/Home/HomeProfile.vue'

const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  window.location.href = '/login';
};


</script>

<style scoped>
*{display:flex;}
.homePage{
  flex-direction: column;
  width:100vw;
}
.homePage>nav{
  align-self: center;
  gap:0.25rem;
  padding: 0 0.25rem;
}
.homePage>nav>a{
  background-color: var(--kh-c-neutrals-pale-500);
  padding: 0.625rem 1rem;
  color: var(--kh-c-text-primary-600);
  text-decoration: none;
  font-size:1.125rem;
  border: 1px solid var(--kh-c-neutrals-pale-260);
}

.homePage>nav>a:hover{
  background-color: var(--kh-c-neutrals-pale-350);
  border: 1px solid var(--kh-c-neutrals-pale-240);
}

.homePage>nav>a:active{
  background-color: var(--kh-c-neutrals-pale-575);
  border: 1px solid var(--kh-c-neutrals-pale-375);
}

.homePage>.homeContent{
  justify-content: space-between;
}

</style>
