'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotAvailableGroupTimes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NotAvailableGroupTimes.init({
    groupID: DataTypes.INTEGER,
    subGroup: DataTypes.STRING,
    dayIDs: DataTypes.STRING,
    timeFrom: DataTypes.STRING,
    timeTo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NotAvailableGroupTimes',
  });
  return NotAvailableGroupTimes;
};