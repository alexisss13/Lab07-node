// app/config/db.config.js
export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "tecsup",
  DB: "db",
  PORT: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
