'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('recipe_ingredient_join', {
    id: { type: 'int', primaryKey: true },
    ingredient_id: 'int',
    recipe_id: 'int'
  });
};

exports.down = function(db) {
  return db.dropTable('recipe_ingredient_join');
};

exports._meta = {
  "version": 1
};
