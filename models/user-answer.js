module.exports = function createUserAnswer(sequelize, DataTypes) {
  var UserAnswer = sequelize.define('UserAnswer', {
  }, {
    classMethods: {
      associate: function associate(models) {
        UserAnswer.hasOne(models.User);
        UserAnswer.hasOne(models.Answer);
      }
    }
  });

  return UserAnswer;
};
