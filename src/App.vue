<template>
<div id="app">

  <nav role="navigation">
    <ul>
      <li v-for="model in models" v-on:click="setActiveModel(model)" v-bind:key="model.name">{{model.name}}</li>
    </ul>
  </nav>

  <form v-on:submit.prevent="submit">
    <template v-for="(propertie, key) in activeModel.properties" v-if="propertie.editable">
      <div v-bind:key="key">
        <label v-bind:for="key">{{key}}:</label>
        <input v-bind:name="key" v-bind:type="getInputType(propertie.type)"/>
      </div>
    </template>
  </form>

  <table>
    <thead>
      <tr><th v-for="(propertie, key) in activeModel.properties" v-bind:key="key">{{key}}</th></tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
    </tbody>
  </table>
</div>
</template>

<script>
import config from '../configuration.json'
// todo: laden der models in andere datei auslagern
// import controller from '@/controllers/nedb.js'
import controller from '@/controllers/strapi.js'
import customerModel from '@/models/customer.json'
import orderModel from '@/models/order.json'

export default {
  name: 'App',
  components: {},

  data () {
    return {
      // todo: laden der models in andere datei auslagern, in config angeben welche geladen werden sollen
      config,
      customerModel,
      orderModel,
      models: [customerModel, orderModel],
      activeModel: customerModel,
      isUpdating: false,
      updateIndex: -1
    }
  },

  created () {
    // controller.connect('./datastore.db') // todo: in config file auslagern für nedb
    console.log('controller.getAll()')
    console.log(controller.getAll("order"))
  },

  methods: {
    getInputType (type) {
      if (type === 'string') return 'text'
      else if (type === 'number') return 'number'
      else if (type === 'boolean') return 'checkbox'
    },

    setActiveModel (model) {
      this.activeModel = model
    },

    submit () {
      // if (this.updating) {
      //   this.onUpdate()
      //   return
      // }
      // this.books.push(this.book)
      // this.book = {
      //   title: '',
      //   year: '',
      //   author: '',
      //   read: false
      // }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
