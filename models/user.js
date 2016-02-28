var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING(1024),
    salt: DataTypes.STRING,
    role: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        User.hasMany(models.UserAnswer);
      },
    }
  });

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    hashField: 'password',
    saltField: 'salt'
  });

  return User;
};
