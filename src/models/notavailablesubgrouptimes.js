'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotAvailableSubGroupTimes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NotAvailableSubGroupTimes.init({
    groupID: DataTypes.INTEGER,
    subGroupID: DataTypes.STRING,
    extendSubGroup: DataTypes.STRING,
    dayIDs: DataTypes.STRING,
    timeFrom: DataTypes.STRING,
    timeTo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NotAvailableSubGroupTimes',
  });
  return NotAvailableSubGroupTimes;
};