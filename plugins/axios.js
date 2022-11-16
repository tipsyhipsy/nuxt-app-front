export default ({ $axios }) => {
  $axios.onRequest((config) => {
    console.log(config)
  })
  $axios.onRespons((config) => {
    console.log(config)
  })
  $axios.onError((config) => {
    console.log(config)
  })
}

this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.info = response.data.bpi))
