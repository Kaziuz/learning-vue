import Vue from 'vue'

export const loadData = ({ commit }) => {
  // aqui es sin el $ porque estamos
  // accediendo al objeto de vue en si mismo

  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const { stocks, funds, stockPortfolio } = data
        console.log('load data', data)

        // organizo data para portfolio
        const portfolio = {
          stockPortfolio,
          funds,
        }

        commit('SET_STOCKS', stocks) // set data stocks store
        commit('SET_PORTFOLIO', portfolio) // set data portfolio
      }
    })
}