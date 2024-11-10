'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Vouchers', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            fromDate: {
                type: Sequelize.STRING
            },
            toDate: {
                type: Sequelize.STRING
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Vouchers');
    }
};