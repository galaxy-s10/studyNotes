export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (xxx, par) {
      xxx.count = xxx.count + par
      console.log(xxx.count + ',' + par)
    }
  },
  actions: {
    // 默认写法
    ooo (context, par) {
      context.commit('add', par)
    },
    // es6参数解构写法
    ooo ({ commit }, par) {
      commit('add', par)
    },
    // ooo (context, payload) {
    //   setTimeout(() => {
    //     context.commit('add', 100)
    //     console.log(payload.msg)
    //     payload.suc()
    //   }, 1000)
    // },

    // ooo (context, payload) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       context.commit('add', 100)
    //       console.log(payload)
    //       resolve('ok')
    //     }, 1000)
    //   })
    // },

    // ooo ({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       commit('add', 100)
    //       console.log(payload)
    //       resolve('ok')
    //     }, 1000)
    //   })
    // }
  }
})
