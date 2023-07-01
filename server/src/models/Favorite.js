const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
      "Favorite", 
      {
         id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
         },

         name:{
            type: DataTypes.STRING,
            allowNull: false,
         },

         status:{
            type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
            allowNull: false,
         },

         species:{
            type: DataTypes.STRING,
            allowNull: false,
         },

         gender:{
            type: DataTypes.ENUM("Female", "Male", "Genderless", "Unkenown"),
         },

         origin:{
            type: DataTypes.STRING,
            allowNull: false,
         },

         Image:{
            type:DataTypes.STRING,
            allowNull: false,
         },
      }, 
      { 
         timestamps: false 
      }
   );
};
