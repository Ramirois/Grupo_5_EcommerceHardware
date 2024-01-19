module.exports = (sequelize, dataTypes) => {
    let alias = 'Color'; // esto debería estar en singular
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
    const Color = sequelize.define(alias,cols,config);

    Color.associate = function (models) {
        Color.hasMany(models.Product, { 
            as: "colors",
            foreignKey: "color_id"
        })

    }

    return Color
};