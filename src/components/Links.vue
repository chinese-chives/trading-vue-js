<template>
  <span style="z-index: 100000">
    <span v-for="(link, idx) in links" :key="idx">
      <img :src="link[2]" class="t-vue-lbtn" :title="link[1]" :alt="link[1]" @click="open(link[0])">
    </span>
  </span>
</template>

<script>
import  Icons from '../stuff/icons.json'
import {jys} from './js/utils-stock'

export default {
  data() {
    return {}
  },
  computed: {
    links() {
      let params = new URLSearchParams(window.location.href.split('?')[1])
      let code = params.get('code')
      let prefix = jys(code)

      return [
        [`http://stockpage.10jqka.com.cn/${code}/`, '同花顺', Icons['ths.png']],
        [`https://xueqiu.com/S/${prefix}${code}`, '雪球', Icons['snow-ball.png']],
        [`http://quote.eastmoney.com/${prefix}${prefix === 'bj' ? '/' : ''}${code}.html`, '东财', Icons['east-money.png']]
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

</script>

<style>

.t-vue-lbtn {
  z-index: 100;
  pointer-events: all;
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-bottom: -2px;
}
</style>
