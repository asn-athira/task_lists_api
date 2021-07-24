module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    project_name: {
      type: Sequelize.STRING
    },
    user: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    si_no: {
      type: Sequelize.INTEGER
    }
  });

  return Task;
};