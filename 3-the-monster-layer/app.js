new Vue({
  el: '#app',
  data: {
    monster: {
      score: 100,
      attack_score: [],
    },
    player: {
      score: 100,
      attack_score: [],
    },
    start_game: false,
    init_attack: false,
    init_special: false,
    init_heal: false,
  },
  watch: {
    init_attack: function() {
      let vm_instance = this
      this.restartValue(vm_instance.init_attack)
    },
    init_special: function () {
      let vm_instance = this
      this.restartValue(vm_instance.init_special)
    },
    init_heal: function () {
      let vm_instance = this
      this.restartValue(vm_instance.init_heal)
    },
  },
  methods: {
    finish: function () {
      // end game and restart values
      if (this.player.score <= 0) {
        alert('finish game... Monster WON!')
        this.start_game = false
        this.player.score = 100
        this.monster.score = 100
        this.player.attack_score = []
        this.monster.attack_score = []
      } else if (this.monster.score <= 0) {
        alert('finish game... Player WON!')
        this.start_game = false
        this.player.score = 100
        this.monster.score = 100
        this.player.attack_score = []
        this.monster.attack_score = []
      }
    },
    restart: function () {
      this.start_game = false
      this.player.score = 100
      this.monster.score = 100
      this.player.attack_score = []
      this.monster.attack_score = []
    },
    attack: function () {
      this.init_attack = true

      // update attack score player and moster
      if (this.init_attack) {
        let attack_player = this.generate_number(3, 25)
        this.monster.attack_score.unshift(attack_player)

        // update attack score enemy
        let attack_monster = this.generate_number(3, 15)
        this.player.attack_score.unshift(attack_monster)

        // update score with attack numbers generate
        let update_score_monster = this.monster.score - attack_player
        let update_score_player = this.player.score - attack_monster

        this.monster.score = update_score_monster
        this.player.score = update_score_player

        this.finish()
      }
    },
    special: function () {
      this.init_special = true
      // update special attack score player and moster
      if (this.init_special) {
        let attack_player = this.generate_number(3, 40)
        this.monster.attack_score.unshift(attack_player)

        // update attack score enemy
        let attack_monster = this.generate_number(3, 20)
        this.player.attack_score.unshift(attack_monster)

        // update score with attack numbers generate
        this.monster.score = this.monster.score - attack_player
        this.player.score = this.player.score - attack_monster
      }
      this.finish()
    },
    heal: function () {
      this.init_heal = true
      // update special attack score player and moster
      if (this.init_heal) {
        let recovery_player = this.generate_number(3, 20)

        if (this.player.score < 90) {
          this.player.attack_score.unshift(recovery_player)
        } else {
          this.player.score = 100
        }

        // update attack score enemy
        let attack_monster = this.generate_number(3, 10)
        this.monster.attack_score.unshift(attack_monster)

        // update score with heal score generated - attack of monster
        this.player.score = (this.player.score + recovery_player) - attack_monster
      }
    },
    generate_number: function (min, max) {
      return Math.floor(Math.random() * max) + min
    },
    restartValue: function (instance) {
      let vm_instance = instance
      setTimeout(() => {
        vm_instance = false
      }, 200)
    },
  }
})