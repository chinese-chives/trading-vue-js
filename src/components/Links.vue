<template>
  <span style="z-index: 100000">
    <span v-for="(link, idx) in links" :key="idx">
      <img :src="link[2]" class="t-vue-lbtn" :title="link[1]" :alt="link[1]" @click="open(link[0])" >
    </span>
  </span>
</template>

<script>
import  Icons from '../stuff/icons.json'

export default {
  data() {
    return {}
  },
  computed: {
    links() {
      let params = new URLSearchParams(window.location.href.split('?')[1])
      let code = params.get('code')
      let prefix = getMarket(code) == '1' ? 'SH' : 'SZ'

      return [
        [`http://stockpage.10jqka.com.cn/${code}/`, '同花顺', Icons['ths.png']],
        [`https://xueqiu.com/S/${prefix}${code}`, '雪球', Icons['snow-ball.png']],
        [`http://quote.eastmoney.com/${prefix}${code}.html`, '东财', Icons['east-money.png']]
      ]
    }
  },
  methods: {
    open(link='') {
      console.log(`open`, link)
      window.open(link)
    }
  }
}


const secidMap = {
  '0': '0',
  '3': '0',
  '8': '0',
  '4': '0',
  '6': '1'
}

function getMarket(code) {
  for (let k in secidMap) {
    if (code.startsWith(k)) return secidMap[k]
  }

  throw `bad-stock-code-${code}`
}

</script>

<style>

.t-vue-lbtn {
  z-index: 100;
  pointer-events: all;
  cursor: pointer;
  height: 26px;
  width: 26px;
  margin-bottom: -5px;
}
</style>
