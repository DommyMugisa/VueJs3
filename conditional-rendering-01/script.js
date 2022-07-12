const conditionalRendering = {
  data() {
    return { 
      programs: {
        vacist:false,
        catalyst:true,
        bootcamp:true
      },
      program: 'bootcamp'
    }
  }
} 
Vue.createApp(conditionalRendering).mount('#app')

const bulbAssgnt = {
  data() {
    return { 
      bulb:{
        off:true
      }
    }
  },
  methods:{
    toggleOn() {
      this.bulb.off = false
      },
      toggleOff() {
        this.bulb.off = true
        }
    }
  }
Vue.createApp(bulbAssgnt).mount('#thisbulb')



const television = {
  data() {
    return { 
      channel:{
        up:false,
        down: false
      },
      tv:{
        power:false
      }
    }
  },
  methods:{
    toggleUp() {
      this.channel.up = true
      },
    toggleDown() {
        this.channel.down = true
        },
    togglePower(){
      this.tv.power = true
    }
    }
  }
Vue.createApp(television).mount('#thisTV')