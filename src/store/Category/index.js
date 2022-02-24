import getters from './getter'
import actions from './action'
import mutations from './mutations'

const state = {
  categoryList: [
    { id: '1', name: 'Drama', description: 'Lorem ipsum dolor sit amet', movie: '20' },
    { id: '2', name: 'Comedy', description: 'Lorem ipsum dolor sit amet', movie: '20' },
    { id: '3', name: 'Romance', description: 'Lorem ipsum dolor sit amet', movie: '20' }
  ]
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
