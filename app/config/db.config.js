module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "task_lists",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};