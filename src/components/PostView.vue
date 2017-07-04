<template>
  <div>
    <form>
    <div class="columns">
      <div class="column is-8">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="column is-4 is-8-mobile">
        <div class="field">
          <label class="label">Descreva a imagem</label>
          <p class="control">
            <input class="input" v-model="title" type="text" placeholder="Text input">
          </p>
        </div>
        <a @click.prevent="postCat" class="button is-success">POST A CAT</a>
      </div>
    </div>
  </form>
  </div>
</template>
<script>
  import axios from 'axios'
  import parse from 'xml-parser'
  export default {
    data () {
      return {
        'catUrl': '',
        'title': '',
        loading: false
      }
    },
    computed: {
      isCatLoaded: function () {
        return this.catUrl !== ''
      }
    },
    mounted () {
      let self = this
      axios.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1')
      .then(function (response) {
        self.catUrl = parse(response.data).root.children['0'].children['0'].children['0'].children['0'].content
      })
    },
    methods: {
      postCat () {
        this.$root.$firebaseRefs.cat.push(
          {
            'url': this.catUrl,
            'comment': this.title,
            'info': 'Posted by Charles on Tuesday',
            'created_at': -1 * new Date().getTime()
          }
        ).then(
          this.$router.push('/')
        )
      }
    }
  }
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
