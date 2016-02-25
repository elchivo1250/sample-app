module.exports = function (sequelize, DataTypes) {
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

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    hashField: 'password',
    saltField: 'salt'
  });

  return User;
};
