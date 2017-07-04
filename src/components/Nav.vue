<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <router-link class="nav-item is-tab is-hidden-mobile" :to="{ name: 'home' }">Home</router-link>
          <router-link class="nav-item is-tab is-hidden-mobile" :to="{ name: 'post' }">New</router-link>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-tab is-hidden-tablet">Features</a>
          <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet">About</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img src="http://bulma.io/images/jgthms.png">
            </figure>
            Profile
          </a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
