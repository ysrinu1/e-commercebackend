const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Integer | Doesn't allow null values | Set as primary key | Uses auto increment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Integer | References the product model's id
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    // Integer | References the tag model's id
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
