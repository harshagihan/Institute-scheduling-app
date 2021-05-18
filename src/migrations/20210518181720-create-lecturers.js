'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lecturers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lecturerName: {
        type: Sequelize.STRING
      },
      empId: {
        type: Sequelize.INTEGER
      },
      department: {
        type: Sequelize.INTEGER
      },
      faculty: {
        type: Sequelize.INTEGER
      },
      center: {
        type: Sequelize.INTEGER
      },
      building: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      isActive: {
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
    await queryInterface.dropTable('Lecturers');
  }
};