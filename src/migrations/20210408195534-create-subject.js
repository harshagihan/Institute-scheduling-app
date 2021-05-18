'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subjectName: {
        type: Sequelize.STRING
      },
      subjectCode: {
        type: Sequelize.STRING
      },
      academicYear: {
        type: Sequelize.INTEGER
      },
      academicSemester: {
        type: Sequelize.INTEGER
      },
      lectureHour: {
        type: Sequelize.INTEGER
      },
      tutorialHour: {
        type: Sequelize.INTEGER
      },
      labHour: {
        type: Sequelize.INTEGER
      },
      evaluationHour: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subjects');
  }
};