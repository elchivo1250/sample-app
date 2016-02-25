module.exports = function createQuestion(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        Question.hasMany(models.Answer);
      }
    }
  });

  return Question;
};
