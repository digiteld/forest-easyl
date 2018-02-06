'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('payment', {
    amount: {
      type: DataTypes.DOUBLE,
    },
    command_id: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    created_date: {
      type: DataTypes.DATE,
    },
    updated_date: {
      type: DataTypes.DATE,
    },
    stripe_id: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'payment',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

