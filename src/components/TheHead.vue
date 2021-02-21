<template>
<transition appear>
  <div>
    <nav class="navbar  navbar-light bg-info navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo Vue.js" width="30px" height="30px">
        DYMATWO
      </a>
      <button class="navbar-toogler">
      <span class="navbar-toggler-icon"></span> </button>
   

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/shop">Boutique</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
     </nav>
  </div>
  </transition>
</template>

<script>
  export default {
directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', () => {
          nav.classList.remove('show');
        })
        const nav = document.querySelector('#' + binding.value);
        el.addEventListener('click', (e) => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show');
          } else {
            nav.classList.add('show');
          }
          e.stopPropagation();
        })
      }
    }
  }
  }
</script>

<style>

</style>