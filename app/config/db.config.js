var config = {
development: {
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
},
production: {
 DB_URL=ec2-34-233-114-40.compute-1.amazonaws.com
 DB_NAME=d56ah1es5shct9
 DB_USERNAME=wlxblxmtviynbz
 DB_PASSWORD=b0643dc4a292fd9acd24862aee5187a4fbdfb94085724a134dccd23600e4c30f
 DB_PORT=5432
 DATABASE_URL=postgres://wlxblxmtviynbz:b0643dc4a292fd9acd24862aee5187a4fbdfb94085724a134dccd23600e4c30f@ec2-34-233-114-40.compute-1.amazonaws.com:5432/d56ah1es5shct9
}
};
module.exports = config;
