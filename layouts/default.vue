<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed      
      app
      floating
      
    >
<!-- close icon -->
   <v-card 
    class="d-flex pa-2 d-lg-none"
    outlined
    tile
  >
  <v-spacer></v-spacer>
    <div>      
    <v-icon  @click.stop="drawer = !drawer"
    >
      mdi-close
    </v-icon>
    </div>
  </v-card>

<!-- sidebar (navagation-drawer) menu -->

<v-list 
v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact>
 
        <v-list-item  
          :to="item.to"
          router
          exact    
         v-if="!item.subLinks" > 
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> 

      <v-list-group v-if="item.subLinks" >
        <template v-slot:activator>          
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="sublink in item.subLinks"
          :key="sublink.text"
          :to="sublink.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="sublink.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

    </v-list>

    </v-navigation-drawer>

<!-- top menubar (app-bar) -->
    <v-app-bar
      :clipped-left="clipped"
      flat
      fixed
      app
      dark
      color="#6A76AB"
      shrink-on-scroll
      :height="height"
      src="header.jpg"
      fade-img-on-scroll
      scroll-threshold="500"
    >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

<!-- Nav icon -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none d-xl-flex"/>
<!-- Nav title -->
      <v-toolbar-title v-text="title"/>
      <v-spacer />
 <!--Top menu   -->
<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">      
       <v-btn icon  v-bind="attrs" v-on="on" href="https://www.facebook.com/rozsaly/" target="_blank">
        <v-icon
        x-large>mdi-facebook</v-icon>
      </v-btn>     
      </template>
      <span>Facebook</span>
</v-tooltip>


<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn icon  v-bind="attrs" v-on="on"  href="https://www.youtube.com/user/Rozsaly" target="_blank">
        <v-icon 
        x-large>mdi-video</v-icon>
      </v-btn>
      </template>
      <span>Youtube</span>
</v-tooltip>

    </v-app-bar>

<!-- Main content -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

<!-- Footer -->
<Footer />

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      height: 200,
      clipped: true,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Császló',
          to: '/'
        },
        {
          icon: 'mdi-castle',
          title: 'Községünkről',
          to: '/about'
        },
        {
          icon: 'mdi-warehouse',
          title: 'Polgármesteri Hivatal',
          to: '/hivatal'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Képviselőtestület',
          to: '/testulet'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Rendeletek',
          to: '/inspire',
          subLinks : [
            {
                text : 'Helyi adó (1/2018)',
                to    : '/1_2018',
                icon  : 'mdi-view-list'
            }
        ]
        },
      ],
      title: 'Császló'
    }
  }
}
</script>
