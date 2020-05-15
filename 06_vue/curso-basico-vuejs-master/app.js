Vue.component('CoinDetail',{
  props: ['coin'],
  data (){
    return{
      showPrices: false,
      value: 0
    }
  },

  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices

      this.$emit('change-color', 
        this.showPrices ? 'FF96C8' : '3d3d3d')
    }
  },

  computed: {
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`
    },
    convertedValue (){
      if (!this.value){
        return 0
      }
      return this.value / this.coin.price
    }
  },
  template: `
    <div>
      <img 
        v-on:mouseover="toggleShowPrices" 
        v-on:mouseout="toggleShowPrices" 
        v-bind:src="coin.img" v-bind:alt="coin.name"
      >
      <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
          {{ title }}
          <span v-if="coin.changePercent > 0">👆</span>
          <span v-else-if="coin.changePercent < 0">👇</span>
          <span v-else>🤞</span>
          <button v-on:click="toggleShowPrices">{{showPrices ? 'Ocultar precios' : 'Ver precios'}}</button> <!-- Una turnary es como un if:  testCondition ? 'true' : 'false' -->
        </h1>
        <input type="number" v-model="value">
        <span> {{ convertedValue }} </span>
        <table v-show="showPrices == true" style="border: 1px solid black;">
          <tr>
            <td>Index</td>
            <td>Dia de la semana</td>
            <td>Valor</td>
          </tr>
          <tr v-for="(p, i) in coin.pricesWithDays" v-biu¡bd:key="p.day">
            <td class="uppercase" v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }">{{ i }}</td>
            <td class="uppercase" v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }">{{p.day}}</td>
            <td class="uppercase" v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }">{{ p.value }}</td>
          </tr>
        </table>
      </div>`
    })

new Vue({
  el: '#app',

  data () {
    return{
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: -10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
      color: 'f4f4f4',
    }
  },
  methods: {
    updateColor (color) {
      this.color = color || this.color
        .split('')
        .reverse()
        .join('')
    }
  }
})