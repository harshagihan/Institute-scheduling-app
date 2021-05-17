'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeSlots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TimeSlots.init({
    type: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    slot: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TimeSlots',
  });
  return TimeSlots;
};