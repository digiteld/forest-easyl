'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('booking', {
    master_user_id: {
      type: DataTypes.INTEGER,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
    },
    nb_users: {
      type: DataTypes.INTEGER,
    },
    schedule: {
      type: DataTypes.INTEGER,
    },
    created_date: {
      type: DataTypes.DATE,
    },
    updated_date: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'booking',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

