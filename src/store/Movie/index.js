import getters from './getter'
import actions from './action'
import mutations from './mutations'
let list = []
if (localStorage.getItem('movieList') !== null) {
  list = localStorage.getItem('movieList')
} else {
  list = [
    {
      id: '1',
      name: '1980',
      description: 'Lorem ipsum dolor sit amet',
      category: 'Action',
      quality: 'HD',
      releseDate: '2010',
      lang: 'Hndi',
      duration: '2h 23m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/07.jpg')
    }
  ]
}

const state = {
  movieList: list
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
