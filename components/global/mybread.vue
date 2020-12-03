<template>
  
<div>
  <v-breadcrumbs
      :items="items"
    ></v-breadcrumbs>  
</div>

   
</template>

<script>
  export default {
    props: {
      current: {
        type: String,
      }
    },
    data () {
      return {
          items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      }
   
    },
 watch: {
    $route(to, from) {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')


      console.log(this.$route.fullPath) 

      // url:     /blog/2020/11/20/my-post-url
      // outputs: ['blog','2020','11','20','my-post-url']

   
    }
  }
  }
</script>


