<template>
  <div class="columns">
    <div class="column is-8">
      <div class="picture">
        <img v-lazy="this.pictures[$route.params.id].url" />
      </div>
      <div class="info">
        <span>{{ this.pictures[$route.params.id].info }}</span>
      </div>
    </div>
    <div class="column is-4 is-8-mobile">
      <div class="comment">
        <span>{{ this.pictures[$route.params.id].comment }}</span>
      </div>
      <div class="actions">
        <router-link class="button is-info is-outlined" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../data'
export default {
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>
<style scoped>
.picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: left;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
