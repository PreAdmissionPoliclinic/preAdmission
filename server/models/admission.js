"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admission.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Admission.init(
    {
      tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Tanggal is required",
          },
          notNull: {
            msg: "Tanggal is required",
          },
        },
      },
      namaPasien: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Pasien is required",
          },
          notNull: {
            msg: "Nama Pasien is required",
          },
        },
      },
      noRm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "noRm is required",
          },
          notNull: {
            msg: "noRm is required",
          },
        },
      },
      guarantor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Guarantor is required",
          },
          notNull: {
            msg: "Guarantor is required",
          },
        },
      },
      dokterOperator: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Dokter Operator is required",
          },
          notNull: {
            msg: "Dokter Operator is required",
          },
        },
      },
      rencanaTindakan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Rencana Tindakan is required",
          },
          notNull: {
            msg: "Rencana Tindakan is required",
          },
        },
      },
      jadwalTindakan: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jadwal Tindakan is required",
          },
          notNull: {
            msg: "Jadwal Tindakan is required",
          },
        },
      },
      hargaTindakan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Harga Tindakan is required",
          },
          notNull: {
            msg: "Harga Tindakan is required",
          },
        },
      },
      ktp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Ktp is required",
          },
          notNull: {
            msg: "Ktp is required",
          },
        },
      },
      kk: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kk is required",
          },
          notNull: {
            msg: "Kk is required",
          },
        },
      },
      kartuPeserta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kartu Peserta is required",
          },
          notNull: {
            msg: "Kartu Peserta is required",
          },
        },
      },
      hasilPenunjang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Hasil Penunjang is required",
          },
          notNull: {
            msg: "Hasil Penunjang is required",
          },
        },
      },
      ptm: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Ptm is required",
          },
          notNull: {
            msg: "Ptm is required",
          },
        },
      },
      diterimaVerifikasiAdmin: DataTypes.STRING,
      diajukanVerifikasiAdmin: DataTypes.STRING,
      approveVerifikasiAdmin: DataTypes.STRING,
      review1: DataTypes.STRING,
      review2: DataTypes.STRING,
      review3: DataTypes.STRING,
      approveReview: DataTypes.STRING,
      approveVerifikasiKlinik: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Admission",
    }
  );
  return Admission;
};
