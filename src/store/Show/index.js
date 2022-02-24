import getters from './getter'
import actions from './action'
import mutations from './mutations'

const state = {
  showList: [
    {
      id: '1',
      name: 'Arrival 1999',
      category: 'Thriller',
      quality: 'Full HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/08.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    }
  ]
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
