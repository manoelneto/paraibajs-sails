module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },

    category: {
      type: 'string',
      defaultsTo: 'sem categoria'
    },

    price : {
      type: 'integer',
      max: 100
    }
  }
}