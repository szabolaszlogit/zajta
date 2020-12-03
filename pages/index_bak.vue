<template>
  <v-row >
    <v-col>
<client-only>

<!-- fetch pending animation -->
<div v-if="$fetchState.pending"> 
        <v-progress-linear
      indeterminate
      color="yellow darken-2"
    ></v-progress-linear>
</div>


<!-- fetch from content -->
 <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
         
          <img :src="article.img" />
          <div>
            <h2>{{ article.title}}</h2>
         
          </div>
        </NuxtLink>
        <nuxt-content :document="article" />
      </li>
    </ul>

<!-- fetch from database -->
<div  v-for="(post, i) in posts" :key="i">
  
  <v-card class="mb-5">

    <v-card-title class="headline orange lighten-4 ">
    {{ post.title }}
    </v-card-title>
     <v-divider></v-divider>
    <v-card-text>
    <div>
    <p v-html="post.content"></p>
    </div>
    </v-card-text>

    <v-divider></v-divider>

    <div class="orange lighten-5 pa-2 text-right text-xs-subtitle-1 font-weight-light">      
       {{ post.date | formatDate}}   
    </div>


  </v-card>
  
</div>
</client-only>
    </v-col>
  </v-row>
</template>

<script>


export default {
  components: {
  },
  data () {
    return {
        post: {},
        posts: [],
        error: [],
        articles: []
    } 
  },
      async fetch() {
      this.posts = await fetch(
        'https://csaszlo.hu/php/getall.php'
        //'https://csaszlo.hu/wp/wp-json/wp/v2/posts'
        //'https://csaszlo.hu/wp/wp-json/wp/v2/posts/5'
      ).then(res => res.json())
        .catch((error) => {
        return { error: error }
      })
      console.log(this.posts)
    },

async asyncData ({ $content }) {
    const articles = await $content('').fetch()

    return {
      articles
    }
  }



}
</script>
