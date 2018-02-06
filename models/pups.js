'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('pups', {
    name: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    sex: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'pups',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

