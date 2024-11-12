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

            },
            userId: {

                allowNull: false,
                type: Sequelize.INTEGER
            },
            status: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Voucheruseds');
    }
};