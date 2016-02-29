module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Question.hasMany(models.Answer);
      }
    }
  });

  return Question;
};
