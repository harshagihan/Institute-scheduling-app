'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotAvailableLectureTimes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NotAvailableLectureTimes.init({
    lecID: DataTypes.INTEGER,
    dayIDs: DataTypes.STRING,
    timeFrom: DataTypes.STRING,
    timeTo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NotAvailableLectureTimes',
  });
  return NotAvailableLectureTimes;
};