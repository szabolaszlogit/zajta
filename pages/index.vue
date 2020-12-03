<template>
  <v-row >
    <v-col>

<!-- fetch from content -->
<div  v-for="article of articles
      .slice(articleStart, articleStart+articlesPerPage)" :key="article.slug">
  
  <v-card class="mb-5">

    <v-card-title class="info">
      <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }"
      style="word-break: break-word;"
     class="text-decoration-none display-5 v-heading  white--text font-weight-light">
      <v-btn          
        class="ma-2"
        color="primary"
        dark
        fab
        small
        elevation="1"
      >
        <v-icon
          dark
        >
          mdi-arrow-right
        </v-icon>
      </v-btn>
            {{ article.title}}
      </NuxtLink>


    </v-card-title>
     <v-divider></v-divider>
    <v-card-text>
    <div>
    <nuxt-content :document="article" />
    </div>
    </v-card-text>

    <v-divider></v-divider>

    <div class="error lighten-5 pa-2 text-right text-xs-subtitle-1 font-weight-light">      
       <v-icon
        >
          mdi-calendar
        </v-icon>
       {{ article.createdAt | formatDate}}   
    </div>


  </v-card>
  
</div>


  <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="numberOfPages"
    ></v-pagination>
  </div>

    </v-col>
  </v-row>
</template>

<script>

export default {
    head: {
    title: 'Home page',
  },
  components: {
  },
  data () {
    return {
        articles: [],
        articlesPerPage: 3,
        currentPage:1,
        articleStart: 0,
        articleEnd: 1.
    } 
  }, 
  computed: {
   numberOfPages: function() {
      return    Math.ceil(this.articles.length/this.articlesPerPage)   
    }                                                             
  },
  watch: {
    currentPage: function () {
      this.articleStart = (this.currentPage-1) * this.articlesPerPage
      this.articleEnd = (this.currentPage-1) * this.articlesPerPage + this.articlesPerPage
    }
  },
async asyncData ({ $content }) {

    const articles = await $content('').sortBy('createdAt', 'desc')
    .fetch()

    return {
      articles
    }
  }
  
}
</script>
