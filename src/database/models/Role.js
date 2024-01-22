module.exports = (sequelize, dataTypes) => {
    let alias = 'Role'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
    const Role = sequelize.define(alias,cols,config);

    Role.associate = function (models) {
        Role.hasMany(models.User, { 
            as: "roles",
            foreignKey: "role_id"
        })

    }

    return Role
};