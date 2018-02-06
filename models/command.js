'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('command', {
    user_id: {
      type: DataTypes.INTEGER,
    },
    booking_id: {
      type: DataTypes.INTEGER,
    },
    payment_id: {
      type: DataTypes.INTEGER,
    },
    created_date: {
      type: DataTypes.DATE,
    },
    updated_date: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'command',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

