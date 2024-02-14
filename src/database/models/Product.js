module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
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
        },
        description: {
            type: dataTypes.STRING(200)
        },
        color_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        category_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        brand_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        price: {
            type: dataTypes.DECIMAL(12,2)
        },
        image: {
            type: dataTypes.STRING(100)
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Color, { 
            as: "color",
            foreignKey: "color_id"
        })

        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: 'category_id'
        })

        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: 'brand_id'
        })
    }

    return Product
};