<template>
<div id="app">

  <nav role="navigation">
    <ul>
      <li v-for="model in models" v-on:click="setActiveModel(model)" v-bind:key="model.name">{{model.name}}</li>
    </ul>
  </nav>

  <form>
    <template v-for="(propertie, key) in activeModel.properties" v-if="propertie.editable">
      <div v-bind:key="key">
        <label v-bind:for="key">{{key}}:</label>
        <input v-bind:name="key" v-bind:type="getInputType(propertie.type)" v-model="v" />
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
// todo: laden der models in andere datei auslagern
import controller from '@/controllers/nedb.js'
import customerModel from '@/models/customer.json'
import orderModel from '@/models/order.json'

export default {
  name: 'App',
  components: {},

  data () {
    return {
      // todo: laden der models in andere datei auslagern, in config angeben welche geladen werden sollen
      customerModel,
      orderModel,
      models: [customerModel, orderModel],
      activeModel: customerModel
    }
  },

  created () {
    controller.connect('./datastore.db') // todo: in config file auslagern
  },

  methods: {
    getInputType (type) {
      if (type === 'string') return 'text'
      else if (type === 'number') return 'number'
      else if (type === 'boolean') return 'checkbox'
    },

    setActiveModel (model) {
      this.activeModel = model
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
