module.exports = (sequelize, dataTypes) => {
    let alias = 'Category'; // esto debería estar en singular
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
    const Category = sequelize.define(alias,cols,config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, { 
            as: "products",
            foreignKey: "category_id"
        })

    }

    return Category
};