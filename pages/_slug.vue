
<template>
 <v-row >
    <v-col>
    <article>
        <v-card class="mb-5">

    <v-card-title class="success">
      <NuxtLink to="/"
      style="word-break: break-word;"
     class="text-decoration-none display-5 v-heading  white--text font-weight-light">
      <v-btn          
        class="ma-2"
        color="orange "
        dark
        fab
        small
        elevation="1"
      >
        <v-icon
          dark
        >
          mdi-arrow-left
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

    <div class="orange lighten-5 pa-2 text-right text-xs-subtitle-1 font-weight-light">      
       <v-icon
        >
          mdi-calendar
        </v-icon>
       {{ article.createdAt | formatDate}}   
    </div>


  </v-card>
    </article>
    </v-col>
  </v-row>
</template>



<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('', params.slug).fetch()

      return { article }
    }
  }
</script>