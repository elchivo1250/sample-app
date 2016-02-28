module.exports = function createUserAnswer(sequelize, DataTypes) {
  var UserAnswer = sequelize.define('UserAnswer', {
  }, {
    classMethods: {
      associate: function associate(models) {
        UserAnswer.belongsTo(models.User);
        UserAnswer.belongsTo(models.Answer);
      }
    }
  });

  return UserAnswer;
};
