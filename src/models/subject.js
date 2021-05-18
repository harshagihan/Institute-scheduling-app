'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subject.init({
    subjectName: DataTypes.STRING,
    subjectCode: DataTypes.STRING,
    academicYear: DataTypes.INTEGER,
    academicSemester: DataTypes.INTEGER,
    lectureHour: DataTypes.INTEGER,
    tutorialHour: DataTypes.INTEGER,
    labHour: DataTypes.INTEGER,
    evaluationHour: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};