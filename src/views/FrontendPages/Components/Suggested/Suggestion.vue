<template>
 <section id="iq-suggestede" class="s-margin">
   <b-container fluid>
      <b-row>
         <b-col sm="12" class="overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
               <h4 class="main-title">Suggested For You</h4>
               <router-link :to="{ name: 'landing-page.show-category' }" class="text-primary">View all</router-link>
            </div>
            <div class="suggestede-contens">
               <Slick class="list-inline favorites-slider row p-0 mb-0" :option="suggestionSliderOption">
                  <li class="slide-item" v-for="(item,index) in suggestionData" :key="index">
                     <router-link :to="{ name: 'landing-page.movie-detail' }">
                        <div class="block-images position-relative">
                           <div class="img-box">
                              <img :src="item.image" class="img-fluid" alt="">
                           </div>
                           <div class="block-description">
                              <h6>{{item.title}}</h6>
                              <div class="movie-time d-flex align-items-center my-2">
                                 <div class="badge badge-secondary p-1 mr-2">{{item.age}}</div>
                                 <span class="text-white">{{item.time}}</span>
                              </div>
                              <div class="hover-buttons">
                                 <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                 Play Now</span>
                              </div>
                           </div>
                           <div class="block-social-info">
                              <ul class="list-inline p-0 m-0 music-play-lists">
                                 <li><span><i class="ri-volume-mute-fill"></i></span></li>
                                 <li><span><i class="ri-heart-fill"></i></span></li>
                                 <li><span><i class="ri-add-line"></i></span></li>
                              </ul>
                           </div>
                        </div>
                     </router-link>
                  </li>
               </Slick>
            </div>
         </b-col>
      </b-row>
   </b-container>
</section>
</template>
<script>

export default {
  name: 'Suggestion',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      suggestionData: [
        { image: require('../../../../assets/images/frontend/suggested/01.jpg'), title: 'The Last Breath', age: '5+', time: '2h 30m' },
        { image: require('../../../../assets/images/frontend/suggested/02.jpg'), title: 'Last Night', age: '22+', time: '2h 30m' },
        { image: require('../../../../assets/images/frontend/suggested/03.jpg'), title: '1980', age: '25+', time: '2h 30m' },
        { image: require('../../../../assets/images/frontend/suggested/03.jpg'), title: '1980', age: '25+', time: '2h 30m' },
        { image: require('../../../../assets/images/frontend/suggested/03.jpg'), title: '1980', age: '25+', time: '2h 30m' }
      ],
      suggestionSliderOption: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>
