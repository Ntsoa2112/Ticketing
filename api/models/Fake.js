/**
 * Fake.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code: { type: 'string', required: true },
    size: { type: 'string', required: true },
    chemin: { type: 'string', required: true },
  },

  datastore : 'default'

};

