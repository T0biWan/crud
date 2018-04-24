//   export default controller {
//
//   function connect ()  {
//     console.log("connected");
//   }
//
//   function disconnect ()  {
//     return null
//   }
//
//   function create ()  {
//     return null
//   }
//
//   function read ()  {
//     return null
//   }
//
//   function update () {
//     return null
//   }
//
//   function deleteEntry () {}
// }

import Datastore from 'nedb'
let db = null

const controller = {
  connect (database) {
    db = new Datastore({filename: database})
    db.loadDatabase()
    return db
  },

  disconnect () {},

  create (document) {
    db.insert(document)
  },

  get (id) {

  },

  getAll () {
    return db.find({}, function (err, docs) {return docs})
  },

  search () {},
  edit () {},
  delete () {}
}

export default controller

// import controller from './datei'
//
// controller.func1()

// var db = new Nedb({filename : 'guitars', autoload: true})
// // db.loadDatabase();
