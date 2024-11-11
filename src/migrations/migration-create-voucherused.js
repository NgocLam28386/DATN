'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Voucheruseds', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            voucherId: {
                type: Sequelize.INTEGER,
                allowNull: false,

            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Voucheruseds');
    }
};