'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeTableGs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TimeTableGs.init({
    ProgramID: DataTypes.INTEGER,
    DayID: DataTypes.INTEGER,
    TimePeriod: DataTypes.STRING,
    SessionID: DataTypes.STRING,
    Lecturers: DataTypes.STRING,
    Rooms: DataTypes.STRING,
    roomIds: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TimeTableGs',
  });
  return TimeTableGs;
};