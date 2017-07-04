<template>
  <div>
    <div class="columns is-multiline">
        <div v-for="picture in getCats()" class="column is-one-quarter" @click="displayDetails(picture['.key'])">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img v-lazy="picture.url">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ picture.comment }}
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>

        </div>
      </div>
      <router-link class="add-picture-button" to="/post">
        <span class="icon is-large">
          <i class="material-icons">add</i>
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'detail', params: { id: id }})
    },
    getCats () {
      if (navigator.onLine) {
        this.saveCatsToCache()
        return this.$root.cat
      } else {
        return JSON.parse(localStorage.getItem('cats'))
      }
    },
    saveCatsToCache () {
      this.$root.$firebaseRefs.cat.once('value', (snapchot) => {
        localStorage.setItem('cats', JSON.stringify(snapchot.val()))
      })
    },
    mounted () {
      this.saveCatsToCache()
    }
  }
}
</script>
<style scoped>
  .add-picture-button {
    background-color: white;
    border-radius:50%;
    border: solid;
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .add-picture-button:hover {
    color: #1abc9c;
  }
</style>
