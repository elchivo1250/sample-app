module.exports = function createUser(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        User.hasMany(models.UserAnswer);
      }
    }
  });

  return User;
};
