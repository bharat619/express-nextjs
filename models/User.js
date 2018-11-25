/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "companies",
          key: "id"
        }
      },
      inserted_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      timezone: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Asia/Calcutta"
      },
      reset_password_token: {
        type: DataTypes.STRING,
        allowNull: true
      },
      reset_token_sent_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      profile_pic_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      default_project_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "projects",
          key: "id"
        }
      }
    },
    {
      tableName: "users",
      createdAt: "inserted_at",
      updatedAt: "updated_at",
      underscored: true,
      scopes: {
        archived: { where: { archived: true } },
        unarchived: { where: { archived: false } }
      }
    }
  );

  return User;
};
