module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand'; // esto debería estar en singular
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
    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, { 
            as: "brands",
            foreignKey: "brand_id"
        })

    }

    return Brand
};