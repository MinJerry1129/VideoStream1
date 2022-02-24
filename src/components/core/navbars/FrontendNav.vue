<template>
  <!-- TOP Nav Bar -->
<header id="main-header">
   <div class="main-header">
      <b-container fluid>
         <b-row >
            <b-col sm="12">
               <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <b-navbar-toggle target="navbarSupportedContent">
                     <div class="navbar-toggler-icon" data-toggle="collapse">
                        <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                        <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                        <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                     </div>
                  </b-navbar-toggle>
                  <router-link class="navbar-brand" :to="homeURL"> <img class="img-fluid logo" :src="logo" alt="streamit" /></router-link>
                  <b-collapse id="navbarSupportedContent" is-nav>
                     <div class="menu-main-menu-container">
                        <ul id="top-menu" class="navbar-nav ml-auto">
                           <li v-for="(item,index) in items" :key="index" class="menu-item">
                              <router-link :to="item.link">{{item.title}}</router-link>
                           </li>
                        </ul>
                     </div>
                  </b-collapse>
                  <div class="mobile-more-menu">
                     <b-navbar-toggle target="dropdownMenuButton" class="more-toggle">
                        <i class="ri-more-line"></i>
                     </b-navbar-toggle>
                     <b-collapse id="dropdownMenuButton" class="more-menu">
                        <div class="navbar-right position-relative">
                             <slot name="responsiveRight"/>
                        </div>
                     </b-collapse>
                  </div>
                  <div class="navbar-right menu-right">
                     <slot name="responsiveRight"/>
                  </div>
               </nav>
               <div class="nav-overlay"></div>
            </b-col>
         </b-row>
      </b-container>
   </div>
</header>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { APPLOGONAME } from '../../../config/pluginInit'
export default {
  name: 'FrontendNav',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'dashboard.home-1' }) },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    items: { type: Array },
    userprofile: { type: String }
  },
  data () {
    return {
      appName: APPLOGONAME
    }
  }
}
</script>
