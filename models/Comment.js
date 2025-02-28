const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Posts',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Comment",
        tableName: '"Comments"',
        schema: "public",
    }
);

module.exports = Comment;