'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Lecturer.init({
    lecturerName: DataTypes.STRING,
    empId: DataTypes.INTEGER,
    department: DataTypes.INTEGER,
    faculty: DataTypes.INTEGER,
    center: DataTypes.INTEGER,
    building: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lecturer',
  });
  return Lecturer;
};