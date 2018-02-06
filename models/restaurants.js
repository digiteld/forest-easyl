'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('restaurants', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.STRING,
    },
    lon: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    person_capacity: {
      type: DataTypes.INTEGER,
    },
    created_date: {
      type: DataTypes.DATE,
    },
    picture: {
      type: DataTypes.STRING,
    },
    schedule: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  }, {
    tableName: 'restaurants',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

