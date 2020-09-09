import stocksData from '../../data/stocks'

const state = {
  stocks: []
}


// modifican el store
const mutations = {
  'SET_STOCKS' (state, payload) {
    state.stocks = payload
  },
  'RND_STOCKS' (state) {
    // agrego a mi precio actual 0.5 y 1.5
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
}

// cogen las mutations y las ejecuta
const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order); // esta se ejecuta en el modules/portfolio
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocksData)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}