"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Admissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tanggal: {
        type: Sequelize.DATE,
      },
      namaPasien: {
        type: Sequelize.STRING,
      },
      noRm: {
        type: Sequelize.INTEGER,
      },
      guarantor: {
        type: Sequelize.STRING,
      },
      dokterOperator: {
        type: Sequelize.STRING,
      },
      rencanaTindakan: {
        type: Sequelize.STRING,
      },
      jadwalTindakan: {
        type: Sequelize.DATE,
      },
      hargaTindakan: {
        type: Sequelize.INTEGER,
      },
      ktp: {
        type: Sequelize.STRING,
      },
      kk: {
        type: Sequelize.STRING,
      },
      kartuPeserta: {
        type: Sequelize.STRING,
      },
      hasilPenunjang: {
        type: Sequelize.STRING,
      },
      ptm: {
        type: Sequelize.STRING,
      },
      diterimaVerifikasiAdmin: {
        type: Sequelize.STRING,
      },
      diajukanVerifikasiAdmin: {
        type: Sequelize.STRING,
      },
      approveVerifikasiAdmin: {
        type: Sequelize.STRING,
      },
      review1: {
        type: Sequelize.STRING,
      },
      review2: {
        type: Sequelize.STRING,
      },
      review3: {
        type: Sequelize.STRING,
      },
      approveReview: {
        type: Sequelize.STRING,
      },
      approveVerifikasiKlinik: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Admissions", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
