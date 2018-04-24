// import Datastore from 'nedb'
// let db = null

import config from '../../configuration.json'
import axios from 'axios'

const controller = {

  connect () {},

  disconnect () {},

  create (document) {},

  get () {},

  getAll (model) {
    let api_data
    axios
      .get(config.strapi_url + model + "/")
      .then(response => {api_data = response.data})
      .catch(error => {
        console.log(error)
        // this.isError = true
      })
      // .finally(() => this.isLoading = false)
      return api_data
  },



  search () {},
  edit () {},
  delete () {}
}

export default controller
