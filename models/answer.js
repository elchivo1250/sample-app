module.exports = function createAnswer(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    text: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        Answer.belongsTo(models.Question);
      }
    }
  });

  return Answer;
};
