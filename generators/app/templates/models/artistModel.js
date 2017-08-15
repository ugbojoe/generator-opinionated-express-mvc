const Bookshelf = require('../bookshelf');
require('./albumModel')

const Artist = Bookshelf.Model.extend({
  tableName: 'artists',
  hasTimestamps: true,
  albums: function() {
    return this.hasMany('Album');
  },
});

module.exports = Bookshelf.model('Artist', Artist);
